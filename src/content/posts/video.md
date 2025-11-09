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
  height="468"
  src="https://www.youtube.com/embed/5gIf0_xpFPI?enablejsapi=1&rel=0&modestbranding=1"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

<!-- Android 13 Style Music Card -->
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
      <!-- SVG Control Buttons -->
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
      <!-- Progress & Wave -->
      <div class="a13-progress">
        <div class="a13-wave-wrapper" id="waveWrapper">
          <div class="a13-wave"></div>
          <div class="a13-wave"></div>
          <div class="a13-wave"></div>
          <div class="a13-wave"></div>
          <div class="a13-wave"></div>
        </div>
        <div id="progress-bar"></div>
      </div>
    </div>
  </div>
</div>

<style>
.a13-music-card {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  margin-top: 24px;
  color: white;
  font-family: "Inter", sans-serif;
  min-height: 130px;
}

.a13-bg {
  position: absolute;
  inset: 0;
  background: url("https://i.ytimg.com/vi/5gIf0_xpFPI/hqdefault.jpg") center/cover;
  filter: blur(30px) brightness(0.6);
  transform: scale(1.2);
  z-index: 0;
}

.a13-content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 12px 20px 16px;
  backdrop-filter: blur(10px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.a13-cover img {
  width: 80px;
  height: 80px;
  border-radius: 12px;
  object-fit: cover;
}

.a13-info {
  flex: 1;
  margin-left: 16px;
  min-width: 200px;
}

.a13-tags {
  font-size: 12px;
  opacity: 0.8;
}

.a13-info h3 {
  margin: 2px 0;
  font-size: 16px;
}

.a13-info p {
  margin: 0;
  font-size: 13px;
  opacity: 0.8;
}

/* Controls */
.a13-controls {
  margin-top: 8px;
  display: flex;
  align-items: center;
}

.a13-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.a13-controls button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: scale(1.1);
}

.a13-controls svg {
  width: 22px;
  height: 22px;
  pointer-events: none;
}

/* Progress & Wave */
.a13-progress {
  position: relative;
  height: 24px;
  margin-top: 10px;
  border-radius: 2px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.08);
}

#progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #89f7fe, #66a6ff);
  width: 0%;
  transition: width 0.2s linear;
  border-radius: 2px;
}

.a13-wave-wrapper {
  position: absolute;
  display: flex;
  align-items: flex-end;
  bottom: 4px;
  left: 0;
  height: 18px;
  width: 100%;
  justify-content: center;
  pointer-events: none;
  opacity: 0.4;
  transition: opacity 0.4s ease;
}

.a13-wave {
  width: 3px;
  height: 4px;
  margin: 0 2px;
  background: rgba(173, 216, 230, 0.8);
  border-radius: 2px;
  animation: waveAnim 1s ease-in-out infinite;
}

.a13-wave:nth-child(2) { animation-delay: 0.1s; }
.a13-wave:nth-child(3) { animation-delay: 0.2s; }
.a13-wave:nth-child(4) { animation-delay: 0.3s; }
.a13-wave:nth-child(5) { animation-delay: 0.4s; }

@keyframes waveAnim {
  0%, 100% { height: 4px; opacity: 0.5; }
  50% { height: 14px; opacity: 1; }
}

/* Responsive */
@media (max-width: 768px) {
  .a13-content {
    flex-direction: column;
    align-items: flex-start;
  }
  .a13-info {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>

<!-- YouTube API -->
<script src="https://www.youtube.com/iframe_api"></script>
<script>
let player, isPlaying = false, progressUpdater;
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const waveWrapper = document.getElementById('waveWrapper');
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
    waveWrapper.style.opacity = '1';
    startProgress();
  } else {
    isPlaying = false;
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    waveWrapper.style.opacity = '0.4';
    stopProgress();
  }
}
function startProgress() {
  clearInterval(progressUpdater);
  progressUpdater = setInterval(() => {
    if (!player || !player.getDuration) return;
    const current = player.getCurrentTime();
    const duration = player.getDuration();
    if (duration > 0) {
      const progress = (current / duration) * 100;
      progressBar.style.width = progress + '%';
    }
  }, 500);
}
function stopProgress() {
  clearInterval(progressUpdater);
}
</script>