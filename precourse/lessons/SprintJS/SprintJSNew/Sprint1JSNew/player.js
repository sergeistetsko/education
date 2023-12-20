// data
const playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: '#',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: '#',
            coverImageUrl: '#',
            isHot: false
        },
        {
            artistName: '50 Cent',
            title: 'In da Club',
            fileUrl: '#',
            coverImageUrl: '#',
            isHot: true
        }
    ]
}
// render
renderPlaylist(playlist)
// functions
function renderPlaylist(playlistForRendering) {
    renderPlaylistHeader(playlistForRendering)
    renderTrack(playlistForRendering.tracks[0])
    renderTrack(playlistForRendering.tracks[1])
}
function renderPlaylistHeader(inputPlaylistForRendering) {
// render playlist header
    // render image
    let playlistImageElement = document.createElement('img')
    playlistImageElement.src = inputPlaylistForRendering.coverImageUrl
    document.body.append(playlistImageElement)

    // render title
    let playlistTitleElement = document.createElement('h2')
    playlistTitleElement.append(inputPlaylistForRendering.title)
    document.body.append(playlistTitleElement)
}
function renderTrack(inputTrackForRendering) {
    // render track
    let trackElement = document.createElement('div')
    trackElement.append(inputTrackForRendering.artistName + ' - ' + inputTrackForRendering.title)

    let playerElement = document.createElement('audio')
    playerElement.src = inputTrackForRendering.fileUrl
    playerElement.controls = true
    trackElement.append(playerElement)

    let coverElement = document.createElement('img')
    coverElement.src = inputTrackForRendering.coverImageUrl
    trackElement.append(coverElement)

    document.body.append(trackElement)
}
