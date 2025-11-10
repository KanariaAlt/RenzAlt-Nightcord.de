--- 
title: HyperExperience-Vince-Tiramisu
published: 2025-11-02
description: Android 13.
image: ./cover.jpg
tags: [Tiramisu, Vince, Alt]
category: Custom ROM
draft: false
---

:::warning
I'm not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed. Please do some research if you have any concerns about features included in the products you find here before flashing it! YOU are choosing to make these modifications, and if you point the finger at me for messing up your device, I will laugh at you. Your warranty will be void if you tamper with any part of your device / software.
:::


```powershell title="Firmware Information"
DEVICES : VINCE
BUILD DATE : 10 November 2025
TYPE : HyperExperience Vince
```

**Know-Isu**
<ul>
    <li>Eye Protection Mode not working</li>
</ul>

:::tip
please follow these tips..
:::

**Prerequisites**
- Unlocked Bootloader

**Flashing Instruction**
- Extract first 
- Wipe System, Vendor, Cache Dalvik & Data
- Install Vince_HyperExperience_1.zip
- Wipe Data & Format Data
- install SystemApp_vince_2.zip
- Swipe to Factory Reset & Don't Format Data!
- Reboot System
- If you're stuck on the home page ,Please press the power button for 5 seconds to reboot again
- If you need help. Contact Telegram User@XiaoLiuCN

## Screenshots

<style>
  .screenshots-section {
    margin-top: 20px;
    text-align: center;
  }

  .screenshots {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    flex-wrap: nowrap;
    margin-top: 10px;
  }

  .screenshots img {
    position: relative;
    width: 330px;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
    transition:
      transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 0.4s ease,
      opacity 0.6s ease;
    transform-style: preserve-3d;
    opacity: 0;
    transform: translateY(25px) scale(1);
    will-change: transform, box-shadow;
    overflow: hidden;
  }

  /* Efek fade-in saat muncul */
  .visible {
    opacity: 1 !important;
    transform: translateY(0) scale(1);
  }

  /* Efek glow / pantulan cahaya */
  .screenshots img::after {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    width: 250%;
    height: 250%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.25) 0%,
      rgba(255, 255, 255, 0.1) 30%,
      rgba(255, 255, 255, 0) 60%
    );
    opacity: 0;
    transition: opacity 0.6s ease;
    pointer-events: none;
  }

  /* Hover efek zoom + glow aktif */
  .screenshots img:hover {
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.35);
  }

  .screenshots img:hover::after {
    opacity: 1;
  }

  /* Responsif */
  @media (max-width: 768px) {
    .screenshots {
      gap: 8px;
      margin-top: 8px;
    }
    .screenshots img {
      width: 48%;
      max-width: none;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    .screenshots img {
      width: 48%;
    }
  }
</style>

<div class="screenshots-section">
  <div class="screenshots">
    <img class="fade-in-element tilt-hover" src="https://raw.githubusercontent.com/KanariaAlt/screenshots-renz-nigo-web/refs/heads/main/hyper1.jpg" alt="Screenshot 1">
    <img class="fade-in-element tilt-hover" src="https://raw.githubusercontent.com/KanariaAlt/screenshots-renz-nigo-web/refs/heads/main/hyper2.jpg" alt="Screenshot 2">
  </div>
</div>

<script>
  // Fade-in animasi saat muncul di layar
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.fade-in-element').forEach(el => observer.observe(el));

  // Efek tilt 3D lembut + bounce
  document.querySelectorAll('.tilt-hover').forEach((img) => {
    let timeout;
    img.addEventListener('mousemove', (e) => {
      const rect = img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 4;
      const rotateY = ((x - centerX) / centerX) * -4;

      img.style.transform = `scale(1.04) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    img.addEventListener('mouseleave', () => {
      clearTimeout(timeout);
      img.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
      img.style.transform = 'scale(1) rotateX(0deg) rotateY(0deg)';

      timeout = setTimeout(() => {
        img.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
      }, 800);
    });
  });
</script>

> ### Downloads
> - [VinceHyrer.zip](https://mega.nz/file/LoZH2IKb#E1DJGzWcJ9y8TyCvV1kEaH3w66sWYfHsVi3YIUHpDn8)