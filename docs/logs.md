---
title: Logging Metrics
sidebar_label: Logging Metrics
---

## Overview

W&B can log simple things like accuracy and loss as a model is training.  It can also help visualize media as intermediate output for a training run.

## Simple Logging

Any time you call `wandb.log` and pass in a dictionary of keys and values, the values are saved.

```python
wandb.log({'accuracy': 0.9, 'epoch': 5})
```

## Incremental Logging

If you need to set metrics from multiple places in your code, you can accumulate them by flagging **complete** as false in `wandb.log`, just be sure to call `wandb.log` without the **complete** flag to persist the metrics.

```python
wandb.log({'loss': 0.2}, complete=False)
# Somewhere else when I'm ready to report this step:
wandb.log({'accuracy': 0.8})
```

## Media

`wandb.log` also accepts rich media.  Currently only images are supported.  Media is added by supplying a list of wandb media objects.

```python
wandb.log({"examples": [wandb.Image(numpy_array_or_pil, caption="Label")]})
```

If a numpy array is supplied we assume it's gray scale if the last dimension is 1, RGB if it's 3, and RGBA if it's 4.  If the array contains floats we convert them to ints between 0 and 255.   You can specify a [mode](https://pillow.readthedocs.io/en/3.1.x/handbook/concepts.html#concept-modes) 
manually or just supply a `PIL.Image`.  We recommend you don't add more than 20-50 images per step.

On the wandb.ai runs page, you should edit your graph and choose "Image Viewer" to see your training images.

## Summary Metrics

The summary statistics are used to track single metrics per model.  If a summary
metric is modified, only the updated state is saved.  We automatically set summary to the last history row added unless you modify it manually.  If you change a summary metric, we only persist the last value it was set to.

```python
wandb.init(config=args)

best_accuracy = 0
for epoch in range(1, args.epochs + 1):
  test_loss, test_accuracy = test()
  if (test_accuracy > best_accuracy):
    wandb.run.summary["best_accuracy"] = test_accuracy
    best_accuracy = test_accuracy
```

## History Metrics (wandb.log)

The history object is used to track metrics that change as the model trains.  You can access a mutable dictionary of metrics via `run.history.row`.  The row will be saved and a new row created when `run.history.add` or `wandb.log` is called.

> If you collect all your metrics at once, it's usually simplest to just call 
> `wandb.log` and pass in a dictionary of all the metrics you would like to save.
> You can update the row without saving by calling `wandb.log` with **complete**=*False* as a keyword argument.

### Tensorflow
```python--tensorflow
wandb.init(config=flags.FLAGS)

# Start tensorflow training
with tf.Session() as sess:
  sess.run(init)

  for step in range(1, run.config.num_steps+1):
      batch_x, batch_y = mnist.train.next_batch(run.config.batch_size)
      # Run optimization op (backprop)
      sess.run(train_op, feed_dict={X: batch_x, Y: batch_y})
      # Calculate batch loss and accuracy
      loss, acc = sess.run([loss_op, accuracy], feed_dict={X: batch_x, Y: batch_y})

      wandb.log({'acc': acc, 'loss':loss}) # log accuracy and loss
```

### PyTorch
```python--pytorch
# Start pytorch training
wandb.init(config=args)

for epoch in range(1, args.epochs + 1):
  train_loss = train(epoch)
  test_loss, test_accuracy = test()

  torch.save(model.state_dict(), 'model')

  wandb.log({"loss": train_loss, "val_loss": test_loss})
```

### Context Manager

We provide a context manager via the `step` method that automatically calls `add`
and accepts a boolean to help keep nested code clean.  You can check the boolean expression  by accessing `run.history.compute`.

```python
with run.history.step(batch_idx % log_interval == 0):
  run.history.row.update({"metric": 1})
  if run.history.compute:
    # Something expensive here
```
