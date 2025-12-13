--- 
title: OriginOS-Vince-Baklava
published: 2025-12-12
description: Android 16.
image: ./cover.jpg
tags: [Baklava, Vince, Alt]
category: Custom ROM
draft: false
---

:::warning
I'm not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed. Please do some research if you have any concerns about features included in the products you find here before flashing it! YOU are choosing to make these modifications, and if you point the finger at me for messing up your device, I will laugh at you. Your warranty will be void if you tamper with any part of your device / software.
:::


```powershell title="Firmware Information"
DEVICES : VINCE
BUILD DATE : 12 Desember 2025
TYPE : OriginOS Vince
Author : @Rlightz7iF 
```

**Know-Isu**
<ul>
    <li>Hotspot & Camera not working</li>
</ul>

**Prerequisites**
- Unlocked Bootloader

**Flashing Instruction**
- Repartition 8GB first 
- Wipe System, Vendor, Cache Dalvik & Data
- Install OriginOS6-Vince-PD2520_A_16.0.12.300A16_16.zip
- Flash Permissiver_v5.zip
- Format Data
- Reboot System
- install SukiSU manager apk to support KernelSU

**Important Notes**
- If Wi-Fi fails to connect, go to settings and set the MAC address to "use device MAC".
- If you get stuck at the first boot screen or second boot screen, reformat the Data partition to F2FS.
- You must use the resize package to expand System to 8GB.
- The ROM includes the SukiSU kernel. After booting, install the SukiSU Manager app yourself.

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
    <img class="fade-in-element tilt-hover" src="https://raw.githubusercontent.com/KanariaAlt/common-nightcord.de/refs/heads/main/origin1.jpg" alt="Screenshot 1">
    <img class="fade-in-element tilt-hover" src="https://raw.githubusercontent.com/KanariaAlt/common-nightcord.de/refs/heads/main/origin2.jpg" alt="Screenshot 2">
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

> ### rlightz7if Mi8953 Official Site
> - [rlightz7if-Mi8953-labs](https://rlightz7if.github.io/tags/Mi8953/)

> ### Downloads
> - [system8GB扩容包.zip](https://devuploads.com/7ye3dnipyujy)
> - [OriginOS6-Vince-PD2520_A_16.0.12.300A16_16.zip](https://pixeldrain.com/u/FDv7kuQ2)
> - [Permissiver_v5（闪退.卡二.软重启刷）.zip](https://devuploads.com/n96tzsitujoj)