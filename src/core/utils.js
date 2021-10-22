export function getClassName(name) {
    return `excel__${name} ${name}`
}

export function capitalize(string) {
    if (!string) return ''
    return string[0].toUpperCase() + string.slice(1)
}
