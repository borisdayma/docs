---
title: Getting Started
sidebar_label: Getting Started
---

## Overview

Wandb is a tool that helps track and visualize machine learning model training at scale.  

You can pronounce it w-and-b (as we originally intended), wand-b (because it's magic like a wand), or wan-db (because it saves things like a database).

Specifically, wandb helps with:

1.  Tracking, saving and reproducing models.
2.  Visualizing results across models.
3.  Debugging and visualizing hardware performance issues.  
4.  Automating large-scale hyperparameter search.

## Installation

Wandb is easy to install. 

### Install the python library.

```shell
# Install wandb
pip install wandb
```

### Make a free wandb account

Sign up for a free account by going to our [sign up page](https://app.wandb.ai/login?invited).

Authenticate in your terminal.

```shell
# Install wandb
wandb login
```

### Create a new project

Initialize wandb in the directory you plan to run your training script in.

```shell
# Install wandb
wandb init
```

Select your username as your team.
Choose any name for your first project.  This will create a
wandb directory that contains a settings file with the information you provided.  

> You can optionally check the **wandb/settings** file 
> into version control.  All other files and folders in the wandb directory are
> automatically ignored.

### Near the top of your training script add wandb initialization code:

```python
# Inside my model training code
import wandb
run = wandb.init()
```

### Save a few hyperparameters in run.config

```python
config = run.config 
config.dropout = 0.2
config.hidden_layer_size = 128
```


### Log a few variables
```python

def my_train_loop():
    for epoch in range(10):
        loss = 0 # change as appropriate :)
        wandb.log({'epoch': epoch, 'loss': loss})
```

### Save a model
(Optional) Anything saved in the run.dir directory will ber uploaded to wandb and saved along with your run when your run completes.  This is especially convenient for saving model files.

```python
model.save(os.path.join(run.dir, "mymodel.h5"))
```

### Run your script normally from the commandline

```shell
# Run your script normally from the commandline
python learn.py
```

You can view all of your runs at any time by going to https://app.wandb.ai/**$ENTITY_NAME**/**$PROJECT_NAME**.  Your training logs will be saved along with a snapshot of your latest commit.

> Note: You can always rerun *wandb init* to change your project's settings.

## Keras Callback

If you use Keras, you can do an even easier integration by using the keras callback.
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




