class Dom {
}

export function $() {
    return new Dom()
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) el.classList.value = classes

    return el
}
