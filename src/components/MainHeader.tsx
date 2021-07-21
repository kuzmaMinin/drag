import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {Exit, HeaderContainer, LinkItem} from '../styled-components/styled-components';
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectIsAuth, setAuth} from "../store/indexSlice";

const MainHeader: FC = () => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    const history = useHistory();

    function handleExit() {
        window.localStorage.removeItem('auth-token');
        dispatch(setAuth(false));
        history.push('/auth');
    }

    const withoutAuth = <>
        <LinkItem>
            <Link to='/register'>Регистрация</Link>
        </LinkItem>
        <LinkItem>
            {!isAuth && <Link to='/auth'>Войти</Link>}
        </LinkItem>
    </>;

    const withAuth = <LinkItem onClick={handleExit}>
        <Exit>Выйти</Exit>
    </LinkItem>

    return (
        <HeaderContainer>
            <LinkItem>
                {isAuth && <Link to='/cards'>Карточки</Link>}
            </LinkItem>
            {
                isAuth ? withAuth : withoutAuth
            }
        </HeaderContainer>
    );
};

export default MainHeader;