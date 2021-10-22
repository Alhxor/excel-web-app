import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input']
        })
    }

    toHTML() {
        return `
                <div class="formula__fx">fx</div>
                <div class="formula__input" contenteditable="true"></div>
            `
    }

    onInput(event) {
        console.log(`Formula: onInput, event:`, event)
        console.log(this.$root)
    }
}
