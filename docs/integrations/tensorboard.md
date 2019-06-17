---
title: Tensorboard Integration
sidebar_label: Tensorboard
---

## Tensorboard and TensorboardX

W&B supports patching Tensorboard or [TensorboardX](https://github.com/lanpa/tensorboardX) to automatically log all summaries.

```python
import wandb
wandb.init(sync_tensorboard=True)
```

Under the hood the patch tries to guess which version of tensorboard to patch. We support tensorboard with all versions of tensorflow. If you're using tensorboard with another framework W&B supports tensorboard > 1.14 with PyTorch as well as TensorboardX.

## Custom Metrics

If you need to log additional custom metrics that aren't being logged to tensorboard, you can call `wandb.log` in your code with the same step argument that tensorboard is using: i.e. `wandb.log({"custom": 0.8}, step=global_step)`

## Advanced Configuration

If you want more control over how tensorboard is patched you can call `wandb.tensorboard.patch` instead of passing `sync_tensorboard=True` to init. You can pass `tensorboardX=False` to this method to ensure vanilla Tensorboard is patched, if you're using tensorboard > 1.14 with PyTorch you can pass `pytorch=True` to ensure it's patched. Both of these options are have smart defaults depending on what versions of these libraries have been imported.

By default we also sync the tfevents files and any \*.pbtxt files. This enables us to launch a Tensorboard instance on your behalf. You will see a "Tensorboard" tab on the run page, checkout our [blog post](https://www.wandb.com/blog/hosted-tensorboard). This behaviour can be disabled by passing `save=False` to `wandb.tensorboard.patch`

```python
import wandb
wandb.init()
wandb.tensorboard.patch(save=False, tensorboardX=True)
```

## Syncing Previous Tensorboard Runs

If you have existing experiments you would like to import into wandb, you can run `wandb sync log_dir` where log_dir is a local directory containing the tfevents files.
