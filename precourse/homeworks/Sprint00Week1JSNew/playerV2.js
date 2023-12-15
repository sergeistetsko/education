// player data
const playlist = [
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
    const section = document.createElement("section");
    const div = document.createElement("div");
    const header = document.createElement("header");
    const img = document.createElement("img");

    section.className = "section";
    div.className = "playlist-container";
    header.className = "playlist-header";
    img.src = "assets/images/playlistLogo.png";
    img.alt = "playlistLogo";

    header.appendChild(img);
    div.appendChild(header);
    section.appendChild(div);
    document.body.appendChild(section);

    return div;
}

function createPlaylistHeader(div) {
    const section2 = document.createElement("section");
    const h1 = document.createElement("h1");
    const div2 = document.createElement("div");

    section2.className = "playlist-main";
    h1.className = "playlist-title";
    h1.textContent = "My Playlists";
    div2.className = "playlist-subcontainer";

    section2.appendChild(h1);
    section2.appendChild(div2);
    div.appendChild(section2);

    return div2;
}
function createArticle(div2, playlist, i) {
    const article = document.createElement("article");
    const div3 = document.createElement("div");
    const figure = document.createElement("figure");
    const img2 = document.createElement("img");

    article.className = "playlist-item";
    div3.className = "playlist-cover-info";
    figure.className = "playlist-cover";
    img2.src = playlist[i].coverImageUrl;
    img2.alt = "mainCoverImage" + (i + 1);

    figure.appendChild(img2);
    div3.appendChild(figure);
    article.appendChild(div3);
    div2.appendChild(article);

    return {article: article, div3: div3};
}

function createTrackInfo(articleDiv3, playlist, i) {
    const div4 = document.createElement("div");
    const span1 = document.createElement("span");
    const h2 = document.createElement("h2");
    const span2 = document.createElement("span");
    const p = document.createElement("p");
    const span3 = document.createElement("span");

    div4.className = "playlist-info";
    span1.className = "playlist-text";
    span1.textContent = "Playlist";
    h2.className = "playlist-name";
    h2.textContent = playlist[i].title;
    span2.className = "playlist-details";
    span2.textContent = playlist[i].trackInfo.totalTracksCount + " track(-s), " + Math.floor(playlist[i].trackInfo.totalTracksDurationInSeconds / 60) + "m " + (playlist[i].trackInfo.totalTracksDurationInSeconds % 60) + "s";
    p.className = "playlist-artists";
    span3.className = "highlighted-artists";
    span3.textContent = playlist[i].tracks.map(track => track.artistName).join(", ");
    p.textContent = " and others";

    p.prepend(span3);
    div4.appendChild(span1);
    div4.appendChild(h2);
    div4.appendChild(span2);
    div4.appendChild(p);
    articleDiv3.appendChild(div4);
}

function createTracks(article, playlist, i) {
    const div5 = document.createElement("div");
    div5.className = "playlist-tracks";

    for (let j = 0; j < playlist[i].tracks.length; j++) {
        const div6 = document.createElement("div");
        const img3 = document.createElement("img");
        const div7 = document.createElement("div");
        const div8 = document.createElement("div");
        const img4 = document.createElement("img");
        const p2 = document.createElement("p");
        const span4 = document.createElement("span");
        const audio = document.createElement("audio");

        div6.className = "track-item";
        img3.className = "track-cover";
        img3.src = playlist[i].tracks[j].coverImageUrl;
        img3.alt = "Image" + (j + 1) + "Playlist" + (i + 1);
        div7.className = "track-info-container";
        div8.className = "track-info";
        if (playlist[i].tracks[j].isHot) {
            img4.className = "track-hot-indicator";
        } else {
            img4.className = "track-empty-indicator";
        }
        img4.src = playlist[i].tracks[j].isHot ? "assets/images/hotImage.png" : "assets/images/nullImage.png";
        img4.alt = "hotImage";
        p2.className = "track-title";
        span4.className = "track-artist";
        span4.textContent = playlist[i].tracks[j].artistName + " - ";
        p2.textContent = playlist[i].tracks[j].title;
        audio.className = "track-audio";
        audio.src = playlist[i].tracks[j].fileUrl;
        audio.controls = true;

        p2.prepend(span4);
        div8.appendChild(img4);
        div8.appendChild(p2);
        div7.appendChild(div8);
        div7.appendChild(audio);
        div6.appendChild(img3);
        div6.appendChild(div7);
        div5.appendChild(div6);
    }

    article.appendChild(div5);
}

function createPlaylist() {
    const playlistContainer = createPlaylistContainer();
    const playlistHeader = createPlaylistHeader(playlistContainer, playlist);

    for (let i = 0; i < playlist.length; i++) {
        const articleDivs = createArticle(playlistHeader, playlist, i);
        createTrackInfo(articleDivs.div3, playlist, i);
        createTracks(articleDivs.article, playlist, i);
    }
}


