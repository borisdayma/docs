---
title: Getting Started
sidebar_label: Getting Started
---

## Overview

`wandb` is a tool that helps track and visualize machine learning model training at scale.

You can pronounce it w-and-b (as we originally intended), wand-b (because it's magic like a wand), or wan-db (because it saves things like a database).

Specifically, `wandb` helps with:

1.  Tracking, saving and reproducing models.
2.  Visualizing results across models.
3.  Debugging and visualizing hardware performance issues.  
4.  Automating large-scale hyperparameter search.

## Installation

W&B is easy to install. 

### Install the python library.

```shell
# Install wandb
pip install wandb
```

### Make a free wandb account

Sign up for a free account by running the following command in your terminal, or going to our [sign up page](https://app.wandb.ai/login?invited).

```shell
wandb signup
```

> If you signed up via the link, or need to authenticate a new machine you can always run:
> ```shell
> wandb login
> ```

### Create a new project

Initialize wandb in the directory you plan to run your training script in (we do this for you if you ran `wandb signup`).

```shell
wandb init
```

Select your username as your team. Choose any name for your first project.  This will create a **wandb** directory that contains a settings file with the information you provided.

> You can optionally check the **./wandb/settings** file 
> into version control.  All other files and folders in the *wandb* directory are
> automatically ignored.

### Near the top of your training script add the **wandb** initialization code:

```python
# Inside my model training code
import wandb
wandb.init()
```

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

Anything saved in the *run.dir* directory will be uploaded to W&B and saved along with your run when it completes.  This is especially convenient for saving the literal weights and biases.

```python
model.save(os.path.join(wandb.run.dir, "mymodel.h5"))
```

### Run your script normally from the commandline

```shell
# Run your script normally from the commandline
python learn.py
```

You can view all of your runs at any time by going to 
https://app.wandb.ai/**$ENTITY_NAME**/**$PROJECT_NAME**.  Your training logs and metrics will be saved along with a record of your git state if you're running from a git repo.

> You can always rerun *wandb init* to change your project's settings. If you're testing and want to disable wandb syncing, set **WANDB_MODE**=dryrun

## Keras Callback

If you use Keras, you can do an even easier integration by using the Keras callback.
```python
# Inside my model training code
import wandb
from wandb.keras import WandbCallback
```

Later in your code add the callback to your Keras fit function

```python
model.fit(X_train, y_train,  validation_data=(X_test, y_test), epochs=config.epochs,
    callbacks=[WandbCallback()])
```