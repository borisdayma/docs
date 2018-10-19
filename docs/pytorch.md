---
title: PyTorch Support
sidebar_label: PyTorch
---

## Overview

W&B provides first class support for PyTorch. To automatically log gradients and store the network topology, you can call `hook_torch` and pass in your pytorch model.

```python
import wandb
wandb.init(config=args)

# Magic
wandb.hook_torch(model)

model.train()
for batch_idx, (data, target) in enumerate(train_loader):
    output = model(data)
    loss = F.nll_loss(output, target)
    loss.backward()
    optimizer.step()
    if batch_idx % args.log_interval == 0:
        wandb.log({"loss": loss})
```

> Gradients, metrics and the graph won't be logged until `wandb.log` is called after a forward and backward pass.

### Options

By default the hook only logs gradients. If you want to log historgrams of parameter values as well, you can specify `wandb.hook_torch(model, log="all")`. Valid options for the log argument are: "gradients", "parameters", "all", or None.

## Images

You can pass pytorch tensors with image data into `wandb.Image` and torchvision utils will be used to log them automatically.