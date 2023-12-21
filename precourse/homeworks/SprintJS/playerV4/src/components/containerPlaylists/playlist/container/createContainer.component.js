function createPlaylistCoverTitleContainer() {
    const playlistItemArticleElement = document.createElement("article");
    const playlistInfoDiv = document.createElement('div');
    const playlistCoverInfoDivElement = document.createElement('div')

    playlistItemArticleElement.className = "playlist-item";
    playlistInfoDiv.className = 'playlist-info'
    playlistCoverInfoDivElement.className = 'playlist-cover-info'

    playlistItemArticleElement.appendChild(playlistCoverInfoDivElement);
    playlistContainerElement.appendChild(playlistItemArticleElement);
    articleContainer.append(playlistInfoDiv);
    playlistItemArticleElement.append(playlistCoverInfoDivElement)
}
