import React, {FC, useState} from 'react';
import {useLoginUserMutation} from "../store/indexApi";
import {RegisterButton, RegisterForm, RegisterInput} from "../styled-components/styled-components";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setAuth, setToken} from "../store/indexSlice";

const Auth: FC = () => {
    const [username, setUsername] = useState<string>('kuzma');
    const [password, setPassword] = useState<string>('qwerty123!');
    const history = useHistory();

    const dispatch = useDispatch();

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;

        switch (id) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }

    const [loginUser] = useLoginUserMutation();

    function handleLogin() {
        const body = {username, password}

        loginUser(body)
            .then((response) => {
                // @ts-ignore
                const token = response.data.token;
                window.localStorage.setItem('auth-token', token);

                dispatch(setToken(token));
                dispatch(setAuth(true));
            })
            .then(() => {
                history.push('/cards');
            })
            .catch(err => console.log(err));

        setUsername('');
        setPassword('');
    }

    return (
        <RegisterForm>
            <RegisterInput
                type="text" id='username' value={username} onChange={handleInputChange} placeholder='Имя'/>
            <RegisterInput
                type="password" id='password' value={password} onChange={handleInputChange} placeholder='Пароль'/>
            <RegisterButton onClick={handleLogin}>Войти</RegisterButton>
        </RegisterForm>
    );
};

export default Auth;
