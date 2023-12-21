function createPlaylistTracks(divContainerElements, playlistData, playlistIndex) {
    for (let trackIndex = 0; trackIndex < playlistData[playlistIndex].tracks.length; trackIndex++) {
        const currentTrack = playlistData[playlistIndex].tracks[trackIndex]
        createPlaylistTrack(currentTrack, tracksContainerElement)
    }
}