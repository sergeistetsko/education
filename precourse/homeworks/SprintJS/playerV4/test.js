const playlists= [
    {
        title: 'Hip-Hop Hits',
        coverImageUrl: 'assets/images/mainCoverImage1.png',
        trackInfo: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
        },
        tracks: [
            {
                artistName: 'Eminem',
                title: 'Rap God',
                fileUrl: 'assets/audio/eminem-rap-god.mp3',
                coverImageUrl: 'assets/images/trackCoverImage1Playlist1.png',
                isTrend: true,
            },
            {
                artistName: '50 Cent',
                title: 'In da Club',
                fileUrl: 'assets/audio/50сent-in-da-club.mp3',
                coverImageUrl: 'assets/images/trackCoverImage2Playlist1.png',
                isTrend: false,
            },
            {
                artistName: 'DMX',
                title: 'X Gon\' Give It To Ya',
                fileUrl: 'assets/audio/dmx-x-gon-give-it-to-ya.mp3',
                coverImageUrl: 'assets/images/trackCoverImage3Playlist1.png',
                isTrend: true,
            },
            {
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                title: 'You Don\'t Know',
                fileUrl: 'assets/audio/eminem-50cent-you-dont-know.mp3',
                coverImageUrl: 'assets/images/trackCoverImage4Playlist1.png',
                isTrend: false,
            },
        ],
    },
    {
        title: 'Rap Hits 1990s',
        coverImageUrl: 'assets/images/mainCoverImage2.png',
        trackInfo: {
            totalTracksCount: 4,
            totalTracksDurationInSeconds: 733,
        },
        tracks: [
            {
                artistName: 'Public Enemy',
                title: 'Fight the Power',
                fileUrl: 'assets/audio/public-enemy-fight-the-power.mp3',
                coverImageUrl: 'assets/images/trackCoverImage1Playlist2.png',
                isTrend: true,
            },
            {
                artistName: 'Vanila Ice',
                title: 'Ice Ice Baby',
                fileUrl: 'assets/audio/vanilla-ice-ice-ice-baby.mp3',
                coverImageUrl: 'assets/images/trackCoverImage2Playlist2.png',
                isTrend: true,
            },
            {
                artistName: 'MC Hammer',
                title: 'You Can’t Touch This',
                fileUrl: 'assets/audio/mc-hammer-u-can\'t-touch-this.mp3',
                coverImageUrl: 'assets/images/trackCoverImage3Playlist2.png',
                isTrend: false,
            },
            {
                artistName: 'Brand Nubian',
                title: 'Brand Nubian',
                fileUrl: 'assets/audio/brand-nubian-brand-nubian.mp3',
                coverImageUrl: 'assets/images/trackCoverImage4Playlist2.png',
                isTrend: false,
            },
        ],
    },
]

createPlaylists(playlists)
function createPlaylists(inputPlaylists) {
    const playlistsContainer = createPlaylistsContainerAndHeader()
    
    
        
    for (let playlistIndex = 0; playlistIndex < inputPlaylists.length; playlistIndex++) {
        const playlist = inputPlaylists[playlistIndex]
        createPlaylist(playlistsContainer, playlist, playlistIndex)
    }
}
function createPlaylistsContainerAndHeader() {
    const playlistsSectionElement = document.createElement('section')
    const playlistsContainerDivElement = document.createElement('div')
    
    const playlistsHeaderElement = document.createElement('header')
    const playlistsLogoImageElement = document.createElement('img')
    
    const mainPlaylistSectionElement = document.createElement('section')
    const playlistTitleElement = document.createElement('h1')
    const playlistSubcontainerDivElement = document.createElement('div')

    mainPlaylistSectionElement.className = 'playlist-main'
    playlistTitleElement.className = 'playlist-title'
    playlistTitleElement.textContent = 'My Playlists'
    playlistSubcontainerDivElement.className = 'playlist-subcontainer'

    playlistsSectionElement.className = 'section'
    playlistsContainerDivElement.className = 'playlist-container'
    playlistsHeaderElement.className = 'playlist-header'
    playlistsLogoImageElement.src = 'assets/images/playlistLogo.png'
    playlistsLogoImageElement.alt = 'playlistLogo'
    
    mainPlaylistSectionElement.appendChild(playlistTitleElement)
    mainPlaylistSectionElement.appendChild(playlistSubcontainerDivElement)
    playlistsContainerDivElement.appendChild(playlistTitleElement)
    
    playlistsHeaderElement.append(playlistsLogoImageElement)
    playlistsContainerDivElement.append(playlistsHeaderElement)
    playlistsSectionElement.append(playlistsContainerDivElement)
    document.body.append(playlistsSectionElement)

    return playlistsContainerDivElement
}
function createPlaylist(inputPlaylistsContainer, inputPlaylist, inputPlaylistIndex) {
    
    const playlistContainer = createPlaylistContainer(inputPlaylistsContainer)
    createPlaylistHeader(playlistContainer, inputPlaylist)

    const tracksContainer = createPlaylistTracksContainer(playlistContainer)
    createPlaylistTracks(tracksContainer, inputPlaylist, inputPlaylistIndex)
}
function createPlaylistContainer(parentDivElement) {
    
    const playlistContainerDivElement = document.createElement('div')

    parentDivElement.className = 'playlist-subcontainer'

    parentDivElement.append(playlistContainerDivElement)
    
    return playlistContainerDivElement
}
function createPlaylistsHeader(parentDivElement) {
    
    const mainPlaylistSectionElement = document.createElement('section')
    const playlistTitleElement = document.createElement('h1')
    const playlistSubcontainerDivElement = document.createElement('div')

    mainPlaylistSectionElement.className = 'playlist-main'
    playlistTitleElement.className = 'playlist-title'
    playlistTitleElement.textContent = 'My Playlists'
    playlistSubcontainerDivElement.className = 'playlist-subcontainer'

    mainPlaylistSectionElement.appendChild(playlistTitleElement)
    mainPlaylistSectionElement.appendChild(playlistSubcontainerDivElement)
    parentDivElement.appendChild(playlistTitleElement)

    return playlistSubcontainerDivElement
}
function createPlaylistTracksContainer(parentDivElement) {
    
    const tracksContainerDivElement = document.createElement('div')
    
    tracksContainerDivElement.className = 'tracks-container'
    
    parentDivElement.appendChild(tracksContainerDivElement)
    
    return tracksContainerDivElement
}
function createPlaylistTracks(tracksContainerElement, playlistData, playlistIndex) {
    for (let trackIndex = 0; trackIndex < playlistData.tracks.length; trackIndex++) {
        const currentTrack = playlistData.tracks[trackIndex];
        createPlaylistTrack(currentTrack, tracksContainerElement, playlistData, playlistIndex, trackIndex);
    }
}
function createPlaylistTrack(currentTrack, tracksContainerElement, playlistData, playlistIndex, trackIndex) {
    const trackItemElement = createTrackContainer(tracksContainerElement);
    const trackInfoElement = document.createElement('div');
    const trackInfoContainerElement = document.createElement('div');
    
    trackInfoElement.className = 'track-info';
    trackInfoContainerElement.className = 'track-info-container';

    trackItemElement.append(trackInfoContainerElement);
    trackInfoContainerElement.append(trackInfoElement);

    createTrackCover(currentTrack, trackItemElement, trackIndex, playlistData, playlistIndex);
    createTrackTitle(currentTrack, trackInfoElement);
    createTrackAudio(currentTrack, trackInfoContainerElement);
}

function createTrackContainer(tracksContainerElement) {
    // Создание элементов
    const trackItemElement = document.createElement('div');
    const trackInfoContainerElement = document.createElement('div');
    const trackInfoElement = document.createElement('div');

    // Настройка элементов
    trackItemElement.className = 'track-item';
    trackInfoContainerElement.className = 'track-info-containerPlaylists';
    trackInfoElement.className = 'track-info';

    // Добавление элементов в документ
    trackInfoContainerElement.append(trackInfoElement);
    trackItemElement.append(trackInfoContainerElement);
    tracksContainerElement.append(trackItemElement);

    return trackItemElement;
}
function createTrackTitle(currentTrack, trackInfoElement, isTrending) {
    // Создание элементов
    const trackIndicatorImgElement = document.createElement('img');
    const trackTitleElement = document.createElement('p');
    const trackArtistNameElement = document.createElement('span');

    // Настройка элементов
    trackIndicatorImgElement.className = 'track-trend-indicator';
    trackIndicatorImgElement.src = 'assets/images/trendImage.png';
    trackIndicatorImgElement.alt = 'Trend Track Indicator';

    trackTitleElement.className = 'track-title';
    trackArtistNameElement.className = 'track-artist';

    trackArtistNameElement.textContent = currentTrack.artistName + ' - ';
    trackTitleElement.textContent = currentTrack.title;

    // Добавление элементов в документ
    trackInfoElement.append(trackTitleElement);
    trackTitleElement.append(trackArtistNameElement);

    // Если трек является трендовым, добавляем индикатор тренда
    if (isTrending) {
        trackInfoElement.prepend(trackIndicatorImgElement);
    }
}
function createTrackCover(currentTrack, trackItemElement, trackIndex, playlistData, playlistIndex) {
    // Создание элементов
    const trackCoverImgElement = document.createElement('img');

    // Настройка элементов
    trackCoverImgElement.className = 'track-cover';
    trackCoverImgElement.src = currentTrack.coverImageUrl;
    trackCoverImgElement.alt = 'Track ' + (trackIndex + 1) + ' - ' + playlistData.title;

    // Добавление элементов в документ
    trackItemElement.append(trackCoverImgElement);
}
function createTrackAudio(currentTrack,trackInfoContainerElement) {
    // Создание элементов
    const trackAudioElement = document.createElement("audio");

    // Настройка элементов
    trackAudioElement.className = "track-audio";
    trackAudioElement.src = currentTrack.fileUrl;
    trackAudioElement.controls = true;

    // Добавление элементов в документ
    trackInfoContainerElement.append(trackAudioElement);
}

function createPlaylistCoverTitleContainer(playlistItemArticleElement, playlistData, playlistIndex) {
    const playlistInfoDiv = document.createElement('div');
    const playlistCoverInfoDivElement = document.createElement('div')

    playlistInfoDiv.className = 'playlist-info'
    playlistCoverInfoDivElement.className = 'playlist-cover-info'

    playlistItemArticleElement.append(playlistInfoDiv, playlistCoverInfoDivElement);

    createPlaylistTitle(playlistData, playlistIndex, playlistInfoDiv);
    createPlaylistCover(playlistData, playlistIndex, playlistCoverInfoDivElement);
}
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
    playlistInfoDiv.append(playlistTextSpan, playlistNameHeading, playlistDetailsSpan, playlistArtistsParagraph)
}
function createPlaylistCover(playlistData, playlistIndex, playlistCoverInfoDivElement) {
    const playlistCoverFigureElement = document.createElement('figure')
    const mainCoverImageElement = document.createElement('img')

    playlistCoverFigureElement.className = 'playlist-cover'
    mainCoverImageElement.src = playlistData[playlistIndex].coverImageUrl
    mainCoverImageElement.alt = "mainCoverImage" + (playlistIndex + 1)

    playlistCoverFigureElement.append(mainCoverImageElement);
    playlistCoverInfoDivElement.append(playlistCoverFigureElement);
}


