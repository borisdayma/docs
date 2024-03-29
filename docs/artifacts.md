---
title: Logging Artifacts
sidebar_label: Artifacts
---

## Logging Images

```python
wandb.log({"examples": [wandb.Image(numpy_array_or_pil, caption="Label")]})
```

If a numpy array is supplied we assume it's gray scale if the last dimension is 1, RGB if it's 3, and RGBA if it's 4. If the array contains floats we convert them to ints between 0 and 255. You can specify a [mode](https://pillow.readthedocs.io/en/3.1.x/handbook/concepts.html#concept-modes)
manually or just supply a `PIL.Image`. We recommend you don't add more than 20-50 images per step.

On the W&B runs page, you should edit your graphs and choose "Image Viewer" to see your training images.

## Logging Plots

```python
import matplotlib.pyplot as plt
plt.plot([1, 2, 3, 4])
plt.ylabel('some interesting numbers')
wandb.log({"chart": plt})
```

You can pass a `matplotlib` pyplot or figure object into `wandb.log`. By default we'll convert the plot into a [plotly](https://plot.ly) plot. If you want to explictly log the plot as an image, you can pass the plot into `wandb.Image`. We also accept directly logging [plotly](https://plot.ly/) charts.

## Logging Audio

```python
wandb.log({"examples": [wandb.Audio(numpy_array, caption="Nice", sample_rate=32)]})
```

The maximum number of audio clips that can be logged per step is 100.

## Logging Text / Tables

```python
# Method 1
data = [["I love my phone", "1", "1"],["My phone sucks", "0", "-1"]]
wandb.log({"examples": wandb.Table(data=data, columns=["Text", "Predicted Label", "True Label"])})

# Method 2
table = wandb.Table(columns=["Text", "Predicted Label", "True Label"])})
table.add_data("I love my phone", "1", "1")
table.add_data("My phone sucks", "0", "-1")
wandb.log({"examples": table})
```

By default, the column headers are `["Input", "Output", "Expected"]`. The maximum number of rows is 300.

## Logging HTML

```python
wandb.log({"custom_file": wandb.Html(open("some.html"))})
wandb.log({"custom_string": wandb.Html('<a href="https://mysite">Link</a>')})
```

Custom html can be logged at any key, this exposes an HTML panel on the run page. By default we inject default styles, you can disable default styles by passing `inject=False`.

```python
wandb.log({"raw_html": wandb.Html(open("some.html"), inject=False)})
```
