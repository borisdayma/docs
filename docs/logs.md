---
title: Logging Metrics
sidebar_label: Metrics
---

## Overview

W&B can log simple things like accuracy and loss as a model is training.  It can log histograms and custom matplotlib objects.  It can also help visualize media as intermediate output for a training run.  

## Simple Logging

Any time you call `wandb.log` and pass in a dictionary of keys and values, the values are saved.

```python
wandb.log({'accuracy': 0.9, 'epoch': 5})
```

## Incremental Logging

If you need to set metrics from multiple places in your code, you can accumulate them by flagging **commit** as false in `wandb.log`, just be sure to call `wandb.log` without the **commit** flag to persist the metrics.

```python
wandb.log({'loss': 0.2}, commit=False)
# Somewhere else when I'm ready to report this step:
wandb.log({'accuracy': 0.8})
```

## Logging Tensors

If you pass a numpy array, pytorch tensor or tensorflow tensor to `wandb.log` we automatically convert it as follows:

1. If the object has a size of 1 just log the scalar value
2. If the object has a size of 32 or less, convert the tensor to json
3. If the object has a size greater than 32, log a histogram of the tensor

## Media

**wandb** supports rich media, currently the following types are supported:

* [images](/docs/images.html)
* [histograms](/docs/histograms.html)

## Summary Metrics

The summary statistics are used to track single metrics per model.  If a summary metric is modified, only the updated state is saved.  We automatically set summary to the last history row added unless you modify it manually.  If you change a summary metric, we only persist the last value it was set to.

```python
wandb.init(config=args)

best_accuracy = 0
for epoch in range(1, args.epochs + 1):
  test_loss, test_accuracy = test()
  if (test_accuracy > best_accuracy):
    wandb.run.summary["best_accuracy"] = test_accuracy
    best_accuracy = test_accuracy
```

You may want to store evaluation metrics in a runs summary after training has completed.  Summary can handle numpy arrays, pytorch tensors or tensorflow tensors.  When a value is one of these types we persist the entire tensor in a binary file and store high level metrics in the summary object such as min, mean, variance, 95% percentile, etc.

```python
api = wandb.Api()
run = api.run("username/project/run_id")
run.summary["tensor"] = np.random.random(1000)
run.summary.update()
```


## History Metrics (wandb.log)

The history object is used to track metrics that change as the model trains.  You can access a mutable dictionary of metrics via `run.history.row`.  The row will be saved and a new row created when `run.history.add` or `wandb.log` is called.

> If you collect all your metrics at once, it's usually simplest to just call 
> `wandb.log` and pass in a dictionary of all the metrics you would like to save.
> You can update the row without saving by calling `wandb.log` with **commit**=*False* as a keyword argument.

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
