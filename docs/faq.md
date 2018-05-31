---
title: Frequently Asked Questions
sidebar_label: FAQ
---

## Practical

### Q: How do I pronounce "wandb"?

You can pronounce it w-and-b (as we originally intended), wand-b (because it's magic like a wand), or wan-db (because it saves things like a database).

### Q: How much does this thing cost?

W&B is free as long as your projects are public.  If you want to host private projects, email us at contact@wandb.com.

### Q: How is this different than TensorBoard?

W&B is a distributed cloud hosted solution so your results are saved forever and it's still snappy after 1000's of runs have been monitored.  We offer additional features such as system metrics, commit history, experiment notes, dashboards, and advanced searching / aggregation across runs and projects.

## Technical

### Q: What does this do to my training process?

When `wandb.init()` is called from your training script an API call is made to create a run object on our servers.  A new process is started to stream and collect metrics, thereby keeping all threads and logic out of your primary process.  Your script runs normally and writes to local files, while the separate process streams them to our servers along with system metrics.  You can always turn off streaming by running `wandb off` from your training directory, or setting the **WANDB_MODE** environment variable to "dryrun".

### Q: Does your tool track or store training data?

You can pass a SHA or other unique identifier to `wandb.config.update(...)` to associate a dataset with a training run.  W&B does not store any data unless `wandb.save` is called with the local file name.

### Q: How often are system metrics collected?

By default metrics are collected every 2 seconds and averaged over a 30 second period.  If you need higher resolution metrics, email us a contact@wandb.com.

### Q: Does this only work for Python?

Currently the library only works with Python 2.7+ & 3.6+ projects.  The architecture mentioned above should enable us to integrate with other languages easily.  If you have a need for monitoring other languages, send us a note at contact@wandb.com.

### Q: Do you offer an on-premise version of your software.

Currently we only provide a hosted version our software, but plan to offer an on-premise version in the future.  If you're interested tell us at contact@wandb.com
