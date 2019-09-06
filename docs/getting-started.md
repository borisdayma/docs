---
title: Getting Started
sidebar_label: Getting Started
---

Our tool `wandb` helps you track and visualize machine learning experiments.  Getting set up should take less than five minutes.  If you have any questions or run into any problems, please let us know!  You can ask questions in our [gitter forum](https://gitter.im/wandb-app/community) and we should be able to help you out right away.

There are three steps to get started.

## 1. Install the wandb Python Library
Install our library in an environment using Python 3.
```shell
pip install wandb
```

## 2. Create a free wandb account

Sign up for a free account in your shell.

```shell
wandb login
```

Alternatively, you can go to our [sign up page](https://app.wandb.ai/login?signup=true).

## 3. Modify your training script
Add a few lines to your script to log hyperparameters and metrics.

### 3a. Initialization
Initialize `wandb` at the beginning of your script right after the imports.
```python
# Inside my model training code
import wandb
wandb.init(project="my-project")
```
We automatically create the project for you if it doesn't exist. (See the [wandb.init](wandb/init) documentation for more initialization options.)

### 3b. Hyperparameters (optional)

It's easy to save hyperparameters with the [wandb.config](wandb/config) object.

```python
wandb.config.dropout = 0.2
wandb.config.hidden_layer_size = 128
```

### 3c. Logging (optional)

Log metrics like loss or accuracy as your model trains or log more complicated things like histograms,  graphs or images with [wandb.log](wandb/log).

Then log a few metrics:
```python
def my_train_loop():
    for epoch in range(10):
        loss = 0 # change as appropriate :)
        wandb.log({'epoch': epoch, 'loss': loss})
```

### 3d. Saving files (optional)

Anything saved in the `wandb.run.dir` directory will be uploaded to W&B and saved along with your run when it completes. This is especially convenient for saving the literal weights and biases in your model:
```python
model.save(os.path.join(wandb.run.dir, "mymodel.h5"))
```

Great! Now run your script normally and we'll sync logs in a background process. Your terminal logs, metrics, and files will be synced to the cloud along with a record of your git state if you're running from a git repo.

> If you're testing and want to disable wandb syncing, set **WANDB_MODE**=dryrun

## Examples

You can find complete examples of integrating W&B here:

- [Keras](frameworks/keras-example)
- [PyTorch](frameworks/pytorch-example)
- [Tensorflow](frameworks/tensorflow-example)
