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

// player render

// Создаем основные элементы
let section = document.createElement("section");
let div = document.createElement("div");
let header = document.createElement("header");
let img = document.createElement("img");

// Устанавливаем атрибуты и содержимое
section.className = "section";
div.className = "playlist-containerPlaylists";
header.className = "playlist-headerPlaylists";
img.src = "assets/images/playlistLogo.png";
img.alt = "playlistLogo";

// Добавляем элементы в DOM
header.appendChild(img);
div.appendChild(header);
section.appendChild(div);
document.body.appendChild(section);

// Создаем дополнительные элементы
let section2 = document.createElement("section");
let h1 = document.createElement("h1");
let div2 = document.createElement("div");

// Устанавливаем атрибуты и содержимое
section2.className = "playlist-main";
h1.className = "playlist-title";
h1.textContent = "My Playlists";
div2.className = "playlist-subcontainer";

// Добавляем элементы в DOM
section2.appendChild(h1);
section2.appendChild(div2);
div.appendChild(section2);

// Создаем элементы для статей
for (let  i = 0; i < playlist.length; i++) {
    let  article = document.createElement("article");
    let  div3 = document.createElement("div");
    let  figure = document.createElement("figure");
    let  img2 = document.createElement("img");

    // Устанавливаем атрибуты и содержимое
    article.className = "playlist-item";
    div3.className = "playlist-cover-info";
    figure.className = "playlist-cover";
    img2.src = playlist[i].coverImageUrl;
    img2.alt = "mainCoverImage" + (i + 1);

    // Добавляем элементы в DOM
    figure.appendChild(img2);
    div3.appendChild(figure);
    article.appendChild(div3);
    div2.appendChild(article);

    // Создаем еще больше элементов
    let  div4 = document.createElement("div");
    let  span1 = document.createElement("span");
    let  h2 = document.createElement("h2");
    let  span2 = document.createElement("span");
    let  p = document.createElement("p");
    let  span3 = document.createElement("span");

    // Устанавливаем атрибуты и содержимое
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

    // Добавляем элементы в DOM
    p.prepend(span3);
    div4.appendChild(span1);
    div4.appendChild(h2);
    div4.appendChild(span2);
    div4.appendChild(p);
    div3.appendChild(div4);

    // Создаем элементы для треков
    let  div5 = document.createElement("div");
    div5.className = "playlist-tracks";

    for (let  j = 0; j < playlist[i].tracks.length; j++) {
        let  div6 = document.createElement("div");
        let  img3 = document.createElement("img");
        let  div7 = document.createElement("div");
        let div8 = document.createElement("div");
        let  img4 = document.createElement("img");
        let  p2 = document.createElement("p");
        let  span4 = document.createElement("span");
        let  audio = document.createElement("audio");

        // Устанавливаем атрибуты и содержимое
        div6.className = "track-item";
        img3.className = "track-cover";
        img3.src = playlist[i].tracks[j].coverImageUrl;
        img3.alt = "Image" + (j + 1) + "Playlist" + (i + 1);
        div7.className = "track-info-containerPlaylists";
        div8.className = "track-info";
        if (playlist[i].tracks[j].isHot) {
            img4.className = "track-hot-indicator";
        } else {
            img4.className = "track-empty-indicator";
        }
        img4.src = playlist[i].tracks[j].isHot ? "assets/images/trendImage.png" : "assets/images/nullImage.png";
        img4.alt = "hotImage";
        p2.className = "track-title";
        span4.className = "track-artist";
        span4.textContent = playlist[i].tracks[j].artistName + " - ";
        p2.textContent = playlist[i].tracks[j].title;
        audio.className = "track-audio";
        audio.src = playlist[i].tracks[j].fileUrl;
        audio.controls = true;

        // Добавляем элементы в DOM
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