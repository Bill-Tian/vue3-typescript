import Cookies from 'js-cookie'

const KEY_TOKEN = 'ADMIN-TOKEN'

export function getToken() {
    return Cookies.get(KEY_TOKEN)
}

export function setToken(token: string) {
    Cookies.set(KEY_TOKEN, token)
}

export function removeToken() {
    return Cookies.remove(KEY_TOKEN)
}