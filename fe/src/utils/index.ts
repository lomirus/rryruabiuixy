export function checkLogin() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
        return true
    } else {
        false
    }
}