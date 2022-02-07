import React from "react";
import { RouteProps, useNavigate } from "react-router-dom";
import { switchRoutes } from "router/router";
import { AuthContext } from "core/auth/auth.context";

export const AuthWrapper: React.FC<RouteProps> = props => {
    const { userInfo } = React.useContext(AuthContext)
    const navigate = useNavigate();

    React.useEffect(() => {
        if (!userInfo) {
            navigate(switchRoutes.login);
        }
    }, [props.path])

    return (
        <>{props.children}</>
    )
}