export function renderSong(song) {
    const songContainer = document.createElement('div');
    songContainer.innerHTML = '▶ ' + song.artist + ' ' + song.title + ' / ' + song.year;

    songContainer.appendChild(document.createElement('br'))
    const audioElement = document.createElement('audio');
    audioElement.src = song.url;
    audioElement.controls = true;

    songContainer.appendChild(audioElement)

    return songContainer;
}