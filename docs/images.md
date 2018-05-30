---
title: Images
sidebar_label: Images
---

## Logging Images

```python
wandb.log({"examples": [wandb.Image(numpy_array_or_pil, caption="Label")]})
```

If a numpy array is supplied we assume it's gray scale if the last dimension is 1, RGB if it's 3, and RGBA if it's 4.  If the array contains floats we convert them to ints between 0 and 255.   You can specify a [mode](https://pillow.readthedocs.io/en/3.1.x/handbook/concepts.html#concept-modes) 
manually or just supply a `PIL.Image`.  We recommend you don't add more than 20-50 images per step.

On the W&B runs page, you should edit your graphs and choose "Image Viewer" to see your training images.