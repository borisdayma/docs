---
title: Fast.ai Support
sidebar_label: Fast.ai
---

## Overview

If you are using fast.ai, we have a callback that can do automatic logging.

```
from wandb.fastai import WandbCallback

wandb.init()

learn = cnn_learner(data,
                    model,
                    callback_fns=WandbCallback)
```

### Example Code 

Check out our [Example GitHub Repo](https://github.com/wandb/examples) for complete example code.

### Saving models

You can use the path keyword argument and set it to wandb.run.dir which will cause wandb to save your models.

```
learn = cnn_learner(data,
                    model,
                    callback_fns=partial(WandbCallback, save_model=save_model, monitor='acc'),
                    path=wandb.run.dir)
```