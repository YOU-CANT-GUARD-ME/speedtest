const $ = e => document.querySelector(e);

const video = $('video')

$('#play').onclick = () => video.play();
$('#stop').onclick = () => video.pause();
$('#tenPlus').onclick = () => video.currentTime += 10;
$('#tenMin').onclick = () => video.currentTime -= 10;
$('#sound').onclick = () => video.muted = !video.muted;

setInterval(() => {
    minutes.innerHTML = String(Math.floor(video.currentTime / 60)).padStart(2, 0)
    second.innerHTML = String(Math.floor(video.currentTime % 60)).padStart(2, 0)
}, 10)