// export function toKebab(str) {
//     return str &&
//         str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//             .map(x => x.toLowerCase())
//             .join('-');
// }

export function toKebab(string) {
    return string
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

export function toTitle(string) {
    return toKebab(string)
        .split('-')
        .map(word => {
            return word.slice(0, 1).toUpperCase() + word.slice(1)
        })
        .join(' ')
}