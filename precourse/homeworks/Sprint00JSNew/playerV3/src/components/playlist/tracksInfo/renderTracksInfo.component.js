export function createTracksInfo(articleDiv3Elements, playlistsForCreate, i) {
    const div4Element = document.createElement("div");
    const span1Element = document.createElement("span");
    const h2Element = document.createElement("h2");
    const span2Element = document.createElement("span");
    const pElement = document.createElement("p");
    const span3Element = document.createElement("span");

    div4Element.className = "playlist-info";
    span1Element.className = "playlist-text";
    span1Element.textContent = "Playlist";
    h2Element.className = "playlist-name";
    h2Element.textContent = playlistsForCreate[i].title;
    span2Element.className = "playlist-details";
    span2Element.textContent = playlistsForCreate[i].trackInfo.totalTracksCount + " track(-s), " + Math.floor(playlistsForCreate[i].trackInfo.totalTracksDurationInSeconds / 60) + "m " + (playlistsForCreate[i].trackInfo.totalTracksDurationInSeconds % 60) + "s";
    pElement.className = "playlist-artists";
    span3Element.className = "highlighted-artists";
    span3Element.textContent = playlistsForCreate[i].tracks.map(track => track.artistName).join(", ");
    pElement.textContent = " and others";

    pElement.prepend(span3Element);
    div4Element.appendChild(span1Element);
    div4Element.appendChild(h2Element);
    div4Element.appendChild(span2Element);
    div4Element.appendChild(pElement);
    articleDiv3Elements.appendChild(div4Element);
}