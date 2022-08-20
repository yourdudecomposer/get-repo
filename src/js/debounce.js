export default function debounce(fn, ms) {
    let timeout;
    return function (rest) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn(rest)
        }, ms);
    }
}