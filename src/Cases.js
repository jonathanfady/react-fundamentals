export function toKebab(string) {
    return string?.replace(/[\s_]+/g, '-').toLowerCase() || "";
}

export function toTitle(string) {
    return toKebab(string)?.split('-')
        .map(word => {
            return word.slice(0, 1).toUpperCase() + word.slice(1)
        })
        .join(' ')
        || ""
}