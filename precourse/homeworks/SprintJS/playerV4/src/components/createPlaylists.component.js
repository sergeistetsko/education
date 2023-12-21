function createPlaylists(playlistForCreating) {
    const playlistsContainer = createPlaylistsContainer()
    const playlistHeader = createPlaylistsHeader(playlistsContainer, playlistForCreating)

    for (let playlistIndex = 0; playlistIndex < playlistForCreating.length; playlistIndex++) {
        const articleDivElements = createArticles(playlistHeader, playlistForCreating, playlistIndex)
        createTracksInfo(articleDivElements.divElement, playlistForCreating, playlistIndex)
        createPlaylistsTracks(articleDivElements.articleElement, playlistForCreating, playlistIndex)
    }
}


