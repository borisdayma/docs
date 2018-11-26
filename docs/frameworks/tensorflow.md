---
title: TensorFlow Support
sidebar_label: TensorFlow Support
---

## Overview

WandB provides a hook for TensorFlow estimators. It will log all `tf.summary` values in the graph.

```python
from wandb.tensorflow import WandbHook
import tensorflow as tf
import wandb

wandb.init(config=tf.FLAGS)

estimator.train(hooks=[WandbHook()])
```
