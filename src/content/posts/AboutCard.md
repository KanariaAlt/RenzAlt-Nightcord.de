---
title: (WIP) RenzAlt About card
published: 2025-08-01
description: Test From my react.
tags: [About]
category: test
draft: false
---

<style>
  .ncm-card {
    background-color: #f3f4fa;
    border-radius: 15px;
    width: 100%;
    margin: 20px 0;
    box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .ncm-banner {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .ncm-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f3f4fa;
    padding: 8px 16px 12px 16px;
    margin-top: -36px; /* avatar menumpuk sedikit di atas banner */
  }

  .ncm-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .ncm-avatar {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 3px solid #f3f4fa;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  }

  .ncm-name {
    font-size: 16px;
    font-weight: 700;
    color: #111827;
    line-height: 1.1;
  }

  .ncm-msg {
    font-size: 13px;
    color: #4b5563;
    margin-top: 2px;
  }

  .ncm-heart {
    background-color: #e0e7ff;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 2px rgba(0,0,0,0.05);
    flex-shrink: 0;
  }

  .ncm-heart span {
    color: #334155;
    font-size: 16px;
  }
</style>

<div class="ncm-card">
  <img class="ncm-banner" src="https://raw.githubusercontent.com/AmiaAlt-Miscellaneous/renzalt-nightcordde-common/refs/heads/main/uwu_banner.png" alt="Banner">
  <div class="ncm-content">
    <div class="ncm-left">
      <img class="ncm-avatar" src="https://raw.githubusercontent.com/AmiaAlt-Miscellaneous/renzalt-nightcordde-common/refs/heads/main/avatar.jpg" alt="Avatar">
      <div>
        <div class="ncm-name">Hai, sayang</div>
        <div class="ncm-msg">Met Malem...</div>
      </div>
    </div>
    <div class="ncm-heart"><span>❤</span></div>
  </div>
</div>


