---
title: Tensorboard Integration
sidebar_label: Tensorboard
---

## Tensorboard and TensorboardX

W&B supports patching Tensorboard or [TensorboardX](https://github.com/lanpa/tensorboardX) to automatically log all summaries.

```python
import wandb
wandb.init(tensorboard=True)
```

Under the hood the patch first checks to see if TensorboardX has been loaded and patches it if it has. You can pass `tensorboardX=False` to ensure vanilla Tensorboard is patched. By default we also sync the tfevents files and any \*.pbtxt files. This enables us to launch a Tensorboard instance on your behalf. You will see a "Tensorboard" tab on the run page, checkout our [blog post](https://www.wandb.com/blog/hosted-tensorboard). This behaviour can be disabled by passing `save=False` to `wandb.tensorboard.patch`

```python
import wandb
wandb.init()
wandb.tensorboard.patch(save=False, tensorboardX=True)
```

## Syncing Previous Tensorboard Runs

If you have existing experiments you would like to import into wandb, you can run `wandb sync log_dir` where log_dir is a local directory containing the tfevents files.
