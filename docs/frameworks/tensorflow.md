---
title: TensorFlow Support
sidebar_label: TensorFlow
---

## Overview

If you're already using tensorboard it's really easy to integrate with wandb.

```python
import tensorflow as tf
import wandb
wandb.init(config=tf.flags.FLAGS, sync_tensorboard=True)
```

### Example Code

See [TensorFlow Examples](tensorflow-example) or check out our [Example GitHub Repo](https://github.com/wandb/examples) for complete example code.

## Custom Metrics

If you need to log additional custom metrics that aren't being logged to tensorboard, you can call `wandb.log` in your code with the same step argument that tensorboard is using: i.e. `wandb.log({"custom": 0.8}, step=global_step)`

## TensorFlow Hook

If you want more control over what get's logged, WandB also provides a hook for TensorFlow estimators. It will log all `tf.summary` values in the graph.

```python
import tensorflow as tf
import wandb

wandb.init(config=tf.FLAGS)

estimator.train(hooks=[wandb.tensorflow.WandbHook(steps_per_log=1000)])
```

## Logging manually

The simplest way to log metrics in Tensorflow is by logging `tf.summary` with the tensorflow logger:

```python
import wandb

with tf.Session() as sess:
    # ...
    wandb.tensorflow.log(tf.summary.merge_all())
```
