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
      <img src="https://i.ytimg.com/vi/5gIf0_xpFPI/hqdefault.jpg" alt="cover">
    </div>
    <div class="a13-info">
      <div class="a13-tags">
        <span>Solo</span> • <span>Nightcord</span>
      </div>
      <h3>ふわり feat. MIMI, 初音ミク</h3>
      <p>Nightcord-at25-playlist</p>
      <div class="a13-controls">
        <button id="prevBtn">⏮️</button>
        <button id="playPauseBtn">▶️</button>
        <button id="nextBtn">⏭️</button>
      </div>
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
  /* hapus height fix */
  min-height: 130px;
  height: auto; /* biarkan tinggi menyesuaikan isi */
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
  flex-wrap: wrap; /* biar gak pecah di layar kecil */
  align-items: center;
  height: 100%;
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

.a13-controls {
  margin-top: 8px;
}

.a13-controls button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  cursor: pointer;
  transition: background 0.3s;
  font-size: 14px;
}

.a13-controls button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.a13-progress {
  position: relative;
  height: 24px; /* tambah sedikit agar gelombang muat */
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

<!-- Load YouTube API safely -->
<script src="https://www.youtube.com/iframe_api"></script>
<script>
let player, isPlaying = false, progressUpdater;
const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress-bar');
const waveWrapper = document.getElementById('waveWrapper');
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
    playPauseBtn.textContent = '⏸️';
    waveWrapper.style.opacity = '1';
    startProgress();
  } else {
    isPlaying = false;
    playPauseBtn.textContent = '▶️';
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