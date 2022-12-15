export function checkLogin() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    if (username && password) {
        return true
    } else {
        false
    }
}

export function formatTimeStamp(timestamp: number): string {
    const time = new Date(timestamp);
    const Y = time.getFullYear();
    const M = time.getMonth() + 1;
    const D = time.getDate();
    const h = time.getHours().toString().padStart(2, '0');
    const m = time.getMinutes().toString().padStart(2, '0');
    const s = time.getSeconds().toString().padStart(2, '0');

    return `${Y}-${M}-${D} ${h}:${m}:${s}`
}