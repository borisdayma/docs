---
title: Jupyter
sidebar_label: Jupyter
---

## Jupyter Integration

**wandb** integrates with Jupyter notebooks.  When `wandb.init()` is called at the end of a cell, it will create a new run and render an interface for keeping notes about your experiment.  If the machine or directory you are running `jupyter notebook` from isn't configured, you will be prompted to configure the directory interactively in the notebook.

Monitoring of your script doesn't occur until after you call `wandb.monitor()`.  **wandb.monitor** is also a context manager which allows you to wrap your training loop, automatically calling `wandb.monitor().stop()` upon exit.

```python
with wandb.monitor():
    model.fit(...)
```

**wandb.monitor** displays all charts configured for your project and updates as training progresses directly in your notebook.

## Sharing Notebooks

If your project is private, viewers of your notebook will be prompted to login to view results.