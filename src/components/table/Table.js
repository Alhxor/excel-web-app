import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
    static className = 'table'

    toHTML() {
        return `
                <div class="table__row">
                    <div class="table__col table__col--head"></div>
                    <div class="table__col table__col--head">A</div>
                    <div class="table__col table__col--head">B</div>
                </div>
                <div class="table__row">
                    <div class="table__col">1</div>
                    <div class="table__col"></div>
                    <div class="table__col"></div>
                </div>
                <div class="table__row">
                    <div class="table__col">2</div>
                    <div class="table__col"></div>
                    <div class="table__col"></div>
                </div>
                <div class="table__row">
                    <div class="table__col">3</div>
                    <div class="table__col"></div>
                    <div class="table__col"></div>
                </div>
            `
    }
}

