import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { User } from "pods/login/api/api.model";
import { mq, bp } from 'common/css-helper';
import { css } from "@emotion/react";

interface FormValidation {
    correctLogin: boolean;
    correctPassword: boolean;
}

interface Props {
    login: (user: User) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
    const { login } = props;
    const [user, setUser] = useState<User>({
        login: '',
        password: ''
    });
    const [formValidation, setFormValidation] = useState<FormValidation>({
        correctLogin: true,
        correctPassword: true
    });

    const onSubmitHandler = (): void => {
        formValidation.correctLogin = !user.login ? false : true;
        formValidation.correctPassword = !user.password ? false : true;

        if (formValidation.correctLogin && formValidation.correctPassword)
            login(user);
    }

    const onLoginChange = (e: any): void => {
        setUser({
            ...user,
            login: e.target.value
        })
    }

    const onPasswordChange = (e: any): void => {
        setUser({
            ...user,
            password: e.target.value
        })
    }

    const formClass = css`
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;  
        flex-direction: column;
        row-gap: 10px;
    `;

    const textFieldClass = css`
        width: 25ch;
    `;

    return (
        <form onSubmit={onSubmitHandler} css={formClass}>
            <TextField
                required
                id="standard-required"
                label="User"
                variant="standard"
                onKeyUp={onLoginChange}
                css={textFieldClass}
            />
            <TextField
                required
                id="standard-password-input"
                label="Password"
                type="password"
                variant="standard"
                onKeyUp={onPasswordChange}
                css={textFieldClass}
            />
            <Button type="submit" variant="outlined">Login</Button>
        </form>
    )
}