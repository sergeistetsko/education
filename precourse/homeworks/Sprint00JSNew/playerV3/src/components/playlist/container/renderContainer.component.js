export function createPlaylistsContainer() {
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