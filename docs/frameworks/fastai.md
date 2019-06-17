---
title: Fast.ai Support
sidebar_label: Fast.ai
---

## Overview

If you are using fast.ai, we have a callback that can do automatic logging and save your model.

```
from wandb.fastai import WandbCallback

wandb.init()

learn = cnn_learner(data,
                    model,
                    callback_fns=WandbCallback)
```

### Example Code 

Check out our [Example GitHub Repo](https://github.com/wandb/examples) for complete example code.
