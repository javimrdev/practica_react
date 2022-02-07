import React from "react";

interface AuthContextModel {
    userInfo: string;
    setUserInfo: (userInfo: string) => void;
}

export const AuthContext = React.createContext<AuthContextModel>({
    userInfo: null,
    setUserInfo: (userInfo: string) => console.log('did you forget add user context?')
})

export const AuthProvider: React.FC = (props) => {
    const { children } = props
    const [userInfo, setUserInfo] = React.useState<string>(null);

    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    )
}