// data
const playLists = [
    {
        playListId: 1,
        playListInfo: {
            title: 'Hip-hop hits',
            coverImageUrl: './assets/images/mainCoverImage1.png',
            totalInfo: {
                totalTrackCount: 4,
                totalTracksDurationInSeconds: 733
            }
        },
        tracks: [
            {
                trackId: 1,
                trackCoverImageUrl: './assets/images/trackCoverImage1Playlist1.png',
                artistName: 'Eminem',
                trackTitle: 'Rap God',
                trackFileUrl: './assets/audio/eminem-rap-god.mp3',
                trackDurationInSeconds: 1,
                isTrend: false
            },
            {
                trackId: 2,
                trackCoverImageUrl: './assets/images/trackCoverImage2Playlist1.png',
                artistName: '50Cent',
                trackTitle: 'In da Club',
                trackFileUrl: './assets/audio/50сent-in-da-club.mp3',
                trackDurationInSeconds: 1,
                isTrend: true
            }
        ]
    },
    {
        playListId: 2,
        playListInfo: {
            title: 'Hip-hop hits',
            coverImageUrl: './assets/images/mainCoverImage1.png',
            totalInfo: {
                totalTrackCount: 4,
                totalTracksDurationInSeconds: 733
            }
        },
        tracks: [
            {
                trackId: 1,
                trackCoverImageUrl: './assets/images/trackCoverImage1Playlist1.png',
                artistName: 'Eminem',
                trackTitle: 'Rap God',
                trackFileUrl: './assets/audio/eminem-rap-god.mp3',
                trackDurationInSeconds: 1,
                isTrend: false
            },
            {
                trackId: 2,
                trackCoverImageUrl: './assets/images/trackCoverImage2Playlist1.png',
                artistName: '50Cent',
                trackTitle: 'In da Club',
                trackFileUrl: './assets/audio/50сent-in-da-club.mp3',
                trackDurationInSeconds: 1,
                isTrend: true
            }
        ]
    }
]

// render
function renderPlayList(anyPlayList) {

    const playListIdElement = document.createElement('span')
    playListIdElement.append(' ID: ' + anyPlayList.playListId)
    document.body.append(playListIdElement)

    renderPlayListHeader(anyPlayList.playListInfo)
    for (let i = 0; i < anyPlayList.tracks.length; i++) {
        renderTrack(anyPlayList.tracks[i])
    }
}

function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement('h1')
    playListTitleElement.append(anyPlayListInfo.title)
    document.body.append(playListTitleElement)

    const playListCoverElement = document.createElement('img')
    playListCoverElement.src = anyPlayListInfo.coverImageUrl
    document.body.append(playListCoverElement)

    const playListTotalTrackCountElement = document.createElement('span')
    playListTotalTrackCountElement.append('Tracks count: ' + anyPlayListInfo.totalInfo.totalTrackCount)

    document.body.append(playListTotalTrackCountElement)
}

function renderTrack(anyTrack) {

    const trackElement = document.createElement('div')
    const coverTrackElement = document.createElement('img')
    coverTrackElement.src = anyTrack.trackCoverImageUrl
    trackElement.append(coverTrackElement)
    trackElement.append(anyTrack.artistName + ': ' + anyTrack.trackTitle)

    const audioElement = document.createElement('audio')
    audioElement.src = anyTrack.trackFileUrl
    audioElement.controls = true
    trackElement.append(audioElement)

    document.body.append(trackElement)
}

function renderPlayLists(anyPlayLists) {
    for (let i = 0; i < anyPlayLists.length; i++) {
        renderPlayList(anyPlayLists[i])
    }
}

renderPlayLists(playLists)