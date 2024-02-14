import { SettingsPanel } from './settings-panel/settings-panel.component.js'
import { ScoreBlock } from './score-block/score-block.component.js'
import { GameGrid } from './game-grid/game-grid.component.js'

export function Game() {
    const element = document.createElement('div')

    const settingsPanel = SettingsPanel()
    const scoreBlock = ScoreBlock()
    const gameGrid = GameGrid()

    element.append(settingsPanel, scoreBlock, gameGrid)

    return element
}