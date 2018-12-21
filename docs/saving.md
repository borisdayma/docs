---
title: Saving Files
sidebar_label: Saving Files
---

## Overview

W&B saves configuration parameters, custom & system metrics, along with standard out / error by default. W&B can also save arbitrary files associated with a run. This is especially useful for saving the literal weights and biases.

### Example

```python--keras
import wandb
wandb.init()

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
    callbacks=[wandb.keras.WandbCallback()])
model.save(os.path.join(wandb.run.dir, "model.h5"))
```

## Saving files during the run

W&B will save to the cloud any files put in **wandb**'s run directory when the program completes or fails. If you want to sync files as they're being written to, you can specify a filename or glob to `wandb.save`.

```python
wandb.save('model.h5') # Save a model file relative to my current directory
wandb.save('../logs/*ckpt*') # Save all files containing ckpt that currently exist
wandb.save(os.path.join(wandb.run.dir, "checkpoint*")) # Save any files starting with checkpoint as they're written to
```

> W&B's local run directories are by default inside the _./wandb_ directory relative to your script, and the path looks like
> _run-20171023_105053-3o4933r0_ where _20171023_105053_ is the timestamp and _3o4933r0_ is
> the ID of the run. You can set the **WANDB_DIR** environment variable, or the **dir** keyword argument of `wandb.init` to an absolute path and files will be written within that directory instead.

## Restoring files

You can restore files from existing runs by calling `wandb.restore`. A common usecase is resuming from a checkpoint in the case of failure. You can also restore files from another run, such as the model file from a previous run. `wandb.restore` returns a local file open for reading.

```python
if args.restore:
    wandb.restore('model.h5') # restore from a checkpoint, resuming must be configured
weights = wandb.restore('best.h5', run_path="vanpelt/html/a1b2c3d")
model.load(weights.name)
```

> If you don't specify a run_path, you'll need to configure [resuming](resuming) for your run.
> If you want access to files programitcally outside of training, checkout the [Export API](integrations/api).

## Ignoring certain files

You can edit the `wandb/settings` file and set ignore_globs equal to a comma seperated list of [globs](<https://en.wikipedia.org/wiki/Glob*(programming)>). You can also set the **WANDB_IGNORE_GLOBS** environment variable. A common usecase is to prevent the git patch that we automatically create from being uploaded i.e. **WANDB_IGNORE_GLOBS=\*.patch**
