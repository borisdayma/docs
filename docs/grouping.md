---
title: Grouping
sidebar_label: Grouping
---

W&B provides the ability to group processes up to 2 levels. This is useful for distributed training or combining multiple process types. You can choose any key in your config object to define the grouping via our UI.

You can also specify a group with the `WANDB_RUN_GROUP` environment variable, or by setting **group** in your call to `wandb.init()`. If you need a second level of grouping you can set the **job_type** argument in your call to `wandb.init()`.
