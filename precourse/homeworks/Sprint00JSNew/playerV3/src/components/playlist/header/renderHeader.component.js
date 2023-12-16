export function renderPlaylistHeader(parentDivElement) {
    const mainPlaylistSectionElement = document.createElement("section");
    const playlistTitleElement = document.createElement("h1");
    const playlistSubcontainerDivElement = document.createElement("div");

    mainPlaylistSectionElement.className = "playlist-main";
    playlistTitleElement.className = "playlist-title";
    playlistTitleElement.textContent = "My Playlists";
    playlistSubcontainerDivElement.className = "playlist-subcontainer";

    mainPlaylistSectionElement.appendChild(playlistTitleElement);
    mainPlaylistSectionElement.appendChild(playlistSubcontainerDivElement);
    parentDivElement.appendChild(mainPlaylistSectionElement);

    return playlistSubcontainerDivElement;
}