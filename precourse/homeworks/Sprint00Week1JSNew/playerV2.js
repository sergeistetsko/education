// player data
const playlist= [
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
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage1Playlist1.png',
                isHot: true,
            },
            {
                artistName: '50 Cent',
                title: 'In da Club',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage2Playlist1.png',
                isHot: false,
            },
            {
                artistName: 'DMX',
                title: 'X Gon\' Give It To Ya',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage3Playlist1.png',
                isHot: true,
            },
            {
                artistName: 'Eminem feat 50 Cent, Cashis, Lloyd Banks',
                title: 'You Don\'t Know',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage4Playlist1.png',
                isHot: false,
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
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage1Playlist2.png',
                isHot: true,
            },
            {
                artistName: 'Vanila Ice',
                title: 'Ice Ice Baby',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage2Playlist2.png',
                isHot: true,
            },
            {
                artistName: 'MC Hammer',
                title: 'You Can’t Touch This',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage3Playlist2.png',
                isHot: false,
            },
            {
                artistName: 'Brand Nubian',
                title: 'Brand Nubian',
                fileUrl: '#',
                coverImageUrl: 'assets/images/trackCoverImage4Playlist2.png',
                isHot: false,
            },
        ],
    },
]
// render playlist
createPlaylist()
// functions
function createPlaylistContainer() {
    const sectionElement = document.createElement("section");
    const divElement = document.createElement("div");
    const headerElement = document.createElement("header");
    const imgElement = document.createElement("img");

    sectionElement.className = "section";
    divElement.className = "playlist-container";
    headerElement.className = "playlist-header";
    imgElement.src = "assets/images/playlistLogo.png";
    imgElement.alt = "playlistLogo";

    headerElement.appendChild(imgElement);
    divElement.appendChild(headerElement);
    sectionElement.appendChild(divElement);
    document.body.appendChild(sectionElement);

    return divElement;
}
function createPlaylistHeader(divElement) {
    const section2Element = document.createElement("section");
    const h1Element = document.createElement("h1");
    const div2Element = document.createElement("div");

    section2Element.className = "playlist-main";
    h1Element.className = "playlist-title";
    h1Element.textContent = "My Playlists";
    div2Element.className = "playlist-subcontainer";

    section2Element.appendChild(h1Element);
    section2Element.appendChild(div2Element);
    divElement.appendChild(section2Element);

    return div2Element;
}
function createArticle(div2Element, playlist, i) {
    const articleElement = document.createElement("article");
    const div3Element = document.createElement("div");
    const figureElement = document.createElement("figure");
    const img2Element = document.createElement("img");

    articleElement.className = "playlist-item";
    div3Element.className = "playlist-cover-info";
    figureElement.className = "playlist-cover";
    img2Element.src = playlist[i].coverImageUrl;
    img2Element.alt = "mainCoverImage" + (i + 1);

    figureElement.appendChild(img2Element);
    div3Element.appendChild(figureElement);
    articleElement.appendChild(div3Element);
    div2Element.appendChild(articleElement);

    return {article: articleElement, div3: div3Element};
}
function createTrackInfo(articleDiv3Elements, playlistElement, i) {
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
    h2Element.textContent = playlist[i].title;
    span2Element.className = "playlist-details";
    span2Element.textContent = playlist[i].trackInfo.totalTracksCount + " track(-s), " + Math.floor(playlist[i].trackInfo.totalTracksDurationInSeconds / 60) + "m " + (playlist[i].trackInfo.totalTracksDurationInSeconds % 60) + "s";
    pElement.className = "playlist-artists";
    span3Element.className = "highlighted-artists";
    span3Element.textContent = playlist[i].tracks.map(track => track.artistName).join(", ");
    pElement.textContent = " and others";

    pElement.prepend(span3Element);
    div4Element.appendChild(span1Element);
    div4Element.appendChild(h2Element);
    div4Element.appendChild(span2Element);
    div4Element.appendChild(pElement);
    articleDiv3Elements.appendChild(div4Element);
}
function createTracks(articleElement, playlistElement, i) {
    const div5Element = document.createElement("div");
    div5Element.className = "playlist-tracks";

    for (let j = 0; j < playlist[i].tracks.length; j++) {
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
        img3Element.src = playlist[i].tracks[j].coverImageUrl;
        img3Element.alt = "Image" + (j + 1) + "Playlist" + (i + 1);
        div7Element.className = "track-info-container";
        div8Element.className = "track-info";
        if (playlist[i].tracks[j].isHot) {
            img4Element.className = "track-hot-indicator";
        } else {
            img4Element.className = "track-empty-indicator";
        }
        img4Element.src = playlist[i].tracks[j].isHot ? "assets/images/hotImage.png" : "assets/images/nullImage.png";
        img4Element.alt = "hotImage";
        p2Element.className = "track-title";
        span4Element.className = "track-artist";
        span4Element.textContent = playlist[i].tracks[j].artistName + " - ";
        p2Element.textContent = playlist[i].tracks[j].title;
        audioElement.className = "track-audio";
        audioElement.src = playlist[i].tracks[j].fileUrl;
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
function createPlaylist() {
    const playlistContainer = createPlaylistContainer();
    const playlistHeader = createPlaylistHeader(playlistContainer, playlist);

    for (let i = 0; i < playlist.length; i++) {
        const articleDivElements = createArticle(playlistHeader, playlist, i);
        createTrackInfo(articleDivElements.div3, playlist, i);
        createTracks(articleDivElements.article, playlist, i);
    }
}