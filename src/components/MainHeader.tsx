import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import {HeaderContainer, LinkItem} from '../styled-components/styled-components';

const MainHeader: FC = () => {
    function handleExit() {
        window.localStorage.removeItem('auth-token');
    }


    const withoutAuth = <>
        <LinkItem>
            <Link to='/register'>Регистрация</Link>
        </LinkItem>
        <Link to='/auth'>Войти</Link>
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
                window.localStorage.getItem('auth-token') ? withoutAuth : withAuth
            }
        </HeaderContainer>
    );
};

export default MainHeader;