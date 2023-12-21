function createPlaylistCover(playlistData, playlistIndex, playlistCoverInfoDivElement) {
    const playlistCoverFigureElement = document.createElement('figure')
    const mainCoverImageElement = document.createElement('img')

    playlistCoverFigureElement.className = 'playlist-cover'
    mainCoverImageElement.src = playlistData[playlistIndex].coverImageUrl
    mainCoverImageElement.alt = "mainCoverImage" + (playlistIndex + 1)

    playlistCoverFigureElement.appendChild(mainCoverImageElement);
    playlistCoverInfoDivElement.appendChild(playlistCoverFigureElement);
}
