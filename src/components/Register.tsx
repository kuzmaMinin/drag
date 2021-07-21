import React, {FC, useState} from 'react';
import {RegisterButton, RegisterForm, RegisterInput} from "../styled-components/styled-components";
import {useCreateUserMutation} from "../store/indexApi";

const Register: FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const {id, value} = e.target;

        switch (id) {
            case 'username':
                setUsername(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
        console.log(username, email, password)
    }

    const register = useCreateUserMutation();
    const [createUser] = useCreateUserMutation();

    function handleRegister() {
        const body = {username, password, email}
        console.log(register, 'register', body, 'body');

        createUser(body)
            .then(response => {
                //@ts-ignore
                const token = response.data.token;
                 window.localStorage.setItem('register-token', token);
        });
    }

    return (
        <RegisterForm>
            <RegisterInput type="text" id='username' value={username} onChange={handleInputChange} placeholder='Имя'/>
            <RegisterInput type="text" id='email' value={email} onChange={handleInputChange} placeholder='Email'/>
            <RegisterInput type="text" id='password' value={password} onChange={handleInputChange} placeholder='Пароль'/>
            <RegisterButton onClick={handleRegister}>Регистрация</RegisterButton>
        </RegisterForm>
    );
};

export default Register;
