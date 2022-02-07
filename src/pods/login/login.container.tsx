import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "core/auth/auth.context";
import { switchRoutes } from "router/router";
import { LoginUser } from "pods/login/api/api";
import { User } from "pods/login/api/api.model";
import { LoginComponent } from "pods/login/login.component";

export const LoginContainer: React.FC = () => {
    const { setUserInfo } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const login = (user: User) => {
        if (LoginUser(user)) {
            debugger;
            setUserInfo(user.login);
            navigate(switchRoutes.root);
        }
    }
    return (
        <LoginComponent login={login} />
    )
}