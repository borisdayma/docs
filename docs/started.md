---
title: Getting Started
sidebar_label: Getting Started
---

## Overview

`wandb` is a tool that helps track and visualize machine learning experiments.

You can pronounce it w-and-b (as we originally intended), wand-b (because it's magic like a wand), or wan-db (because it saves things like a database).

Specifically, `wandb` helps with:

1.  Tracking, saving and reproducing models.
2.  Visualizing results across models.
3.  Debugging and visualizing hardware performance issues.
4.  Automating large-scale hyperparameter search.

## Installation

### Install the python library.

```shell
pip install wandb
```

### Make a free wandb account

Sign up for a free account by running the following command in your terminal, or going to our [sign up page](https://app.wandb.ai/login?signup=true).

```shell
wandb login
```

### Near the top of your training script add the **wandb** initialization code:

```python
# Inside my model training code
import wandb
wandb.init(project="my_project")
```

We automatically create the project for you if it doesn't exist. You can learn more about additonal options you can pass into to `wandb.init` [here](configs).

### Save a few hyperparameters in run.config

```python
wandb.config.dropout = 0.2
wandb.config.hidden_layer_size = 128
```

### Log a few metrics

```python

def my_train_loop():
    for epoch in range(10):
        loss = 0 # change as appropriate :)
        wandb.log({'epoch': epoch, 'loss': loss})
```

### Save a model _(optional)_

Anything saved in the _run.dir_ directory will be uploaded to W&B and saved along with your run when it completes. This is especially convenient for saving the literal weights and biases.

```python
model.save(os.path.join(wandb.run.dir, "mymodel.h5"))
```

### Run your script normally from the commandline

```shell
python learn.py
```

Your terminal logs, metrics, and files will be synced to the cloud along with a record of your git state if you're running from a git repo.

> If you're testing and want to disable wandb syncing, set **WANDB_MODE**=dryrun

## Examples

You can find complete examples of integrating W&B here:

- [Keras](frameworks/keras-example)
- [PyTorch](frameworks/pytorch-example)
- [Tensorflow](frameworks/tensorflow-example)
