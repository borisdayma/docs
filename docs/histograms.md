---
title: Histograms
sidebar_label: Histograms
---

## Logging Histograms

```python
wandb.log({"gradients": wandb.Histogram(numpy_array_or_sequence)})
wandb.run.summary.update({"gradients": wandb.Histogram(np_histogram=np.histogram(data))})
```

If a sequence is provided as the first argument, we will bin the histogram automatically. You can also pass what is returned from `np.histogram` to the **np_histogram** keyword argument to do your own binning. The maximum number of bins supported is 512. You can use the optional **num_bins** keyword argument when passing a sequence to override the default of 64 bins.

If histograms are in your summary they will appear as sparklines on the individual run pages. If they are in your history, we plot a heatmap of bins over time.
