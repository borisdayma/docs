---
title: Keras Callback
sidebar_label: Keras Callback
---

## Overview

If you are using Keras, you can use the Keras callback to automatically save
all the metrics and the loss values tracked in `model.fit`.

```python
import wandb
from wandb.keras import WandbCallback
run = wandb.init()

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
          callbacks=[WandbCallback()])
```

## Arguments

### TODO: Document the keras callback
