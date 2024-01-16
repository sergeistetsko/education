import {renderPlayListHeader} from './renderPlaylistHeader/renderPlaylistHeader.component.js'
import {renderTrack} from './renderTrack/renderTrack.component.js'

export function renderPlayList(anyPlayList) {
    const playListIdElement = document.createElement('span')
    playListIdElement.append(' ID: ' + anyPlayList.playListId)
    document.body.append(playListIdElement)

    renderPlayListHeader(anyPlayList.playListInfo)
    for (let i = 0; i < anyPlayList.tracks.length; i++) {
        renderTrack(anyPlayList.tracks[i])
    }
}