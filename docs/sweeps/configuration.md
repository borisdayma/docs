---
title: Sweeps Configuration
sidebar_label: Configuration
---

Use these configuration fields to customize your sweep.

Top-level key | Meaning
----- | -------
name | The name of the sweep displayed in the W&B UI
description | Text description of the sweep
program | Training script (required)
metric | Specify the metric to optimize (used by some search straties and stopping criteria)
method | Specify the [search strategy](#search-strategy) (required)
early_terminate | Specify the [stopping critera](#stopping-criteria)
parameters | Specify [parameters](#parameters) bounds to search (required)

## Metric

Specify the metric to optimize.  This metric should be logged by your training script.

`metric` sub-key | Meaning
--- | ---
name | Name of the metric to optimize
goal | `minimize` or `maximize` (Default is `minimize`)

<details>
<summary>Examples</summary>

#### Maximize:
```yaml
metric:
  name: val_loss
  goal: maximize
```

#### Minimize

```yaml
metric:
  name: val_loss
```
</details>

## Search Strategy

Specify the search strategy with the `method` key in the sweep configuration file.

`method` | Meaning
------ | -------
grid | Grid Search iterates over all possible sets of parameter values.
random | Random Search chooses random sets of values.
bayes | Bayesian Optimization uses a gaussian process to model the function and then chooses parameters to optimize probability of improvement. This strategy requires a [metric](#metric) key to be specified.

<details>
<summary>Examples</summary>

#### Random search:
```yaml
method: random
```

#### Grid search:
```yaml
method: grid
```

#### Bayes search:
```yaml
method: bayes
metric:
  name: val_loss
  goal: minimize
```
</details>

## Stopping Criteria

Early Termination speeds up hyperparameter search by killing off pooly performing runs.

`early_terminate` sub-key | Meaning
--- | ---
type | specify the stopping algorithm


We support these stopping algorithms:
`type` | Meaning
------- | -------
hyperband | Use the [hyperband method](https://arxiv.org/abs/1603.06560)
envelope | Use an envelope method for early termination

<details>
<summary>Examples</summary>

```yaml
early_terminate:
  type: envelope
```
</details>

## Parameters

The parameters dictionary specifies the ranges of configuration parameters.

Values | Meaning
------ | -------
distribution: (distribution) | A distribution from the distrbution table below.  If not specified, the sweep will set to uniform is max and min are set, categorical if values are set and constant if value is set.
min: (float) max: (float) | Continuous values between min and max
min: (int) max: (int) | Integers between min and max
values: [(float), (float), ...] | Discrete values
value: (float) | A constant
mu: (float) | Mean for normal or lognormal distributions
sigma: (float) | Standard deviation for normal or lognormal distributions
q: (float) | Quantization parameter for quantized distributions

## Distributions

Name | Meaning
---- | -------
constant | Constant distribution.  Must specify value.
categorical | Categorical distribution.  Must specify values.
int_uniform | Uniform integer.  Must specify max and min as integers.
uniform | Uniform continuous.  Must specify max and min as floats.
q_uniform | Quantized uniform.  Returns  round(X / q) * q where X is uniform.  Q defaults to 1.
log_uniform | Log uniform.  Number between exp(min) and exp(max) so that the logarithm of the return value is uniformly distributed.
q_log_uniform | Quantized log uniform.  Returns  round(X / q) * q where X is log_uniform.  Q defaults to 1.
normal | Normal distribution.  Value is chosen from normal distribution.  Can set mean mu (default 0) and std dev sigma (default 1).
q_normal | Quantized normal distribution.  Returns  round(X / q) * q where X is normal.  Q defaults to 1.
log_normal | Log normal distribution. Value is chosen from log normal distribution.  Can set mean mu (default 0) and std dev sigma (default 1).
q_log_normal | Quantized log normal distribution.  Returns  round(X / q) * q where X is log_normal.  Q defaults to 1.

<details>
<summary>Examples</summary>

```yaml
parameters:
  my-parameter:
    min: 1
    max: 20
```
</details>
