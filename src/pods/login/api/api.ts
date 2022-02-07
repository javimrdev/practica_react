import { User } from "pods/login/api/api.model";

export const LoginUser = (user: User):boolean => {
    if(user.login === 'admin' && user.password === 'test'){
        return true;
    }
    return false;
}