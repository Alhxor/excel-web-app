/**
 * This class will receive all components for a single page and render them
 */
export class Excel {
    constructor(components = []) {
        components.forEach(Component => {
            console.log(Component)
        })
    }

    render() {
        return ''
    }
}
