const musicWrapper = document.querySelector(".music-wrapper");
const prevButton = document.querySelector("#previous");
const switchButton = document.querySelector("#switch");
const nextButton = document.querySelector("#next");
const songTitle = document.querySelector("#title");
const songArtist = document.querySelector("#artist");
const actualSong = document.querySelector("#song");
const progressBar = document.querySelector("#progress-bar");
const playProgress = document.querySelector("#progress");
const songCover = document.querySelector("#cover");

// Song Titles
const songs = [
	{
		name: "chance-on-faith",
		title: "Chance On Faith",
		artist: "Heather Sommer & Uplink",
	},
	{
		name: "dreams",
		title: "Dreams",
		artist: "Joakim Karud",
	},
	{
		name: "ilikemebetter",
		title: "I Like Me Better",
		artist: "Anthony De La Torre Ft. Lana Condor",
	},

	{
		name: "new-style",
		title: "New Style",
		artist: "Droptek",
	},
	{
		name: "no-way",
		title: "No Way",
		artist: "Anthony De La Torre Ft. Lana Condor",
	},
];

// Artists
// const artists = [, ];

// Keep track of songs
let songIndex = 1;

// Keep track of artists

// Initially load song info
loadSong(songs[songIndex]);

// Update song details

function loadSong(song) {
	songTitle.textContent = song.title;
	songArtist.textContent = song.artist;
	actualSong.src = `./music/${song.name}.mp3`;
	songCover.src = `/images/${song.name}.jpg`;
}

function playSong() {
	musicWrapper.classList.add("play");
	switchButton.querySelector("i.fas").classList.remove("fa-play");
	switchButton.querySelector("i.fas").classList.add("fa-pause");

	actualSong.play();
}

function pauseSong() {
	musicWrapper.classList.remove("play");
	switchButton.querySelector("i.fas").classList.remove("fa-pause");
	switchButton.querySelector("i.fas").classList.add("fa-play");

	actualSong.pause();
}

function prevSong() {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length - 1;
	}
	loadSong(songs[songIndex]);
	playSong();
}

function nextSong() {
	songIndex++;
	if (songIndex > songs.length - 1) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
	playSong();
}

function updatePlayProgress(evt) {
	// console.log(evt.srcElement.currentTime);
	const { currentTime, duration } = evt.srcElement;
	const progressPercent = (currentTime / duration) * 100;
	// console.log(progressPercent);
	playProgress.style.width = `${progressPercent}%`;
	// also .currentSPot, .duration
}

function setCurrentProgress(evt) {
	const progressWidth = this.clientWidth;

	// console.log(progressWidth);
	const clickX = evt.offsetX;
	console.log(clickX);
	const duration = actualSong.duration;

	actualSong.currentTime = (clickX / progressWidth) * duration;
}

// Event Listeners to control UI  play, pause, previous, next
switchButton.addEventListener("click", () => {
	const isPlaying = musicWrapper.classList.contains("play");

	if (isPlaying) {
		pauseSong();
	} else {
		playSong();
	}
});

// Events to change Song

prevButton.addEventListener("click", prevSong);

nextButton.addEventListener("click", nextSong);

actualSong.addEventListener("timeupdate", updatePlayProgress);

progressBar.addEventListener("click", setCurrentProgress);

actualSong.addEventListener("ended", nextSong);
