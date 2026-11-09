import { api } from "@/boot/axios";
export const login = (username, password) => {
    return api.post('/auth/login',{username,password})

}
export const getProfile = () => {
    return api.get('/profile')
}