---
title: TensorFlow Support
sidebar_label: TensorFlow Support
---

## Overview

WandB provides a hook for TensorFlow estimators.

```python
summary_op = tf.summary.merge_all()
hook = WandbHook(summary_op)

classifier.train(hooks=[hook])
```




