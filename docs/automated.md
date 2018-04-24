---
title: Running in Automated Environments
sidebar_label: Automated Environments
---

```shell
# This is secret and shouldn't be checked into version control
WANDB_API_KEY=$YOUR_API_KEY
# Description is optional
WANDB_DESCRIPTION="$SHORT_MESSAGE"
```

```shell
# Only needed if you don't checkin the wandb/settings file
WANDB_ENTITY=$username
WANDB_PROJECT=$project
```

```python
# Only needed if you don't checkin the wandb/settings file
os.makedirs('wandb', exist_ok=True)
```

```python
# If you don't want to call your script with the wandb run wrapper
os.environ['WANDB_MODE'] = 'run'
```

When you are running your script in an automated environment, you can control wandb with environment variables set before the script runs or within the script.

Relevant environment variables:

Variable name | Usage
------------- | -----
**WANDB_API_KEY** | Sets the authentication key associated with your account.  You can find your key at <https://app.wandb.ai/profile>.  This must be set if `wandb login` hasn't been run on the remote machine.
**WANDB_DESCRIPTION** | Description associated with a run.  This will become the name of your run in the UI.  If not set it will be randomly generated for you
**WANDB_ENTITY** | The entity associated with your run.  If you have run `wandb init` in the directory of your training script, it will create a directory named *wandb* and will save a default entity which can be checked into source control.  If you don't want to create that file or want to override the file you can use the environmental variable.
**WANDB_PROJECT** | The project associated with your run.  This can also be set with `wandb init`, but the environmental variable will override the value.
**WANDB_MODE** | Set this to *run* if you want to save your run to the cloud.  Another way to do this is to run your script `train.py` with the command `wandb run train.py`.
