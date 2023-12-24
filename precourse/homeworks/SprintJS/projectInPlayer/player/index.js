// Данные для плейлиста
// Проработать пути
const playlists = [
    {
        title: 'Hip-Hop Hits',
        coverImageUrl: './assets/images/mainCoverImage1.png',
        info: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 0,
        },
        label: './assets/icons/is-trend.png',
        tracks: [
            {
                coverImageUrl: './assets/images/trackCoverImage1Playlist1.png',
                artistName: 'Eminem',
                title: 'Rap God',
                fileUrl: './assets/audio/eminem-rap-god.mp3',
                isTrend: true,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage2Playlist1.png',
                artistName: '50cent',
                title: 'In da Club',
                fileUrl: './assets/audio/50сent-in-da-club.mp3',
                isTrend: false,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage3Playlist1.png',
                artistName: 'DMX',
                title: 'X Gon\' Give It To Ya',
                fileUrl: './assets/audio/dmx-x-gon-give-it-to-ya.mp3',
                isTrend: true,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage4Playlist1.png',
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                title: 'You Don\'t Know',
                fileUrl: './assets/audio/eminem-50cent-you-dont-know.mp3',
                isTrend: false,
            },
        ],
    },
    {
        title: 'Rap Hits 1990s',
        coverImageUrl: './assets/images/mainCoverImage2.png',
        info: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 0,
        },
        label: './assets/icons/is-trend.png',
        tracks: [
            {
                coverImageUrl: './assets/images/trackCoverImage1Playlist2.png',
                artistName: 'Public Enemy',
                title: 'Fight the Power',
                fileUrl: './assets/audio/public-enemy-fight-the-power.mp3',
                isTrend: true,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage2Playlist2.png',
                artistName: 'Vanila Ice',
                title: 'Ice Ice Baby',
                fileUrl: './assets/audio/vanilla-ice-ice-ice-baby.mp3',
                isTrend: true,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage3Playlist2.png',
                artistName: 'MC Hammer',
                title: 'You Can’t Touch This',
                fileUrl: './assets/audio/mc-hammer-u-can\'t-touch-this.mp3',
                isTrend: false,
            },
            {
                coverImageUrl: './assets/images/trackCoverImage4Playlist2.png',
                artistName: 'Brand Nubian',
                title: 'Brand Nubian',
                fileUrl: './assets/audio/brand-nubian-brand-nubian.mp3',
                isTrend: false,
            },
        ],
    },
]

// Визуализация плейлистов
renderPlaylists(playlists)

// Основные функции по визуализации
// Функция по визуализации плейлистов
function renderPlaylists(playlistsToRender) {
    const playlistContainer = document.getElementById('playlists-wrapper')
    playlistsToRender.forEach((playlistToRender) => renderPlaylist(playlistToRender, playlistContainer))
}

// Функция по визуализации плейлиста
function renderPlaylist(playlistData, parentHtmlElement) {
    const playlistHtmlElement = createHtmlElementWithClasses('div', 'playlist')
    const tracksListHtmlElement = createHtmlElementWithClasses('ul', 'tracks-list')
    parentHtmlElement.append(playlistHtmlElement)

    renderPlaylistHeader(playlistData, playlistHtmlElement)
    playlistHtmlElement.append(tracksListHtmlElement)

    const playlistDurationArray = []
    playlistData.tracks.forEach((trackData) => {
        renderTrack(
            trackData,
            tracksListHtmlElement,
            playlistDurationArray,
            playlistData
        )
    })
}

//  Функция по визуализации трека
function renderTrack(trackData, parentHtmlElement, durationList, playlistData) {
    const trackElement = createHtmlElementWithClasses('li', 'track')
    const trackImageElement = createHtmlElementWithClasses('img', 'track__cover')
    const trackInfoElement = createHtmlElementWithClasses('div', 'track__info')
    const trackTitleElement = createHtmlElementWithClasses('span', 'track__title')
    const trackArtistNameElement = createHtmlElementWithClasses('span', 'track__artist-name')
    const trackNameElement = createHtmlElementWithClasses('span', 'track__name')
    const trackAudioElement = createHtmlElementWithClasses('audio', 'track__audio')
    const isTrendElement = createHtmlElementWithClasses('img', 'track__is-trend')
    if (trackData.isTrend) {
        isTrendElement.src = './assets/icons/is-trend.png'
    }

    trackAudioElement.addEventListener('loadedmetadata', () => {
        durationList.push(trackAudioElement.duration)

        if (durationList.length === playlistData.tracks.length) {
            const playlist = trackAudioElement.closest('.playlist')
            const playlistDuration = playlist.querySelector('.playlist__duration')
            const time = durationList.reduce((acc, value) => acc + value, 0)
            playlistDuration.textContent = convertSecondsToMinutesAndSeconds(time)
        }
    })

    trackImageElement.src = trackData.coverImageUrl
    trackArtistNameElement.innerHTML = `${trackData.artistName} - `
    trackNameElement.innerText = `${trackData.title}`
    trackAudioElement.controls = true
    trackAudioElement.src = trackData.fileUrl

    trackTitleElement.append(isTrendElement, trackArtistNameElement, trackNameElement)
    trackInfoElement.append(trackTitleElement, trackAudioElement)
    trackElement.append(trackImageElement, trackInfoElement)
    parentHtmlElement.append(trackElement)
}

//  Функция по визуализации заглавия плейлиста
function renderPlaylistHeader(playlistData, parentHtmlElement) {
    const playlistHeadingElement = createHtmlElementWithClasses('div', 'playlist__heading')
    renderPlaylistCover(playlistData, playlistHeadingElement)
    renderPlaylistInfo(playlistData, playlistHeadingElement)
    parentHtmlElement.append(playlistHeadingElement)
}

// Функция по визуализации обложки плейлиста
function renderPlaylistCover(playlistData, parentHtmlElement) {
    const playlistCoverWrapperElement = createHtmlElementWithClasses('div', 'playlist__cover-wrapper')
    const playlistCoverImageElement = createHtmlElementWithClasses('img', 'playlist-cover')
    playlistCoverImageElement.src = playlistData.coverImageUrl
    playlistCoverWrapperElement.append(playlistCoverImageElement)
    parentHtmlElement.append(playlistCoverWrapperElement)
}

// Функции по визуализации информации о плейлисте
function renderPlaylistInfo(playlistData, parentHtmlElement) {
    const playlistInfoWrapperElement = createHtmlElementWithClasses('div', 'playlist__info-wrapper')
    renderPlaylistSubtitle(playlistInfoWrapperElement)
    renderPlaylistTitle(playlistData, playlistInfoWrapperElement)
    renderTrackCountAndDuration(playlistData, playlistInfoWrapperElement)
    renderTopThreeArtistsAndOthers(playlistData, playlistInfoWrapperElement)
    parentHtmlElement.append(playlistInfoWrapperElement)
}

function renderPlaylistSubtitle(parentHtmlElement) {
    const playlistSubtitleWrapperElement = createHtmlElementWithClasses('div', 'playlist__subtitle-wrapper')
    const playlistSubtitleElement = createHtmlElementWithClasses('span', 'playlist__subtitle')
    playlistSubtitleElement.innerHTML = `Playlist`
    playlistSubtitleWrapperElement.append(playlistSubtitleElement)
    parentHtmlElement.append(playlistSubtitleWrapperElement)
}

function renderPlaylistTitle(playlistData, parentHtmlElement) {
    const playlistTitleElement = createHtmlElementWithClasses('h2', 'playlist__title')
    playlistTitleElement.append(playlistData.title)
    parentHtmlElement.append(playlistTitleElement)
}

function renderTopThreeArtistsAndOthers(playlistData, targetElement) {
    const topThreeTracks = playlistData.tracks.slice(0, 3)
    const playlistArtistsContainer = createHtmlElementWithClasses('span', 'playlist__artists')
    const topThreeArtists = topThreeTracks.map((track) => ' ' + track.artistName)
    const otherArtistsIndicator = createHtmlElementWithClasses('span', 'playlist__and-other')
    otherArtistsIndicator.append(' ' + 'and others')
    playlistArtistsContainer.append(topThreeArtists, otherArtistsIndicator)
    targetElement.append(playlistArtistsContainer)
}

// Функции по визуализации времени треков
function renderTrackCountAndDuration(trackData, targetElement) {
    const countAndDurationContainer = createHtmlElementWithClasses('div', 'playlist__count-duration-wrapper')
    renderNumberOfTracks(trackData, countAndDurationContainer)
    renderPlaylistDuration(trackData, countAndDurationContainer)
    targetElement.append(countAndDurationContainer)
}

function renderNumberOfTracks(trackData, targetElement) {
    const trackCountElement = createHtmlElementWithClasses('span', 'playlist__count')
    trackCountElement.append(`${trackData.tracks.length} tracks, `)
    targetElement.append(trackCountElement)
}

function renderPlaylistDuration(trackData, targetElement) {
    const durationElement = createHtmlElementWithClasses('span', 'playlist__duration')
    targetElement.append(durationElement)
}

// Вспомогательные функции
// Функция по созданию элемента с классами
function createHtmlElementWithClasses(tagName, ...classNames) {
    const htmlElementWithClasses = document.createElement(tagName)
    classNames.forEach((className) => htmlElementWithClasses.classList.add(className))
    return htmlElementWithClasses
}

// Функция по конвертации секунд в минуты и секунды
function convertSecondsToMinutesAndSeconds(timeInSeconds) {
    const minutesPart = (timeInSeconds - (timeInSeconds % 60)) / 60
    const secondsPart = Math.floor(timeInSeconds % 60)
    return `${minutesPart}m ${secondsPart}s`
}
