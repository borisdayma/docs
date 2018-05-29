---
title: Keras Callback
sidebar_label: Keras Callback
---

## Overview

If you are using Keras, you can call wandb at each epoch by using the Keras LambdaCallback.

```python
from keras.callbacks import LambdaCallback
import wandb
wandb.init(config={"hyper": "parameter"})

# Magic

model.fit(X_train, y_train,  validation_data=(X_test, y_test),
          callbacks=[LambdaCallback(on_epoch_end=lambda epoch, logs: wandb.log(logs))])
```
