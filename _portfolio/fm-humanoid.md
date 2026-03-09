---
title: "Fast Humanoid Loco-Manipulation via Flow Matching"
excerpt: "Flow Matching for humanoid control achieves 820 vs. 280 survival steps at 5-NFE, with zero-shot loco-manipulation via classifier guidance.<br/><img src='https://img.youtube.com/vi/MIpTpM4C71k/maxresdefault.jpg' onerror='this.style.display=\"none\"'>"
collection: portfolio
---

## Overview

A course project for MIT 6.4210 (Robotic Manipulation) comparing DDPM and Flow Matching for humanoid whole-body control via trajectory synthesis.

## Key Results

- **Flow Matching achieves 820 vs. 280 survival steps** at 5 neural function evaluations (NFE), dramatically outperforming DDPM at low compute budgets
- **Zero-shot loco-manipulation** from walking-only training data via test-time classifier guidance — no manipulation demonstrations needed
- Demonstrates that FM's straight-path interpolation is fundamentally better suited for fast trajectory generation than DDPM's curved diffusion paths

## Links

- [Code](https://github.com/zehuaw1/fm_trajectory)
- [Video Demo](https://youtu.be/MIpTpM4C71k)
