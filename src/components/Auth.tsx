import React, {FC, useState} from 'react';
import {useCreateUserMutation, useLoginUserMutation} from "../store/indexApi";
import {RegisterButton, RegisterForm, RegisterInput} from "../styled-components/styled-components";

const Auth: FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

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
        console.log(username, password)
    }

    const login = useLoginUserMutation();
    const [loginUser] = useLoginUserMutation();

    function handleLogin() {
        const body = {username, password}
        console.log(login, 'login', body, 'body');

        loginUser(body)
            .then(response => {
                //@ts-ignore
                const token = response.data.token;
                window.localStorage.setItem('auth-token', token);
                console.log(response);
            });
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