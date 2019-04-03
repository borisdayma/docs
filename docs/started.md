---
title: Getting Started
sidebar_label: Getting Started
---

Our tool `wandb` helps you track and visualize machine learning experiments. We have features for:
- Tracking, saving, and reproducing models
- Visualizing results across models
- Visualizing and debugging hardware performance issues
- Automating large-scale hyperparameter search

In three steps we'll have you up and running.
1. Install `wandb`
2. Make a free account
3. Add logging code


## 1. Python Library
Install our library in an environment using Python 3.
```shell
pip install wandb
```

## 2. Account

Sign up for a free account by running `wandb login` in your terminal or by going to our [sign up page](https://app.wandb.ai/login?signup=true).

## 3. Logging Code
Add a few lines to your script to log hyperparameters and metrics.

Initialize `wandb` at the beginning of your script right after the imports.
```python
# Inside my model training code
import wandb
wandb.init(project="my-project")
```
We automatically create the project for you if it doesn't exist. You can learn more about additonal options you can pass into to `wandb.init` [here](configs).

Next, save a few hyperparameters:

```python
wandb.config.dropout = 0.2
wandb.config.hidden_layer_size = 128
```

Then log a few metrics:
```python
def my_train_loop():
    for epoch in range(10):
        loss = 0 # change as appropriate :)
        wandb.log({'epoch': epoch, 'loss': loss})
```

Anything saved in the `wandb.run.dir` directory will be uploaded to W&B and saved along with your run when it completes. This is especially convenient for saving the literal weights and biases:
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
