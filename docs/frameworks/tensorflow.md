---
title: TensorFlow Support
sidebar_label: TensorFlow
---

## Overview

WandB provides a hook for TensorFlow estimators. It will log all `tf.summary` values in the graph.

```python
from wandb.tensorflow import WandbHook
import tensorflow as tf
import wandb

wandb.init(config=tf.FLAGS)

estimator.train(hooks=[WandbHook(steps_per_log=1000)])
```

## Logging manually

The simplest way to log metrics in Tensorflow is by logging `tf.summary` with the tensorflow logger:

```python
from wandb.tensorflow import log

with tf.Session() as sess:
    # ...
    log(tf.summary.merge_all())
```
