---
title: W&B Data API Overview
sidebar_label: Data API
---

W&B provides a Data API to import and export data directly. This is useful for doing custom analysis of your existing runs or running an evaluation script and adding additional summary metrics.

## Authentication

The API looks for your Key stored locally (populated by running `wandb login`), or in the **WANDB_API_KEY** environment variable.

```python
import wandb
api = wandb.Api()
run = api.run("username/project/run_id")
```

## Api Methods

| Method | Params                                          | Description                                                                                                               |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| init   | _overrides={"username": None, "project": None}_ | Accepts optional setting overrides. If you specify username and project here you don't need to include them in the paths. |
| run    | _path=""_                                       | Returns a Run object given a path. If can be run_id if a global username and project is set.                              |
| runs   | _path="", filters={}_                           | Returns a Runs object given a path to a project and optional filters.                                                     |

## Run Attributes

| Attribute       | Description                                       |
| --------------- | ------------------------------------------------- |
| tags            | a list of tags associated with the run            |
| name            | the unique identifier of the run                  |
| state           | one of: _running, finished, crashed, aborted_     |
| config          | a dict of hyperparameters associated with the run |
| created_at      | when the run was started                          |
| heartbeat_at    | the last time the run sent metrics                |
| description     | any notes associated with the run                 |
| system_metrics  | the latest system metrics recorded for the run    |
| summary_metrics | the latest summary metrics recorded for the run   |

## Special Methods

| Method  | Params                                       | Description                                                                                                                                           |
| ------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| summary |                                              | A mutable dict-like property that holds the current summary. Calling update will persist any changes.                                                 |
| history | _samples=500, stream="default", pandas=True_ | Returns a dataframe containing the number of samples specified captured during the run. If stream is set to "system", returns system metrics instead. |
| files   | _names=[], per_page=50_                      | Returns files associated with this run. If you pass names you limit to only files with those names                                                    |
| file    | _name_                                       | Returns a specific file.                                                                                                                              |

## File Attributes

| Attribute  | Description                            |
| ---------- | -------------------------------------- |
| name       | a list of tags associated with the run |
| url        | the source url                         |
| md5        | and md5 of the content                 |
| mimetype   | the mimetype of the content            |
| updated_at | updated timestamp                      |
| size       | size of the file in bytes              |

## Special Methods

| Method   | Params          | Description                                                                                   |
| -------- | --------------- | --------------------------------------------------------------------------------------------- |
| download | _replace=False_ | Download the source file in the current directory. If replace is True, replace existing files |

```python
if run.state == "finished":
    print([(metric["accuracy"], metric["_timestamp"]) for metric in run.history()])
run.summary["accuracy_histogram"] = wandb.Histogram(numpy_array)
run.summary.update()
```

## Querying runs

The W&B API also provides a way for you to query across runs in a project. The query interface is the same as the one [MongoDB uses](https://docs.mongodb.com/manual/reference/operator/query).

```python
runs = api.runs("username/project", {"$or": [{"config.experiment_name": "foo"}, {"config.experiment_name": "bar"}])
print("Found %i" % len(runs))
```

Calling `api.runs(...)` returns a **Runs** object that is iterable and acts like a list. The object loads 50 runs at a time in sequence as required, you can change the number loaded per page with the **per_page** keyword argument.

`api.runs(...)` also accepts an **order** keyword argument. The default order is `-created_at`, specify `+created_at` to get results in ascending order. You can also sort by config or summary values i.e. `summary.val_acc` or `config.experiment_name`

## Error handling

If errors occur while talking to W&B servers a `wandb.CommError` will be raised. The original exception can be introspected via the **exc** attribute.
