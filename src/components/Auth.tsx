import React, {FC, useState} from 'react';
import {useGetCardsQuery, useLoginUserMutation} from "../store/indexApi";
import {RegisterButton, RegisterForm, RegisterInput} from "../styled-components/styled-components";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setAuth, setToken} from "../store/indexSlice";

const Auth: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();

    const {refetch} = useGetCardsQuery();

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

                console.log( window.localStorage.getItem('auth-token'))
                history.push('/');
                //refetch();
            }).catch(err => console.log(err));

        setUsername('');
        setPassword('');
    }

    return (
        <RegisterForm>
            <RegisterInput
                type="text" id='username' value={username} onChange={handleInputChange} placeholder='Имя'/>
            <RegisterInput
                type="text" id='password' value={password} onChange={handleInputChange} placeholder='Пароль'/>
            <RegisterButton onClick={handleLogin}>Войти</RegisterButton>
        </RegisterForm>
    );
};

export default Auth;


// eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo1ODMsInVzZXJuYW1lIjoia3V6bWEiLCJleHAiOjE2MjY2OTc1MTUsImVtYWlsIjoia3V6bWFAcG9zdC5ydSIsIm9yaWdfaWF0IjoxNjI2NjkzOTE1fQ.ZrJltbzUWrRrvf7uvAknXH9john6u351DDEmR9Bkj_g