import Api from "./api";

export const register = (username: string, password: string) => {
    return Api.post('/user', {
        username: username,
        password: password
    });
};

export const login = (username: string, password: string) => {
    return Api.post('/login', {
        username: username,
        password: password
    });
}
