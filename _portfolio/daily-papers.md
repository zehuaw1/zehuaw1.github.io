---
title: "Daily Papers: Personalized ArXiv Research Digest"
excerpt: "An automated system that fetches, filters, and summarizes the latest research papers using LLMs, delivering personalized daily reports to your inbox.<br/><img src='https://github.com/zehuaw1/daily-papers/raw/main/assets/banner.png' onerror='this.style.display=\"none\"'>"
collection: portfolio
---

## Overview

Daily Papers is an intelligent research paper aggregation and summarization system that helps researchers stay up-to-date with the latest developments in their field. By leveraging Large Language Models (LLMs), it automatically curates personalized daily digests of relevant papers from arXiv and HuggingFace.

[View on GitHub](https://github.com/zehuaw1/daily-papers)

## Key Features

### Multi-Source Paper Aggregation
- **ArXiv Integration**: Fetches papers from specified arXiv categories (cs.AI, cs.LG, cs.CV, cs.CL, cs.RO, etc.)
- **HuggingFace Trending**: Tracks trending and daily papers from the HuggingFace platform
- **Social Metrics**: Displays upvotes, GitHub stars, and trending indicators

### AI-Powered Curation
- **Smart Filtering**: LLM-based relevance assessment based on your research interests and custom prompts
- **Intelligent Ranking**: Automatically selects the most valuable papers when count exceeds limit
- **Deep Summarization**: Generates comprehensive summaries highlighting key contributions, methodology, and results

### Automated Delivery
- **Email Reports**: Markdown and HTML-formatted reports delivered directly to your inbox
- **Multi-User Support**: Configure multiple users with independent settings and preferences
- **Cost Tracking**: Monitors token usage and provides cost estimates

### Deployment Options
- **GitHub Actions**: Free, zero-maintenance deployment using GitHub's infrastructure
- **Local Scheduler**: Option to run on local machines with customizable scheduling
- **Minimal Cost**: Approximately $0.50/day using DeepSeek V3 (~$15/month)

## Technical Implementation

### Architecture
- Built in Python with a modular design for easy customization
- RESTful API integration with multiple LLM providers (DeepSeek, OpenAI-compatible endpoints)
- Configurable filtering and summarization prompts for different research domains
- Robust error handling and retry mechanisms

### Workflow
1. **Fetch**: Retrieves latest papers from configured sources
2. **Filter**: LLM evaluates relevance based on user preferences
3. **Rank**: Selects top papers when volume exceeds threshold
4. **Summarize**: Generates detailed analysis of each paper
5. **Deliver**: Formats and sends email reports with original abstracts and AI summaries

### Configuration
Users can customize:
- arXiv categories and lookback window
- Maximum papers per digest
- Custom filtering, ranking, and summarization prompts
- Multiple user profiles with independent settings

## Use Cases

- **Researchers**: Stay current with developments in specific subfields
- **PhD Students**: Track relevant papers for literature reviews
- **Industry Professionals**: Monitor practical applications and sota techniques
- **Study Groups**: Share curated digests with team members

## Cost Efficiency

With DeepSeek V3 pricing (~$0.27/M input tokens, ~$1.10/M output tokens), the system costs approximately:
- **$0.50/day** for 10 papers (~$15/month)
- Alternative models: DeepSeek V3.2-Exp, Qwen-Turbo, GLM-4-Long (~$0.30-0.40/day)
- Free option: Gemini 2.0 Flash with generous free tier

## Acknowledgments

Inspired by:
- [arxiv-sanity](https://github.com/karpathy/arxiv-sanity-preserver) by Andrej Karpathy
- [daily-arXiv-ai-enhanced](https://github.com/dw-dengwei/daily-arXiv-ai-enhanced)
- [customize-arxiv-daily](https://github.com/JoeLeelyf/customize-arxiv-daily)
- [arxiv-pusher](https://github.com/ZhuYizhou2333/ArXiv-Pusher)
