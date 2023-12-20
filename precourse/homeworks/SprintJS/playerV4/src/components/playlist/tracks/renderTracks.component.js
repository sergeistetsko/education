export function renderPlaylistTracks(articleContainer, playlistData, playlistIndex) {
    const tracksContainerElement = document.createElement("div");
    tracksContainerElement.className = "playlist-tracks";

    for (let trackIndex = 0; trackIndex < playlistData[playlistIndex].tracks.length; trackIndex++) {
        const trackItemElement = document.createElement("div");
        const trackCoverImgElement = document.createElement("img");
        const trackInfoContainerElement = document.createElement("div");
        const trackInfoElement = document.createElement("div");
        const trackIndicatorImgElement = document.createElement("img");
        const trackTitleElement = document.createElement("p");
        const trackArtistElement = document.createElement("span");
        const trackAudioElement = document.createElement("audio");

        const currentTrack = playlistData[playlistIndex].tracks[trackIndex];

        trackItemElement.className = "track-item";
        trackCoverImgElement.className = "track-cover";
        trackCoverImgElement.src = currentTrack.coverImageUrl;
        trackCoverImgElement.alt = "Track " + (trackIndex + 1) + " - " + playlistData[playlistIndex].title;
        trackInfoContainerElement.className = "track-info-container";
        trackInfoElement.className = "track-info";
        trackIndicatorImgElement.className = currentTrack.isHot ? "track-hot-indicator" : "track-empty-indicator";
        trackIndicatorImgElement.src = currentTrack.isHot ? "assets/images/hotImage.png" : "assets/images/nullImage.png";
        trackIndicatorImgElement.alt = "Hot Track Indicator";
        trackTitleElement.className = "track-title";
        trackArtistElement.className = "track-artist";
        trackArtistElement.textContent = currentTrack.artistName + " - ";
        trackTitleElement.textContent = currentTrack.title;
        trackAudioElement.className = "track-audio";
        trackAudioElement.src = currentTrack.fileUrl;
        trackAudioElement.controls = true;

        trackTitleElement.prepend(trackArtistElement);
        trackInfoElement.appendChild(trackIndicatorImgElement);
        trackInfoElement.appendChild(trackTitleElement);
        trackInfoContainerElement.appendChild(trackInfoElement);
        trackInfoContainerElement.appendChild(trackAudioElement);
        trackItemElement.appendChild(trackCoverImgElement);
        trackItemElement.appendChild(trackInfoContainerElement);
        tracksContainerElement.appendChild(trackItemElement);
    }

    articleContainer.appendChild(tracksContainerElement);
}