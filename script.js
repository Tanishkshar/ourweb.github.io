console.log("Welcome to Spotify!");
let Songindex = 0;
let audioElement = new Audio("songs/let.mp3");
let masterPlay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar");
let songitems = Array.from(document.getElementsByClassName("songItem"));

let gif = document.getElementById("gif");
let songs = [
  {
    songName: "Let me love you!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },
  {
    songName: "play2!",
    filePath: "songs/mast.mp3",

    coverPath: "covers/1.jpg",
  },
  {
    songName: "play3!",
    filePath: "songs/playing1.mp3",

    coverPath: "covers/1.jpg",
  },
  {
    songName: "play4!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },

  {
    songName: "play5!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },

  {
    songName: "play6!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },
  {
    songName: "play7!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },

  {
    songName: "play8!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },

  {
    songName: "play9!",
    filePath: "songs/let.mp3",

    coverPath: "covers/1.jpg",
  },
];

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});

const makeallplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallplays();
      Songindex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${Songindex + 1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);
document.getElementById("next").addEventListener("click", () => {
  if (Songindex > 9) {
    Songindex = 0;
  } else {
    Songindex += 1;
  }
  audioElement.src = `songs/${Songindex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (Songindex <= 0) {
    Songindex = 0;
  } else {
    Songindex -= 1;
  }
  audioElement.src = `songs/${Songindex + 1}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
