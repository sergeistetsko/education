function createTrackCover(currentTrack, trackItemElement, trackIndex, playlistData, playlistIndex) {
    // разобраться в параметрах функции
    // Создание элементов
    const trackCoverImgElement = document.createElement('img')

    // Настройка элементов
    trackCoverImgElement.className = 'track-cover'
    trackCoverImgElement.src = currentTrack.coverImageUrl
    trackCoverImgElement.alt = 'Track ' + (trackIndex + 1) + ' - ' + playlistData[playlistIndex].title

    // Добавление элементов в документ
    trackItemElement.append(trackCoverImgElement);
}