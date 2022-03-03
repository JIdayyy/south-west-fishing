import { RootState } from '@redux/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth, toggleMenu } from '@redux/actions';

const useAppState = () => {
    const dispatch = useDispatch();

    const { isAuth, isMenu } = useSelector((state: RootState) => state.app);

    const dispatchToggleMenu = () => {
        dispatch(toggleMenu());
    };

    const dispatchIsAuth = (isAuthStatus: boolean) =>
        dispatch(setAuth(isAuthStatus));

    return {
        isAuth,
        dispatchToggleMenu,
        dispatchIsAuth,
        isMenu,
    };
};

export default useAppState;
