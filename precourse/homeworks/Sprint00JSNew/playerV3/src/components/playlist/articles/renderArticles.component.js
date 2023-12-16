export function renderArticles(playlistContainerElement, playlistData, playlistIndex) {
    const playlistItemArticleElement = document.createElement("article");
    const playlistCoverInfoDivElement = document.createElement("div");
    const playlistCoverFigureElement = document.createElement("figure");
    const mainCoverImageElement = document.createElement("img");

    playlistItemArticleElement.className = "playlist-item";
    playlistCoverInfoDivElement.className = "playlist-cover-info";
    playlistCoverFigureElement.className = "playlist-cover";
    mainCoverImageElement.src = playlistData[playlistIndex].coverImageUrl;
    mainCoverImageElement.alt = "mainCoverImage" + (playlistIndex + 1);

    playlistCoverFigureElement.appendChild(mainCoverImageElement);
    playlistCoverInfoDivElement.appendChild(playlistCoverFigureElement);
    playlistItemArticleElement.appendChild(playlistCoverInfoDivElement);
    playlistContainerElement.appendChild(playlistItemArticleElement);

    return {articleElement: playlistItemArticleElement, divElement: playlistCoverInfoDivElement};
}