function createTrackAudio(currentTrack,trackInfoContainerElement) {
    // разобраться в параметрах функции
    // Создание элементов
    const trackAudioElement = document.createElement("audio");

    // Настройка элементов
    trackAudioElement.className = "track-audio";
    trackAudioElement.src = currentTrack.fileUrl;
    trackAudioElement.controls = true;

    // Добавление элементов в документ
    trackInfoContainerElement.appendChild(trackAudioElement);
}