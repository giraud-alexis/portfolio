const music = document.getElementById("audio-music");
const toggleButton = document.getElementById("music-btn");
let isPlaying = false;
const skillsImg = document.getElementById("skills_shema");
const projectsImg = document.getElementById("projects");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 900) {
    skillsImg.style.opacity = "1";
  }
  if (window.scrollY > 2100) {
    projectsImg.style.opacity = "1";
  }
});

toggleButton.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isPlaying = !isPlaying;
});
