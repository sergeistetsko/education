import { renderPlayList } from './renderPlaylist/renderPlaylist.component.js'
export function renderPlayLists(anyPlayLists) {
    for (let i = 0; i < anyPlayLists.length; i++) {
        renderPlayList(anyPlayLists[i])
    }
}