export function createTracks(articleElement, playlistsForCreate, i) {
    const div5Element = document.createElement("div");
    div5Element.className = "playlist-tracks";

    for (let j = 0; j < playlistsForCreate[i].tracks.length; j++) {
        const div6Element = document.createElement("div");
        const img3Element = document.createElement("img");
        const div7Element = document.createElement("div");
        const div8Element = document.createElement("div");
        const img4Element = document.createElement("img");
        const p2Element = document.createElement("p");
        const span4Element = document.createElement("span");
        const audioElement = document.createElement("audio");

        div6Element.className = "track-item";
        img3Element.className = "track-cover";
        img3Element.src = playlistsForCreate[i].tracks[j].coverImageUrl;
        img3Element.alt = "Image" + (j + 1) + "Playlist" + (i + 1);
        div7Element.className = "track-info-container";
        div8Element.className = "track-info";
        if (playlistsForCreate[i].tracks[j].isHot) {
            img4Element.className = "track-hot-indicator";
        } else {
            img4Element.className = "track-empty-indicator";
        }
        img4Element.src = playlistsForCreate[i].tracks[j].isHot ? "assets/images/hotImage.png" : "assets/images/nullImage.png";
        img4Element.alt = "hotImage";
        p2Element.className = "track-title";
        span4Element.className = "track-artist";
        span4Element.textContent = playlistsForCreate[i].tracks[j].artistName + " - ";
        p2Element.textContent = playlistsForCreate[i].tracks[j].title;
        audioElement.className = "track-audio";
        audioElement.src = playlistsForCreate[i].tracks[j].fileUrl;
        audioElement.controls = true;

        p2Element.prepend(span4Element);
        div8Element.appendChild(img4Element);
        div8Element.appendChild(p2Element);
        div7Element.appendChild(div8Element);
        div7Element.appendChild(audioElement);
        div6Element.appendChild(img3Element);
        div6Element.appendChild(div7Element);
        div5Element.appendChild(div6Element);
    }

    articleElement.appendChild(div5Element);
}