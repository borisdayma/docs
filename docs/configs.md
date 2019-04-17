---
title: Logging Inputs
sidebar_label: Logging Inputs
---

## Overview

Calling `wandb.init()` returns a **run** object. You can also access the **run** object anywhere in your code by importing wandb and calling `wandb.run` _(as long as wandb.init() has already been called)_.

`wandb.init()` accepts a few keyword arguments:

- **name** &mdash; A display name for this run
- **config** &mdash; a dictionary-like object to set as initial config
- **project** &mdash; the name of the project to which this run will belong
- **tags** &mdash; a list of strings to associate with this run as tags
- **dir** &mdash; the path to a directory where artifacts will be written (_default: ./wandb_)
- **entity** &mdash; the team posting this run (_default: your username or your default team_)
- **job_type** &mdash; the type of job you are logging, e.g. eval, worker, ps (_default: training_)
- **group** &mdash; a string by which to group other runs; see [Grouping](grouping)
- **tensorboard** &mdash; A boolean indicating whether or not copy all tensorboard logs wandb. see [Tensorboard](integrations/tensorboard) (_default: False_)
- **reinit** &mdash; whether to allow multiple calls to wandb.init in the same process (_default: False_)
- **id** &mdash; A unique id for this run, **must be globally unique within a project**
- **resume** &mdash; if set to True, the run auto resumes; can also be a unique string for manual resuming; see [Resuming](resuming) (_default: False_)

The config object can be used to save hyperparameters to wandb. This is useful for visualizing experiments.

```python
wandb.init()
wandb.config.epochs = 4   # config variable named epochs is saved with the model
wandb.config.batch_size = 32
```

## Batch Inititialization

You can initialize configs in batches

```python
wandb.init(config={"epochs": 4, "batch_size": 32})
# or
wandb.config.update({"epochs": 4, "batch_size": 32})
```

## Tensorflow Flags

You can pass tensorflow flags into the config object.

```python
wandb.init()
wandb.config.epochs = 4  # config variables are saved to the cloud

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

You can create a file called _config-defaults.yaml_ and it will automatically
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

## Change Run Display Name

To change the run name that shows up in the web UI, add these two lines to your training script:

```
<<<<<<< Updated upstream
wandb.run.description = "your custom run name"
wandb.run.save()
```

=======
wandb.run.description = "your custom run name";
wandb.run.save();

```
>>>>>>> Stashed changes
```
