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
  * B.S. in Physics and Computer Science (intended), Expected May 2028
* **Tsinghua University, Institute for Interdisciplinary Information Sciences (IIIS)**, Beijing, China
  * Freshman Year; GPA: 3.95/4.00, Aug. 2024 -- July 2025
* **Tsinghua University, Institute for Interdisciplinary Information Sciences (IIIS)**, Beijing, China
  * Preparatory Program; GPA: 4.00/4.00, Feb. 2024 -- July 2024

Honors & Awards
======
* **54th International Physics Olympiad (IPhO)**: Gold Medal, **1st Place in Theoretical Round** (July 2024)
* **9th Romanian Master of Physics (RMPh)**: Gold Medal, 3rd Place (March 2023)
* **40th Chinese Physics Olympiad (CPhO)**: Gold Medal (Oct 2023)
* **39th Chinese Physics Olympiad (CPhO)**: Gold Medal (Oct 2022)
* **China Young Physicists' Tournament**: **Team First Place** (Team Leader) (March 2023)
* **Tsinghua University**: Xuetangban Scholarship & Freshman Scholarship (Dec 2024)

Research Experience
======
* **Undergraduate Researcher, Learning-based Control** (Oct. 2024 -- June 2025)
  * Tsinghua University; Supervised by Prof. Huazhe Xu
  * Investigated a novel RIR (Reinforcement Learning to Imitation Learning to Real-world) framework for robot manipulation on a Franka robotic arm (simulated), leveraging PPO and DrQ-v2 for initial RL training
  * Designed a multi-stage approach for specialist training in simulation and multitask generalization via imitation learning, addressing complexities of sim-to-real transfer and policy generalization
  * Conducted comprehensive literature reviews on advanced robot learning, informing experimental design and gaining experience in problem formulation and conceptual design

Projects
======

**PaperPlay: Hand-drawn Sketches to Playable Games (HackMIT 2025 — 2nd Place Modal Prize)**
* Built a system that turns hand-drawn sketches into playable games using an OpenCV pipeline, a physics engine, and real-time AI commentary
* Implemented shape recognition, integrated Modal for backend orchestration, and built a web platform for sharing and competitive play
* [Demo](https://demo-description.vercel.app/) · [Video](https://www.youtube.com/watch?v=QjamuTbkZdQ)

**Enhancing Diffusion Models with RL and Adversarial Rewards**
* Developed a novel framework leveraging Reinforcement Learning and adversarial discriminators to enhance pre-trained diffusion models
* Formulated the reverse diffusion process as an MDP to optimize perceptual quality, achieving up to a **21.7% FID score reduction** compared to baseline
* Demonstrated a plug-and-play enhancement for existing models
* [Code & Report](https://github.com/HACLINE/DiffPPOGAN)

**Consistent Local Edits in Videos via Attention Manipulation in Diffusion Models (CLEVAM-DM)**
* Engineered CLEVAM-DM, a novel training-free framework for consistent local video editing with diffusion models
* Designed a multi-stage pipeline integrating **BrushNet inpainting**, **DDIM inversion**, **full attention sharing**, and **PerVFI** for temporal coherence
* [Code & Report](https://github.com/zehuaw1/CLEVAM-DM)

**Algorithm Design for the Metric k-Center Problem**
* Authored a comprehensive survey and developed a unified evaluation framework for the metric k-center problem
* Proposed three novel algorithms, one achieving a significant performance increase, reaching an empirical approximation ratio of **1.049** (compared to SOTA SCR's 1.064)
* [Code & Survey](https://github.com/zehuaw1/k-Center_Evaluation)

**LLM-Powered Knowledge Database**
* Initiated and led development of an AI agent-driven file-to-knowledge system using Llama 3
* Architected and implemented core knowledge inference module, demonstrating foresight in knowledge management and AI applications
* [Code](https://github.com/Hidden-Hyperparameter/LLM_project) & [Demo](https://cloud.tsinghua.edu.cn/f/0ae923c0f09a4f5d9d7c/)

**Minimal Reinforcement Learning Framework (RL-Zero)**
* Developed a modular RL framework in Python from scratch for reproducible experimentation and fundamental understanding
* Implemented key features like configuration-driven training, experiment tracking, and video logging
* [Code](https://github.com/zehuaw1/RL-Zero)

**Centralized Visual Package Router (CVPR)**
* Led full-stack development of Centralized Visual Package Router (CVPR), a type-safe logistics management and visualization system
* Engineered type-safe backend in Scala and responsive frontend in TypeScript with React, emphasizing functional programming principles
* [Code](https://github.com/zehuaw1/CVPR)

Relevant Coursework
======
* **Deep Learning**: Mastered theoretical foundations (convergence analysis, DDPMs) and modern architectures (Transformers, GNNs). Applied through projects: implemented autograd, trained VAEs/GANs, and fine-tuned a 1B+ parameter LLM.
* **Computer Vision**: Implemented classical and modern algorithms (e.g., SIFT for panorama stitching, 3D-to-2D projections for autonomous driving visualization) from scratch, and trained a semantic segmentation model.
* **Algorithm Design**: Rigorous study of algorithm design and analysis (Kleinberg & Tardos), covering approximation and randomized algorithms.
* **Intro to Computer Systems**: Explored OS, computer architecture, and networking concepts. Projects: optimized performance on Raspberry Pi with SIMD (**40x speedup**), implemented concurrent data structures, and built a distributed service with gRPC.

Skills
======
* **Programming Languages**: Python, C++
* **Machine Learning**: PyTorch, TensorFlow, Reinforcement Learning, Computer Vision
* **Mathematics**: Algorithm Design, Optimization, Statistical Analysis
