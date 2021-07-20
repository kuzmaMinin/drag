import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {HeaderContainer, LinkItem} from '../styled-components/styled-components';
import {useHistory} from "react-router";

const MainHeader: FC = () => {
    const history = useHistory();

    function handleExit() {
        window.localStorage.removeItem('auth-token');
        history.push('/auth');
    }

    const withoutAuth = <>
        <LinkItem>
            <Link to='/register'>Регистрация</Link>
        </LinkItem>
        <LinkItem>
            <Link to='/auth'>Войти</Link>
        </LinkItem>
    </>;

    const withAuth = <LinkItem onClick={handleExit}>
        <Link to='/auth'>Выйти</Link>
    </LinkItem>

    return (
        <HeaderContainer>
            <LinkItem>
                <Link to='/'>Главная</Link>
            </LinkItem>
            {
                window.localStorage.getItem('auth-token') ? withAuth : withoutAuth
            }
        </HeaderContainer>
    );
};

export default MainHeader;