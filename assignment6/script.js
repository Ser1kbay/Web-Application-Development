
 
const tracks = [
    {
        name: "23",
        artist: "Chase atlantic",
        url: "musics/23.mp3",
        cover: "covers/23.webp"
    },
    {
        name: "Consume",
        artist: "Chase atlantic",
        url: "musics/Consume.mp3",
        cover: "covers/Consume.webp"
    },
    {
        name: "Heaven and back",
        artist: "Chase atlantic",
        url: "musics/Heaven and back.mp3",
        cover: "covers/Heaven and back.webp"
    },
    {
        name: "Into it",
        artist: "Chase atlantic",
        url: "musics/Into it.mp3",
        cover: "covers/Into it.webp"
    },
    {
        name: "Swim",
        artist: "Chase atlantic",
        url: "musics/Swim.mp3",
        cover: "covers/Swim.webp"
    },
    {
        name: "The walls",
        artist: "Chase atlantic",
        url: "musics/The walls.mp3",
        cover: "covers/The walls.webp"
    }
];

let currentTrackIndex = 0;
let isPlaying = false;
const audio = new Audio();

window.onload = () => loadTrack(currentTrackIndex);

function loadTrack(index) {
    const track = tracks[index];
    document.getElementById("cover").src = track.cover;
    document.getElementById("track-name").textContent = track.name;
    document.getElementById("artist-name").textContent = track.artist;
    audio.src = track.url;
}


document.getElementById("play-pause").addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        document.getElementById("play-pause").textContent = "Play";
    } else {
        audio.play();
        document.getElementById("play-pause").textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

//след трек
document.getElementById("next").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    document.getElementById("play-pause").textContent = "Pause";
});

// Выбор трека из списка
const trackList = document.getElementById("track-list");
tracks.forEach((track, index) => {
    const li = document.createElement("li");
    li.textContent = `${track.name} - ${track.artist}`;
    li.addEventListener("click", () => {
        currentTrackIndex = index;
        loadTrack(currentTrackIndex);
        audio.play();
        isPlaying = true;
        document.getElementById("play-pause").textContent = "Pause";
    });
    trackList.appendChild(li);
});

// Обновление прогресс-бара
audio.addEventListener("timeupdate", () => {
    document.getElementById("progress-bar").value = (audio.currentTime / audio.duration) * 100;
});

document.getElementById("progress-bar").addEventListener("input", (e) => {
    audio.currentTime = (e.target.value / 100) * audio.duration;
});

// Управление громкостью
document.getElementById("volume").addEventListener("input", (e) => {
    audio.volume = e.target.value;
});
