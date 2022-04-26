function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        if (timeout) {
            clearTimeout(timeout)
        }
        return new Promise(resolve => {
            timeout = setTimeout(() => resolve(fn(...args)), delay);
        });
    }
}

export {debounce};