function createTrackTitle(currentTrack, trackInfoElement, isTrending) {
    // Создание элементов
    const trackIndicatorImgElement = document.createElement('img')
    const trackTitleElement = document.createElement('p')
    const trackArtistNameElement = document.createElement('span')

    // Настройка элементов
    trackIndicatorImgElement.className = 'track-trend-indicator'
    trackIndicatorImgElement.src = 'assets/images/trendImage.png'
    trackIndicatorImgElement.alt = 'Trend Track Indicator'

    trackTitleElement.className = 'track-title'
    trackArtistNameElement.className = 'track-artist'

    trackArtistNameElement.textContent = currentTrack.artistName + ' - '
    trackTitleElement.textContent = currentTrack.title

    // Добавление элементов в документ
    trackInfoElement.append(trackTitleElement)
    trackTitleElement.append(trackArtistNameElement)

    // Если трек является трендовым, добавляем индикатор тренда
    if (isTrending) {
        trackInfoElement.prepend(trackIndicatorImgElement)
    }
}
