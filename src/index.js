import {Excel} from './components/excel/Excel'
import {Header} from './components/header/Header'
import {Toolbar} from './components/toolbar/Toolbar'
import {Formula} from './components/formula/Formula'
import {Table} from './components/table/Table'

import './scss/index.scss'

const app = new Excel([Header, Toolbar, Formula, Table])
const root = document.getElementById('app')

root.append(app.render())
