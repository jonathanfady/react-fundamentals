export function toKebab(string: string) {
    return string?.replace(/[\s_]+/g, '-').toLowerCase() || "";
}

export function toTitle(string: string) {
    return toKebab(string)?.split('-')
        .map((word: string) => {
            return word.slice(0, 1).toUpperCase() + word.slice(1)
        })
        .join(' ')
        || ""
}