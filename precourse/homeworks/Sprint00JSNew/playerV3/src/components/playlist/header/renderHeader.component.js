export function createPlaylistsHeader(divElement) {
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