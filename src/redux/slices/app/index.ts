/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

type AppState = {
    isAuth: boolean;
    isMenu: boolean;
};

const initialState: AppState = {
    isAuth: false,
    isMenu: false,
};

const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        toggleMenu: (state) => {
            state.isMenu = !state.isMenu;
        },
    },
});

export const { setAuth, toggleMenu } = appSlice.actions;

export default appSlice.reducer;
