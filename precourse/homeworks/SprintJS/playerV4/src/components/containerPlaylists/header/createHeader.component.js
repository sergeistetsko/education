function createPlaylistsHeader(parentDivElement) {
    const playlistsSectionElement = document.createElement('section')
    const playlistTitleElement = document.createElement('h1')
    const playlistSubcontainerDivElement = document.createElement('div')

    playlistsSectionElement.className = 'playlist-main'
    playlistTitleElement.className = 'playlist-title'
    playlistTitleElement.textContent = 'My Playlists'
    playlistSubcontainerDivElement.className = 'playlist-subcontainer'

    playlistsSectionElement.appendChild(playlistTitleElement)
    playlistsSectionElement.appendChild(playlistSubcontainerDivElement)
    parentDivElement.appendChild(playlistsSectionElement)
}