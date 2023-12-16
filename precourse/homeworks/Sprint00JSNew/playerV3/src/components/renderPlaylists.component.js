import { createPlaylistsContainer } from './playlist/container/renderContainer.component.js'
import { createPlaylistsHeader } from './playlist/header/renderHeader.component.js'
import { createArticles } from './playlist/articles/renderArticles.component.js'
import { createTracksInfo } from './playlist/tracksInfo/renderTracksInfo.component.js'
import { createTracks } from './playlist/tracks/renderTracks.component.js'

export function createPlaylists(playlistsForCreate) {
    const playlistsContainer = createPlaylistsContainer();
    const playlistsHeader = createPlaylistsHeader(playlistsContainer, playlistsForCreate);

    for (let i = 0; i < playlistsForCreate.length; i++) {
        const articleDivElements = createArticles(playlistsHeader, playlistsForCreate, i);
        createTracksInfo(articleDivElements.div3, playlistsForCreate, i);
        createTracks(articleDivElements.article, playlistsForCreate, i);
    }
}


