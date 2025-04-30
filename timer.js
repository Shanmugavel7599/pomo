mnlet time = 1500, timer, running = false;

function update() {
  let m = Math.floor(time / 60);
  let s = time % 60;
  document.getElementById('timer').textContent =
    `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      update();
    } else {
      clearInterval(timer);
      running = false;
      alert("Time's up!");
      showRandomQuote(); //show quote on timer end
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  running = false;
  update();
}

// Initialize timer display
update();
const quotes = [
  "Keep going, you're doing great!",
  "Another one down, stay focused!",
  "You're crushing it!",
  "Short breaks = long-term productivity!"
];

function showRandomQuote() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').textContent = quote;
}

//show a quote when the page loads
showRandomQuote();

//Audio
const audioPlayer = document.getElementById("audioPlayer");
const songSelector = document.getElementById("songSelector");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Setting initial song
audioPlayer.src = songSelector.value;

songSelector.addEventListener("change", () => {
  audioPlayer.src = songSelector.value;
  audioPlayer.play();
});

playBtn.addEventListener("click", () => {
  audioPlayer.play();
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
});
