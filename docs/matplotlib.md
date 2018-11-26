---
title: Plots
sidebar_label: Plots
---

You can pass a `matplotlib` pyplot or figure object into wandb.Image to have the figures saved as images.

```python
wandb.log({"examples": [wandb.Image(plt)]})
```

