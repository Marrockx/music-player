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

function switchSong() {
	musicWrapper.classList.add("play");
	switchButton.querySelector("i.fas").classList.remove("fa-play");
	switchButton.querySelector("i.fas").classList.add("fa-pause");
}

function pauseSong() {
	musicWrapper.classList.remove("play");
}

// Event Listeners to control UI  play, pause, previous, next
switchButton.addEventListener("click", () => {
	const isPlaying = musicWrapper.classList.contains("play");

	if (isPlaying) {
		pauseSong();
	} else {
		switchSong();
	}
});

prevButton.addEventListener("click", () => {
	songIndex--;
	if (songIndex < 0) {
		songIndex = songs.length;
	}
	loadSong(songs[songIndex]);
});

nextButton.addEventListener("click", () => {
	songIndex++;
	if (songIndex > songs.length) {
		songIndex = 0;
	}
	loadSong(songs[songIndex]);
});
