---
title: TensorFlow Support
sidebar_label: TensorFlow
---

## Overview

If you're already using tensorboard it's really easy to integrate with wandb.

```python
import tensorflow as tf
import wandb
wandb.init(config=tf.FLAGS, tensorboard=True)
```

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
