function createTrackContainer(tracksContainerElement) {
    // Создание элементов
    const trackItemElement = document.createElement('div')
    const trackInfoContainerElement = document.createElement('div')
    const trackInfoElement = document.createElement('div')

    // Настройка элементов
    trackItemElement.className = 'track-item'
    trackInfoContainerElement.className = 'track-info-containerPlaylists'
    trackInfoElement.className = 'track-info'

    // Добавление элементов в документ
    trackInfoContainerElement.append(trackInfoElement)
    trackItemElement.append(trackInfoContainerElement)
    tracksContainerElement.append(trackItemElement)
}