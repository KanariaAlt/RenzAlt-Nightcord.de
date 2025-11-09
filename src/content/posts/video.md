---
title: Music A13 card style test from Nightcord-at25-playlist
published: 2025-08-01
description: Test From my react.
tags: [Music]
category: test
draft: false
---

---
// Komponen Astro biasa, tidak perlu props untuk versi dasar
---

<section class="youtube-section">
  <h2>YouTube</h2>

  <div class="youtube-wrapper">
    <iframe
      id="youtube-player"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5gIf0_xpFPI?enablejsapi=1&rel=0&modestbranding=1&iv_load_policy=3"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>

  <div class="a13-controls">
    <button id="playPauseBtn">▶️</button>
    <div class="a13-progress">
      <div class="a13-wave-wrapper" id="waveWrapper">
        <div class="a13-wave"></div>
        <div class="a13-wave"></div>
      </div>
    </div>
  </div>
</section>

<style>
.youtube-section {
  text-align: center;
  background: #1e1b1f;
  padding: 20px;
  border-radius: 12px;
}

.youtube-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 16 / 9;
  max-width: 640px;
  margin: auto;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.a13-controls {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

#a13-progress, .a13-wave-wrapper {
  width: 100%;
}

.a13-wave {
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #00bfff, #ff69b4);
  animation: waveMove 2s linear infinite;
}

@keyframes waveMove {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>

<script is:inline>
let player;
let isPlaying = false;
const playPauseBtn = document.getElementById("playPauseBtn");
const waveWrapper = document.getElementById("waveWrapper");

function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-player", {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    playPauseBtn.textContent = "⏸️";
    waveWrapper.style.opacity = "1";
  } else if (
    event.data === YT.PlayerState.PAUSED ||
    event.data === YT.PlayerState.BUFFERING
  ) {
    isPlaying = false;
    playPauseBtn.textContent = "▶️";
    waveWrapper.style.opacity = "0.4";
  } else if (event.data === YT.PlayerState.ENDED) {
    // Mencegah overlay "More videos"
    player.seekTo(0);
    player.pauseVideo();
    isPlaying = false;
    playPauseBtn.textContent = "▶️";
    waveWrapper.style.opacity = "0.4";
  }
}

playPauseBtn.addEventListener("click", () => {
  if (!player) return;
  if (isPlaying) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

// Muat API YouTube secara dinamis
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
</script>
