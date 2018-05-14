---
title: Resuming
sidebar_label: Resuming
---

By default **wandb** generates a unique 8 character name when a process is first run.  You can access this id in your script via `wandb.run.id` or the **WANDB_RUN_ID** environment variable.  If you need to resume failed runs you can store this id and set **WANDB_RESUME** equal to "must" and **WANDB_RUN_ID** to the stored id when you restart the process.

For simplicity we also allow you to set a globally unique string (per project) corresponding to a single run of your script.  It must be no longer than 64 characters. All non-word characters will be converted to dashes.  If you set **WANDB_RESUME** equal to "allow" you can always set **WANDB_RUN_ID** to this unique string and restarts of the process will automatically be handled.

_You can also specify **WANDB_RESUME** and **WANDB_RUN_ID** as command line arguments to `wandb run --id=run_id --resume=allow -- train.py`_

> WARNING: If multiple processes use the same run_id concurrently unexpected results will be recorded and rate limiting will occur.