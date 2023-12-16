export function createArticles(div2Element, playlistsForCreate, i) {
    const articleElement = document.createElement("article");
    const div3Element = document.createElement("div");
    const figureElement = document.createElement("figure");
    const img2Element = document.createElement("img");

    articleElement.className = "playlist-item";
    div3Element.className = "playlist-cover-info";
    figureElement.className = "playlist-cover";
    img2Element.src = playlistsForCreate[i].coverImageUrl;
    img2Element.alt = "mainCoverImage" + (i + 1);

    figureElement.appendChild(img2Element);
    div3Element.appendChild(figureElement);
    articleElement.appendChild(div3Element);
    div2Element.appendChild(articleElement);

    return {article: articleElement, div3: div3Element};
}