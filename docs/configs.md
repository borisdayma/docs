---
title: Saving Hyperparameters
sidebar_label: Saving Hyperparameters
---

## Overview

The config object can be used to save hyperparameters to wandb.  This is useful for
visualizing experiements.

```python
run = wandb.init()
run.config.epochs = 4   # config variable named epochs is saved with the model
run.config.batch_size = 32
```

## Batch Intitialization

You can intialize configs in batches

```python
run.config.update({"epochs": 4, "batch_size": 32})
```


## Tensorflow Flags

You can pass ternsorflow flags into the config object.

```python--tensorflow
run = wandb.init()
run.config.epochs = 4   # config variables are saved to the cloud

flags = tf.app.flags
flags.DEFINE_string('data_dir', '/tmp/data')
flags.DEFINE_integer('batch_size', 128, 'Batch size.')
run.config.update(flags.FLAGS)  # adds all of the tensorflow flags as config variables
```

## Argparse Flags

You can pass in an argparse 

```python--keras
run = wandb.init()
run.config.epochs = 4   # config variables are saved to the cloud

parser = argparse.ArgumentParser()
parser.add_argument('--batch-size', type=int, default=8, metavar='N',
                     help='input batch size for training (default: 8)')
args = parser.parse_args()
run.config.update(args) # adds all of the arguments as config variables
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


