// data
const playList = {
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
            trackCoverImageUrl: '.assets/images/trackCoverImage1Playlist1.png',
            artistName: 'Eminem',
            trackTitle: 'Rap God',
            trackFileUrl: './assets/audio/eminem-rap-god.mp3',
            trackDurationInSeconds: 1,
            isTrend: false
        },
        {
            trackId: 2,
            trackCoverImageUrl: '.assets/images/trackCoverImage2Playlist1.png',
            artistName: '50Cent',
            trackTitle: 'In da Club',
            trackFileUrl: './assets/audio/50сent-in-da-club.mp3',
            trackDurationInSeconds: 1,
            isTrend: true
        }
    ]
}
renderPlaylist(playList)
function renderPlaylist(anyPlayList) {
    renderPlaylistHeader(anyPlayList.playListInfo)
    renderTrack(anyPlayList.tracks[0])
    renderTrack(anyPlayList.tracks[1])
}
function renderPlaylistHeader(anyPlayList) {
    const playListTitleElement = document.createElement('h1')
    playListTitleElement.append(anyPlayList.title)
    document.body.append(playListTitleElement)

    const playListCoverElement = document.createElement('img')
    playListCoverElement.src = anyPlayList.coverImageUrl
    document.body.append(playListCoverElement)
}
function renderTrack(anyTrack) {

    const trackElement = document.createElement('div')
    const coverTrack = document.createElement('img')
    coverTrack.src = anyTrack.coverImageUrl
    trackElement.append(coverTrack)
    trackElement.append(anyTrack.artistName + ': ' + anyTrack.trackTitle)

    const audioElement = document.createElement('audio')
    audioElement.src = anyTrack.trackFileUrl
    audioElement.controls = true
    trackElement.append(audioElement)

    document.body.append(trackElement)
}
