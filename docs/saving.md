---
title: Saving Files
sidebar_label: Saving Files
---

## Overview

W&B saves configuration parameters, custom & system metrics, along with standard out / error by default.  W&B can also save arbitrary files associated with a run.  This is especially useful for saving the literal weights and biases.

### Example

```python--keras
import wandb
wandb.init()

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
    callbacks=[wandb.keras.WandbCallback()])
model.save(os.path.join(wandb.run.dir, "model.h5")) #
```

W&B will save to the cloud any files put in **wandb**'s run directory.  If you are already saving a file in a different directory and want it synced to **wandb**, you can run the following to create a symlink and ensure syncing.

```python
wandb.save('path/to/existing/file.pb')
```

> W&B's local run directories are by default inside the _./wandb_ directory relative to your script, and the path looks like 
> _run-20171023_105053-3o4933r0_ where _20171023_105053_ is the timestamp and _3o4933r0_ is 
> the ID of the run.  You can set the **WANDB_DIR** to an absolute path and files will be written within that directory instead.