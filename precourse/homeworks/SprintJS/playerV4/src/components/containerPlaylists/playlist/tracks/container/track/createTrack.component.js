function createPlaylistTrack(currentTrack, trackItemElement, trackInfoElement, trackInfoContainerElement, isTrending) {
    createTrackContainer(tracksContainerElement)
    createTrackCover(currentTrack, trackItemElement)
    createTrackTitle(currentTrack, trackInfoElement, isTrending)
    createTrackAudio(currentTrack, trackInfoContainerElement)
}