function createPlaylistTitle(playlistData, playlistIndex, playlistInfoDiv) {
    const playlistTextSpan = document.createElement('span')
    const playlistNameHeading = document.createElement('h2')
    const playlistDetailsSpan = document.createElement('span')
    const playlistArtistsParagraph = document.createElement('p')
    const highlightedArtistsSpan = document.createElement('span')

    playlistTextSpan.className = 'playlist-text'
    playlistNameHeading.className = 'playlist-name'
    playlistDetailsSpan.className = 'playlist-details'
    playlistArtistsParagraph.className = 'playlist-artists'
    highlightedArtistsSpan.className = 'highlighted-artists'

    playlistTextSpan.textContent = 'Playlist'
    playlistNameHeading.textContent = playlistData[playlistIndex].title
    playlistDetailsSpan.textContent = playlistData[playlistIndex].trackInfo.totalTracksCount + ' track(-s), ' + Math.floor(playlistData[playlistIndex].trackInfo.totalTracksDurationInSeconds / 60) + 'm ' + (playlistData[playlistIndex].trackInfo.totalTracksDurationInSeconds % 60) + 's'
    highlightedArtistsSpan.textContent = playlistData[playlistIndex].tracks.map(track => track.artistName).join(', ')
    playlistArtistsParagraph.textContent = ' and others'

    playlistArtistsParagraph.prepend(highlightedArtistsSpan)
    playlistInfoDiv.append(playlistTextSpan)
    playlistInfoDiv.append(playlistNameHeading)
    playlistInfoDiv.append(playlistDetailsSpan)
    playlistInfoDiv.append(playlistArtistsParagraph)
}
