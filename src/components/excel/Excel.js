import {$} from '@core/Dom'
import {getClassName} from '@core/utils'

/**
 * This class will receive all components for a single page and render them
 */
export class Excel {
    constructor(selector, options = {}) {
        this.$el = $(selector)
        this.components = options.components || []

        this.components.forEach(c => console.log(c.className))
    }

    getRoot() {
        const $root = $.create('div', 'excel')

        this.components.forEach(Component => {
            const $el = $.create(
                'div',
                getClassName(Component.className)
            )

            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
        })

        return $root
    }

    render() {
        this.$el.append(this.getRoot())
    }
}
