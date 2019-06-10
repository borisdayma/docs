---
title: Keras Support
sidebar_label: Keras
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

### Example Code

See [Keras Examples](keras-example) or check out our [Example GitHub Repo](https://github.com/wandb/examples) for complete example code.

### Options

Keras `WandbCallback()` class supports a number of options:

| Keyword argument  | Default  | Description                                                                                                                                       |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| monitor           | val_loss | The training metric used to measure performance for saving the best model. i.e. val_loss                                                          |
| mode              | auto     | 'min', 'max', or 'auto': How to compare the training metric specified in `monitor` between steps                                                  |
| save_weights_only | False    | only save the weights instead of the entire model                                                                                                 |
| save_model        | True     | save the model if it's improved at each step                                                                                                      |
| log_weights       | False    | log the values of each layers parameters at each epoch                                                                                            |
| log_gradients     | False    | log the gradients of each layers parametres at each epcoh                                                                                         |
| training_data     | None     | tuple (X,y) needed for calculating gradients                                                                                                      |
| data_type         | None     | the type of data we're saving, currently only "image" is supported                                                                                |
| labels            | None     | only used if data_type is specified, list of labels to convert numeric output to if you are building classifier. (supports binary classification) |
| predictions       | 36       | the number of predictions to make if data_type is specified. Max is 100.                                                                          |
| generator         | None     | if using data agmentation and data_type you can specify a generator to make predictions with.                                                     |
