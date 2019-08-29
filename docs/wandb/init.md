---
title: wandb.init
sidebar_label: wandb.init
---

## Overview

Calling `wandb.init()` returns a **run** object. You can also access the **run** object anywhere in your code by importing wandb and calling `wandb.run` _(as long as wandb.init() has already been called)_.

You should generally call `wandb.init()` once at the start of your training script.

In a Jupyter Notebook, calling `wandb.init()` will create a new run.

`wandb.init()` accepts a few keyword arguments:

- **name** &mdash; A display name for this run
- **notes** &mdash; A multiline string description associated with the run
- **config** &mdash; a dictionary-like object to set as initial config
- **project** &mdash; the name of the project to which this run will belong
- **tags** &mdash; a list of strings to associate with this run as tags
- **dir** &mdash; the path to a directory where artifacts will be written (_default: ./wandb_)
- **entity** &mdash; the team posting this run (_default: your username or your default team_)
- **job_type** &mdash; the type of job you are logging, e.g. eval, worker, ps (_default: training_)
- **group** &mdash; a string by which to group other runs; see [Grouping](grouping)
- **sync_tensorboard** &mdash; A boolean indicating whether or not copy all tensorboard logs wandb. see [Tensorboard](integrations/tensorboard) (_default: False_)
- **reinit** &mdash; whether to allow multiple calls to wandb.init in the same process (_default: False_)
- **id** &mdash; A unique id for this run primarily used for resuming see [Resuming](resuming), **must be globally unique within a project**
- **resume** &mdash; if set to True, the run auto resumes; can also be a unique string for manual resuming; see [Resuming](resuming) (_default: False_)
