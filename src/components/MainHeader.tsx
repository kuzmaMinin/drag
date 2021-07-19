import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, LinkItem } from '../styled-components/styled-components';

const MainHeader: FC = () => {
    return (
        <HeaderContainer>
            <LinkItem>
                <Link to='/'>Главная</Link>
            </LinkItem>
            <LinkItem>
                <Link to='/register'>Регистрация</Link>
            </LinkItem>
            <LinkItem>
                <Link to='/auth'>Войти</Link>
            </LinkItem>
        </HeaderContainer>
    );
};

export default MainHeader;