---
title: Tensorboard Integration
sidebar_label: Tensorboard
---

## Tensorboard

WandB automatically detects tfevents files and syncs them to cloud storage as they're written to. You will see a "Tensorboard" tab on the run page if a run contains a tfevents file. Opening this tab will launch a tensorboard instance.

```python
classifier = tf.estimator.DNNClassifier(
    # ...
    model_dir=wandb.run.dir
)
```

```python

with tf.Session() as sess:
    # ...
    writer = tf.summary.FileWriter(wandb.run.dir, sess.graph)
```

## Syncing Previous Tensorboard Runs

If you have existing experiments you would like to import into wandb, you can run `wandb sync log_dir` where log_dir is a local directory containing a tfevents file.
