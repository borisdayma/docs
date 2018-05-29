---
title: Keras Callback
sidebar_label: Keras Callback
---

## Overview

If you are using Keras, you can use the Keras callback to automatically save all the metrics and the loss values tracked in `model.fit`

```python
import wandb
from wandb.keras import WandbCallback
wandb.init(config={"hyper": "parameter"})

# Magic

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
          callbacks=[WandbCallback()])
```
