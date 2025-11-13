---
title: (WIP) RenzAlt About card
published: 2025-08-01
description: Test From my react.
tags: [About]
category: test
draft: false
---

<style>
  .about-card {
    background-color: #ffffff;
    border-radius: 22px;
    width: 340px;
    margin: 24px auto;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-family: 'Inter', sans-serif;
    overflow: hidden;
    border: 1px solid #e5e7eb;
    transition: background-color 0.3s, border-color 0.3s, box-shadow 0.3s;
  }
  .about-card img.banner {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .about-card .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 18px;
    background-color: #f9fafb;
    transition: background-color 0.3s;
  }
  .about-card .left {
    display: flex;
    align-items: center;
  }
  .about-card .avatar {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .about-card .name {
    font-size: 17px;
    font-weight: 600;
    color: #111827;
  }
  .about-card .msg {
    font-size: 14px;
    color: #6b7280;
  }
  .about-card .heart {
    background-color: #e5e7eb;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about-card .heart span {
    color: #1f2937;
    font-size: 17px;
  }
  /* 🌙 Dark Mode */
  @media (prefers-color-scheme: dark) {
    .about-card {
      background-color: #1f1f1f;
      border-color: #2f2f2f;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    }
    .about-card .content {
      background-color: #262626;
    }
    .about-card .name {
      color: #f3f4f6;
    }
    .about-card .msg {
      color: #a1a1aa;
    }
    .about-card .heart {
      background-color: #333;
    }
    .about-card .heart span {
      color: #f87171;
    }
  }
</style>
<div class="about-card">
  <img class="banner" src="https://raw.githubusercontent.com/AmiaAlt-Miscellaneous/renzalt-nightcordde-common/refs/heads/main/uwu_banner.png" alt="Header">
  <div class="content">
    <div class="left">
      <img class="avatar" src="https://raw.githubusercontent.com/AmiaAlt-Miscellaneous/renzalt-nightcordde-common/refs/heads/main/avatar.jpg" alt="Avatar">
      <div>
        <div class="name">Hai, sayang</div>
        <div class="msg">Met Malem...</div>
      </div>
    </div>
    <div class="heart"><span>&#10084;</span></div>
  </div>
</div>
