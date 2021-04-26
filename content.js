chrome.runtime.onMessage.addListener((request) => {
    var videos = document.getElementsByTagName("video");
    for (let video of videos) {
        video.playbackRate = parseInt(request);
    }
});
