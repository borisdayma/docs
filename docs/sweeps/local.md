---
title: Sweeps Local Controller
sidebar_label: Local Controller
---

By default the hyper-parameter controller is hosted by W&B as a cloud service.  W&B agents communicate with the controller to determine the next
set of parameters to use for training.  The controller is also responsible for running early stopping alogorithms to determine which runs can be
stopped.

The local controller feature allows the user to run search and stopping algorithms locally.  The local controller gives the user the ability to inspect
and instrument the code in order to debug issues as well as develop new features which can be incorporated into the cloud service.

## Local Controller Configuration

To enable the local controller, add the following to the sweep configuration file:

```yaml
controller:
  type: local
```

## Running the local controller

The following command will launch a sweep controller:
```shell
wandb controller SWEEP_ID
```

Alternatively you can launch a controller when you initialize the sweep:
```shell
wandb --controller sweep.yaml
```


