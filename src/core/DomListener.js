import {capitalize} from '@core/utils'

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) throw new Error('No $root provided for DomListener')

        this.$root = $root
        this.listeners = listeners
    }

    initDOMListeners() {
        // this = our component (Header, Formula, etc.)
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if (!this[method]) {
                const name = this.name || ''
                throw new Error(
                    `No method ${method} implemented in ${name} Component`
                )
            }

            this.$root.on(listener, this[method].bind(this))
        })
    }

    deleteDOMListeners() {
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

// input => onInput
function getMethodName(eventName) {
    if (!eventName) throw new Error('No eventName provided for getMethodName')
    return `on${capitalize(eventName)}`
}
