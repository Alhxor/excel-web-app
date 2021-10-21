import {ExcelComponent} from '@core/ExcelComponent';

export class Header extends ExcelComponent {
    static className = 'header'

    toHTML() {
        return `
            <div class="header__title" contenteditable="true">New sheet</div>
            <div class="header__buttons">
                <div class="header__button">
                    <i class="material-icons">exit_to_app</i>
                </div>
                <div class="header__button">
                    <i class="material-icons">delete</i>
                </div>
            </div>`
    }
}
