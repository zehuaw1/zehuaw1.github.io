---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[PDF version](https://zehuaw1.github.io/files/cv_zehua_wang.pdf)

Education
======
* **Massachusetts Institute of Technology**, Cambridge, MA
  * B.S. in Physics / Artificial Intelligence and Decision Making; GPA: 5.00/5.00
  * Aug. 2025 -- Present
* **Tsinghua University, Institute for Interdisciplinary Information Sciences (IIIS)**, Beijing, China
  * Preparatory Program and Freshman Year; GPA: 3.95/4.00
  * Aug. 2024 -- July 2025

Honors & Awards
======
* **54th International Physics Olympiad (IPhO)**: Gold Medal, **1st Place in Theoretical Round** (July 2024)
* **9th Romanian Master of Physics (RMPh)**: Gold Medal, 3rd Place (March 2023)
* **HackMIT 2025**: 2nd Place Modal Prize (Sept 2025)
* **MIT Informatics Tournament (MITIT) 2025 Winter Contest**: 1st Place, Beginner's Round (Dec 2025)
* **Tsinghua University**: Xuetangban Scholarship & Freshman Scholarship (Dec 2024)

Research Experience
======
* **Undergraduate Researcher, Diffusion Models & Molecular Dynamics** (Feb. 2026 -- Present)
  * MIT; Supervised by Prof. Tommi Jaakkola
  * Researching the intersection of diffusion models and molecular dynamics.

* **Undergraduate Researcher, Reinforcement Learning & Embodied AI** (Oct. 2025 -- Present)
  * FortyFive AI Lab, MIT; Supervised by Dr. Ge Yang
  * Developing RL and imitation learning pipelines for humanoid whole-body control; investigating scaling laws for policy performance and generalization.
  * Contributed to productionization of [Vuer](https://vuer.ai/) (3D visualization) and [ML-Dash](https://docs.dash.ml/en/latest/) (experiment tracking & data storage).

* **Undergraduate Researcher, Learning-based Control** (Mar. 2025 -- Aug. 2025)
  * Tsinghua University; Supervised by Prof. Huazhe Xu
  * Investigated RIR (RL to Imitation to Real-world) framework for robot manipulation on Franka arm, leveraging PPO and DrQ-v2.
  * Designed multi-stage approach for specialist training and multitask generalization via imitation learning and sim-to-real transfer.

Projects
======

**Fast Humanoid Loco-Manipulation via Flow Matching (MIT 6.4210)**
* Compared DDPM and Flow Matching for humanoid control via trajectory synthesis; FM achieves **820 vs. 280 survival steps** at 5-NFE.
* Zero-shot loco-manipulation from walking-only data via test-time classifier guidance.
* [[Code]](https://github.com/zehuaw1/fm_trajectory) [[Video]](https://youtu.be/MIpTpM4C71k)

**RL vs. SFT for Mathematical Reasoning in LLMs (MIT 6.4610)**
* Compute-controlled comparison of PPO, GRPO, GMPO, RLOO against SFT on Qwen3-8B.
* GMPO achieves **74.2%** on GSM8K (vs. SFT 76.7%), demonstrating RL can match SFT without step-by-step supervision.
* [[Code]](https://github.com/qiaosungithub/Qwen-RL-LoRA)

**Enhancing Diffusion Models with RL and Adversarial Rewards**
* Formulated reverse diffusion as MDP with adversarial discriminators, achieving **21.7% FID reduction** vs. baseline. Plug-and-play for existing models.
* [[Code & Report]](https://github.com/HACLINE/DiffPPOGAN)

**PaperPlay: Hand-drawn Sketches to Playable Games (HackMIT 2025)**
* Built system turning sketches into games using OpenCV, physics engine, and real-time AI commentary.
* [[Demo]](https://demo-description.vercel.app/) [[Video]](https://www.youtube.com/watch?v=QjamuTbkZdQ)

**Consistent Local Video Editing via Attention Manipulation (CLEVAM-DM)**
* Training-free framework for local video editing using **BrushNet inpainting**, **DDIM inversion**, and **PerVFI** for temporal coherence.
* [[Code & Report]](https://github.com/zehuaw1/CLEVAM-DM)

**Daily Papers: Personalized ArXiv Research Digest**
* Agentic LLM pipeline for autonomous paper discovery: multi-step relevance filtering, ranking, and summarization over arXiv/HuggingFace feeds with automated email delivery.
* [[Code]](https://github.com/zehuaw1/daily-papers)

**Algorithm Design for the Metric k-Center Problem**
* Authored survey and evaluation framework. Proposed algorithms achieving empirical approximation ratio **1.049** (vs. SCR 1.064).
* [[Code & Survey]](https://github.com/zehuaw1/k-Center_Evaluation)

Relevant Coursework
======
* **ML/AI**: Symmetry & Applications to ML (6.7970/8.750), Advances in Computer Vision (6.8300), Robotic Manipulation (6.4210), Natural Language Processing (6.4610), Computer Vision (6.4300), Deep Learning (Tsinghua), Intro to Inference (6.3800), Intro to Machine Learning (6.3900)
* **Math/Theory**: Quantum Computation (18.435), Quantum Physics II (8.05), Design & Analysis of Algorithms (6.1220), Mathematics for CS and AI (Tsinghua)

Skills
======
* **Programming**: Python (PyTorch), C++
* **Languages**: English (Fluent), Chinese (Native)
