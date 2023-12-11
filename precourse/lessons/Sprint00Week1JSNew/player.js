// data
let playlist = {
    title: 'Hip-Hop Hits',
    coverImageUrl: './playlist1.png',
    info: {
        totalTracksCount: 4,
        totalTracksDurationInSeconds: 733
    },
    tracks: [
        {
            artistName: 'Eminem',
            title: 'Rap God',
            fileUrl: './Eminem_-_Rap_God.mp3',
            coverImageUrl: './playlist1.png',
            isHot: false
        },
        {
            artistName: '50 Cent',
            title: 'In da Club',
            fileUrl: './50_Cent_-_In_da_Club.mp3',
            coverImageUrl: './playlist1.png',
            isHot: true
        }
    ]
}
// render
    // render playlist header
        // render image
let playlistImageElement = document.createElement('img')
playlistImageElement.src = playlist.coverImageUrl
document.body.append(playlistImageElement)

        // render title
let playlistTitleElement = document.createElement('h2')
playlistTitleElement.append(playlist.title)
document.body.append(playlistTitleElement)

let tracksListElement = document.createElement('ul')

        // render track1
let track1Element = document.createElement('li')
track1Element.append(playlist.tracks[0].artistName + ' - ' + playlist.tracks[0].title)
tracksListElement.append(track1Element)

        // render track2
let track2Element = document.createElement('li')
track2Element.append(playlist.tracks[1].artistName + ' - ' + playlist.tracks[1].title)
tracksListElement.append(track2Element)

document.body.append(tracksListElement)

