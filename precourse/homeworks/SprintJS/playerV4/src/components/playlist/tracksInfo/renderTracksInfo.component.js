export function renderTracksInfo(articleContainer, playlistData, playlistIndex) {

    const playlistInfoDiv = document.createElement("div");
    const playlistTextSpan = document.createElement("span");
    const playlistNameHeading = document.createElement("h2");
    const playlistDetailsSpan = document.createElement("span");
    const playlistArtistsParagraph = document.createElement("p");
    const highlightedArtistsSpan = document.createElement("span");


    playlistInfoDiv.className = "playlist-info";
    playlistTextSpan.className = "playlist-text";
    playlistNameHeading.className = "playlist-name";
    playlistDetailsSpan.className = "playlist-details";
    playlistArtistsParagraph.className = "playlist-artists";
    highlightedArtistsSpan.className = "highlighted-artists";


    playlistTextSpan.textContent = "Playlist";
    playlistNameHeading.textContent = playlistData[playlistIndex].title;
    playlistDetailsSpan.textContent = playlistData[playlistIndex].trackInfo.totalTracksCount + " track(-s), " + Math.floor(playlistData[playlistIndex].trackInfo.totalTracksDurationInSeconds / 60) + "m " + (playlistData[playlistIndex].trackInfo.totalTracksDurationInSeconds % 60) + "s";
    highlightedArtistsSpan.textContent = playlistData[playlistIndex].tracks.map(track => track.artistName).join(", ");
    playlistArtistsParagraph.textContent = " and others";


    playlistArtistsParagraph.prepend(highlightedArtistsSpan);
    playlistInfoDiv.appendChild(playlistTextSpan);
    playlistInfoDiv.appendChild(playlistNameHeading);
    playlistInfoDiv.appendChild(playlistDetailsSpan);
    playlistInfoDiv.appendChild(playlistArtistsParagraph);
    articleContainer.appendChild(playlistInfoDiv);
}