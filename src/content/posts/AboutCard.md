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
    border-radius: 24px;
    width: 100%;
    max-width: 600px;
    margin: 32px auto;
    box-shadow: 0 4px 10px rgba(0,0,0,0.05);
    font-family: 'Inter', sans-serif;
    overflow: hidden;
  }

  .ncm-banner {
    width: 100%;
    height: 170px;
    object-fit: cover;
    display: block;
  }

  .ncm-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px 18px 20px;
    background-color: #f3f4fa;
    margin-top: -6px;
  }

  .ncm-left {
    display: flex;
    align-items: center;
  }

  .ncm-avatar {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-right: 12px;
  }

  .ncm-name {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    line-height: 1.1;
  }

  .ncm-msg {
    font-size: 14px;
    color: #4b5563;
    margin-top: 2px;
  }

  .ncm-heart {
    background-color: #e0e7ff;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ncm-heart span {
    color: #334155;
    font-size: 19px;
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
