export function renderPlaylistContainer() {
    const playlistSectionElement = document.createElement("section");
    const playlistContainerDivElement = document.createElement("div");
    const playlistHeaderElement = document.createElement("header");
    const playlistLogoImageElement = document.createElement("img");

    playlistSectionElement.className = "section";
    playlistContainerDivElement.className = "playlist-containerPlaylists";
    playlistHeaderElement.className = "playlist-headerPlaylists";
    playlistLogoImageElement.src = "assets/images/playlistLogo.png";
    playlistLogoImageElement.alt = "playlistLogo";

    playlistHeaderElement.appendChild(playlistLogoImageElement);
    playlistContainerDivElement.appendChild(playlistHeaderElement);
    playlistSectionElement.appendChild(playlistContainerDivElement);
    document.body.appendChild(playlistSectionElement);

    return playlistContainerDivElement;
}