export const checkAuth = () => {
    if (window.sessionStorage.getItem('username') === null) {
        return false
    } else {
        return true
    }
}