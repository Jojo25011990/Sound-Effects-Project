"use strict";

// *** id audioEL ( elements ) ***
const sounds = [
	"anime",
	"rampage",
	"counterStrike",
	"mortalKombat",
	"heavenlyMusic",
];

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.innerText = sound;

	document.getElementById("buttons").appendChild(btn);

	btn.addEventListener("click", () => {
		stopSounds();

		// *** sound = ID audioEL ***
		document.getElementById(sound).play();
	});
});

function stopSounds() {
	sounds.forEach((sound) => {
		const song = document.getElementById(sound);

		song.pause();
		song.currentTime = 0;
	});
}

// *** animated text, description sounds  ***

const textEL = document.getElementById("text");
const text =
	"Sounds: Anime wow, Dota rampage kills, Counter Strike: ok let's go, Heavenly music. ";
let index = 1;
let speed = 70;

animatedText();

function animatedText() {
	textEL.innerText = text.slice(0, index);
	index++;
	setTimeout(animatedText, speed);
}
