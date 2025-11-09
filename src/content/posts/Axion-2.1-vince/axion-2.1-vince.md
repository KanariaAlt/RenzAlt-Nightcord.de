--- 
title: AxionOS-2.1-Vince-Baklava
published: 2025-11-02
description: Android 16 QPR0.
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
BUILD DATE : 2 November 2025
TYPE : Vanila Build
```

**Changelog**
<ul>
    <li>October 2025 security patch</li>
    <li>fixed Camera & libgf_* missing depedency</li>
</ul>

:::note
It seems that AxionOS 2.1 is taking up too much system size so there is not enough space to install GAPPS, so how to install GAPPS?
:::

:::tip
please follow these tips..
:::

**Prerequisites**
- Unlocked Bootloader

**Flashing Instruction**
- Wipe System, Vendor, Cache and Dalvik
- Wipe Data (optional if from older build)
- Install Rom
- flash my personal kernel "20251024-kernel-vince-defconfig.img"
- Reboot
- install SukiSU manager apk to support KernelSU
- Flash LiteGapps "GMS Core, Playstore, GoogleServicesFramework, Common" addons via SukiSU manager
- or if you want it easy, just repartition the system and flash as usual (optional)

## Screenshots

<style>
  .screenshots {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  .screenshots img {
    width: 330px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .screenshots img:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
  }

  /* Responsif di mobile */
  @media (max-width: 768px) {
    .screenshots {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .screenshots img {
      width: 90%;
      max-width: 400px;
    }
  }
</style>

<div class="screenshots">
  <img src="https://raw.githubusercontent.com/KanariaAlt/screenshots-renz-nigo-web/refs/heads/main/photo_2025-11-03_08-11-36.jpg" alt="Screenshot 1">
  <img src="https://raw.githubusercontent.com/KanariaAlt/screenshots-renz-nigo-web/refs/heads/main/photo_2025-11-03_08-11-45.jpg" alt="Screenshot 2">
</div>

## Downloads

[SukiSU_3.1.9_13307-release.apk](https://t.me/MI8953/16/5640)

[20251024-kernel-vince-defconfig.img](https://t.me/RenzAlt_Archive/17)

[axion-2.1-NIGHTLY-20251102-COMMUNITY-VANILLA-vince.zip](https://pixeldrain.com/u/wWvrmK4w)

[Litegapps-addons gms/playstore/GoogleServicesFramework/common](https://sourceforge.net/projects/litegapps/files/addon/arm64/36/core/)

**Optional**
- [vince_increase_system_to_4.5gb.zip](https://t.me/MI8953/12/8126)

## Support Me

{{< alertBlockquote type="warning" >}}
If you like my work and my efforts so far, you can make a small donation here.
{{< /alertBlockquote  >}}

{{<externalLinkCard title="Support via PayPal" link="https://www.paypal.com/paypalme/ShandyReynaldi" cover="auto">}}

{{<externalLinkCard title="Support via trakteer.id" link="https://trakteer.id/rennalt/tip" cover="auto">}}