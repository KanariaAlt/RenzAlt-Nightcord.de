--- 
title: A-Kawaii-tarium-LPP-vince-kernel
published: 2025-12-05
description: LPP Kernel.
image: ./cover.jpg
tags: [LPP, Vince, Alt]
category: Kernel
draft: false
---

:::warning
I'm not responsible for bricked devices, dead SD cards, thermonuclear war, or you getting fired because the alarm app failed. Please do some research if you have any concerns about features included in the products you find here before flashing it! YOU are choosing to make these modifications, and if you point the finger at me for messing up your device, I will laugh at you. Your warranty will be void if you tamper with any part of your device / software.
:::


```powershell title="Kernel Information"
DEVICES : VINCE
BUILD DATE : 05 Desember 2025
TYPE : LPP Kernel V2
```

**Changelog**
<ul>
    <li>binder from android12-5.4 + BPF from k5.4 backports</li>
    <li>stat => statx backports</li>
    <li>SukiSU + SUSFS Intregrate</li>
    <li>Continuation of Snow-Irony-LPP</li>
    <li>Undervolt 70mV CPU Voltage</li>
    <li>Undervolt PMIC Based On MSM8953-MTP & SDM632</li>
    <li>Update synaptics_dsx touchscreen from msm-5.10 for i2c 0x20</li>
    <li>Fixup cpu stuck at 1.6ghz also modem subsystem dead (Disable thermal-case-step)</li>
    <li>KGSL drop Adreno 3xx/4xx/6xx & snapshot/corsight/trace & KGSL SMMU V1</li>
    <li>Remove low frequency gpu table, available (650, 725, 750mhz)</li>
    <li>use lz4 for ramdisk (speeds up booting)</li>
    <li>Set swappines 100% (for better a16 ram usage)</li>
    <li>Add ZSTD compression support (A15-16 recommended with zstd , lz4 recommended for A10-A14)</li>
    <li>le9 mm stuff (for better a16 ram usage)</li>
    <li>Reduce rootwait time to 5ms (Samsung Sugestion)</li>
    <li>Add Uclamp (Qcom Sugestion)</li>
    <li>Increase CMA region size 20MiB -> 32MiB (Qcom Sugestion)</li>
    <li>Compile with LTO</li>
    <li>And More</li>
</ul>

## LPP V2 Datasheet

### Introduction to LPP

What is LPP? 

LPP is the name of the MSM8953 noda which means "low power processing". Basically, the MSM8953 is designed to save power and uses a special 14nm noda LPP. Then, what does it have to do with the LPP kernel that I am working on? MSM8953 has several variations, introduce: (MSM8953-QRD/MTP/CDP, SDM450-MTP/QRD, APQ8053, MSM8953-PRO, SDM632-QRD/MTP.) these have slight specific differences. 

so what do I do? I compare the power differences used by each cpu and its pmic and apply this low power one through rigorous trials and tests based on the scheme so it is safe and this is the result also the function details based on the scheme :

```csharp
 -----------------------------------------------------------------------------------
                                  Vince-LPP LDO
 -----------------------------------------------------------------------------------
 PMIC Data     |           Voltage           |                Interface
 -----------------------------------------------------------------------------------
 lab_reg       |      5.700V -> 5.500V       |   Panel/MDSS/DSI
 ibb_reg       |      5.700V -> 5.500V       |   Panel/MDSS/DSI
 pm8953_s3     |      1.225V -> 0.984v       |   Panel/CSID/MDSS/DSI
 pm8953_s4     |      2.050V -> 1.896v       |   PMIC-Audio (pmic-analog-codec)
 pm8953_l2     |      1.225V -> 0.975v       |   Camera (Qualcomm EEPROM)
 pm8953_l10    |      2.850V -> 2.800v       |   Sensor/Touchscreen/LED_Awinic
 pm8953_l19    |      1.380V -> 1.200V       |   WiFi/BT WCNSS (Qualcomm WCNSS)
 pm8953_l22    |      2.850V -> 2.800V       |   Camera (Qualcomm EEPROM)
 pm8953_l23    |      1.200V -> 0.975V       |   Camera (Qualcomm EEPROM & CSID)
```

```csharp
 -----------------------------------------------------------------------------------
                                   interface
 -----------------------------------------------------------------------------------
lab_reg = LDO Analog Bias
ibb_reg = Inverting Buck-Boost
CSID = Camera Serial Interface Decoder
MDSS = Mobile Display Subsystem
DSI = Display Serial Interface (MIPI DSI)
WCNSS = Wireless Connectivity Subsystem
```

> ### Downloads
> - [SukiSU_3.1.9_13307-release.apk](https://t.me/renzalt_dump/59)
> - [A-Kawaii-Tarium-LPP-Kernel-Vince-20251204.zip](https://devuploads.com/mmyvnxa9h56b)
