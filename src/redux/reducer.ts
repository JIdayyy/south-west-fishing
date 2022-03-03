import { combineReducers } from 'redux';

import app from './slices/app/index';

const rootReducer = combineReducers({
    app,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
