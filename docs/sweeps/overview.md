---
title: Sweeps Overview
sidebar_label: Sweeps Overview
---

W&B supports running hyperparameter sweeps to find the best set of hyperparameters efficiently.

## Getting Started

### Initialize the project

Create your project in the in the wandb CLI or W&B UI:
```shell
wandb init # If you haven't already initialized your project
```

### Create a sweep configuration

The sweep configuration file specifies your training script, parameter ranges, search strategy and stopping criteria.

Sample config file:
```yaml
program: train.py
method: bayes
metric:
  name: val_loss
  goal: minimize
parameters:
  learning-rate:
    min: 0.001
    max: 0.1
  optimizer:
    values: ["adam", "sgd"]
```

### Initialize the sweep

which gives you a SWEEP_ID and a url to track all of
your runs.

```shell
wandb sweep sweep.yaml # prints out SWEEP_ID.
```

### Run agent(s)

Run one or more wandb agents with the SWEEP_ID.

Agents will request parameters from the parameter server and launch your training script.


```shell
wandb agent SWEEP_ID
```
