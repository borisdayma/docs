---
title: Saving Hyperparameters
sidebar_label: Saving Hyperparameters
---

## Overview

Calling `wandb.init()` returns a **run** object. You can also access the **run** object anywhere in your code by importing wandb and calling `wandb.run` _(as long as wandb.init() has already been called)_.

The config object can be used to save hyperparameters to wandb.  This is useful for visualizing experiments.

```python
wandb.init()
wandb.config.epochs = 4   # config variable named epochs is saved with the model
wandb.config.batch_size = 32
```

## Batch Inititialization

You can initialize configs in batches

```python
wandb.init(config={"epochs": 4, "batch_size": 32})
#or
wandb.config.update({"epochs": 4, "batch_size": 32})
```


## Tensorflow Flags

You can pass tensorflow flags into the config object.

```python--tensorflow
wandb.init()
wandb.config.epochs = 4   # config variables are saved to the cloud

flags = tf.app.flags
flags.DEFINE_string('data_dir', '/tmp/data')
flags.DEFINE_integer('batch_size', 128, 'Batch size.')
wandb.config.update(flags.FLAGS)  # adds all of the tensorflow flags as config variables
```

## Argparse Flags

You can pass in an argparse 

```python--keras
wandb.init()
wandb.config.epochs = 4  # config variables are saved to the cloud

parser = argparse.ArgumentParser()
parser.add_argument('--batch-size', type=int, default=8, metavar='N',
                     help='input batch size for training (default: 8)')
args = parser.parse_args()
wandb.config.update(args) # adds all of the arguments as config variables
```

## File-Based Configs

You can create a file called *config-defaults.yaml* and it will automatically
be loaded into the config variable.

```yaml
# sample config-defaults file
epochs:
  desc: Number of epochs to train over
  value: 100
batch_size:
  desc: Size of each mini-batch
  value: 32
```

You can tell wandb to load different config files with the command line argument `--configs special-configs.yaml` which will load parameters from the file special-configs.yaml.