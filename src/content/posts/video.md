---
title: Music A13 card style test from Nightcord-at25-playlist
published: 2025-08-01
description: Test From my react.
tags: [Music]
category: test
draft: false
---

## YouTube

<iframe
  id="ytplayer"
  width="100%"
  height="420"
  src="https://www.youtube.com/embed/5gIf0_xpFPI?enablejsapi=1&rel=0&modestbranding=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

<!-- Compact Android 13 Music Card -->
<div class="a13-music-card">
  <div class="a13-bg"></div>
  <div class="a13-content">
    <div class="a13-cover">
      <img src="https://raw.githubusercontent.com/KanariaAlt/Nightcord-at-25-Playlist/refs/heads/WIP/src/data/covers/deco.jpg" alt="cover">
    </div>
    <div class="a13-info">
      <div class="a13-tags">
        <span>Solo</span> • <span>MIMI</span>
      </div>
      <h3>ふわり feat. MIMI, 初音ミク</h3>
      <p>MIMI</p>
      <div class="a13-controls">
        <button id="prevBtn" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 19 2 12 11 5 11 19"></polygon>
            <polygon points="22 19 13 12 22 5 22 19"></polygon>
          </svg>
        </button>
        <button id="playPauseBtn" aria-label="Play/Pause">
          <svg id="playIcon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
        <button id="nextBtn" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"
            stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="13 19 22 12 13 5 13 19"></polygon>
            <polygon points="2 19 11 12 2 5 2 19"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
.a13-music-card {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  margin-top: 14px;
  color: white;
  font-family: "Inter", sans-serif;
  min-height: 135px;
}

.a13-bg {
  position: absolute;
  inset: 0;
  background: url("https://i.ytimg.com/vi/5gIf0_xpFPI/hqdefault.jpg") center/cover;
  filter: blur(20px) brightness(0.65);
  transform: scale(1.1);
  z-index: 0;
}

.a13-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 16px;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  border-radius: 14px;
}

/* Cover dominan tapi lembut */
.a13-cover img {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  transition: transform 0.25s ease;
}

.a13-cover img:hover {
  transform: scale(1.05);
}

/* Info compact */
.a13-info {
  flex: 1;
  margin-left: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.a13-tags {
  font-size: 11.5px;
  opacity: 0.8;
}

.a13-info h3 {
  margin: 3px 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
}

.a13-info p {
  margin: 0;
  font-size: 12.5px;
  opacity: 0.75;
}

/* Controls lebih kecil dan rapi */
.a13-controls {
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.a13-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  margin-right: 5px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.a13-controls button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.08);
}

.a13-controls svg {
  width: 14px;
  height: 14px;
  pointer-events: none;
}

/* Responsif */
@media (max-width: 768px) {
  .a13-content {
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;
  }
  .a13-cover img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  .a13-info {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>

<script src="https://www.youtube.com/iframe_api"></script>
<script>
let player, isPlaying = false;
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
window.onYouTubeIframeAPIReady = () => {
  player = new YT.Player('ytplayer', {
    events: { onStateChange: onPlayerStateChange }
  });
};
playPauseBtn.addEventListener('click', () => {
  if (!player) return;
  if (!isPlaying) player.playVideo();
  else player.pauseVideo();
});
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    isPlaying = false;
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
}
</script>
