import {renderCounter} from './components/renderCounter.js'
import {setChangeDataCallback} from './data/data.js'


renderCounter()

setChangeDataCallback(renderCounter)