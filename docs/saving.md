---
title: Saving Files
sidebar_label: Saving Files
---

## Overview

Wandb can save files associated with a run.  This is especially useful for saving model files.

### Example

```python--keras
import wandb
run = wandb.init()

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
    callbacks=[wandb.callbacks.Keras()])
model.save(os.path.join(run.dir, "model.h5")) #
```

Wandb will save to the cloud any files put in wandb's run directory.

> Wandb's local run directories are by default inside the wandb directory and the path looks like 
> _run-20171023_105053-3o4933r0_ where _20171023_105053_ is the timestamp and _3o4933r0_ is 
> the ID of the run.