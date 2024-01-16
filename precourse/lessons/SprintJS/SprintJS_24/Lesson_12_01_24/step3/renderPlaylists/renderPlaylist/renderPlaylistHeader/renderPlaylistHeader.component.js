export function renderPlayListHeader(anyPlayListInfo) {
    const playListTitleElement = document.createElement('h1')
    playListTitleElement.append(anyPlayListInfo.title)
    document.body.append(playListTitleElement)

    const playListCoverElement = document.createElement('img')
    playListCoverElement.src = anyPlayListInfo.coverImageUrl
    document.body.append(playListCoverElement)

    const playListTotalTrackCountElement = document.createElement('span')
    playListTotalTrackCountElement.append('Tracks count: ' + anyPlayListInfo.totalInfo.totalTrackCount)

    document.body.append(playListTotalTrackCountElement)
}