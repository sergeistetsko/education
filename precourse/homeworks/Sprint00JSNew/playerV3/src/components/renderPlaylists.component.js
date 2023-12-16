import { renderPlaylistContainer } from './playlist/container/renderContainer.component.js'
import { renderPlaylistHeader } from './playlist/header/renderHeader.component.js'
import { renderArticles } from './playlist/articles/renderArticles.component.js'
import { renderTracksInfo } from './playlist/tracksInfo/renderTracksInfo.component.js'
import { renderPlaylistTracks } from './playlist/tracks/renderTracks.component.js'

export function renderPlaylists(playlistData) {
    const playlistContainer = renderPlaylistContainer();
    const playlistHeader = renderPlaylistHeader(playlistContainer, playlistData);

    for (let playlistIndex = 0; playlistIndex < playlistData.length; playlistIndex++) {
        const articleDivElements = renderArticles(playlistHeader, playlistData, playlistIndex);
        renderTracksInfo(articleDivElements.divElement, playlistData, playlistIndex);
        renderPlaylistTracks(articleDivElements.articleElement, playlistData, playlistIndex);
    }
}


