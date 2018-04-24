---
title: Restoring State
sidebar_label: Restoring State
---

## Overview

You can use wandb to restore your code to the state is was when any particular experiment was run.

### Example

```
# creates a branch and restores the code to the state it was in when run $RUN_ID was executed
wandb restore $RUN_ID
```

When `wandb.init` is called from your script, a link is saved to the last git commit if the code is in a git repository.  A diff patch is also created in case there are uncommitted changes or changes that are out of sync with your remote.