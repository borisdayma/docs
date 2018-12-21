# W&B Docs

This repository contains the documentation for W&B, it uses the excellent [Docusaurus](https://docusaurus.io) for site generation.

## Conventions

**wandb** vs. W&B vs. Weights and Biases.  If you're talking about the CLI or library use **wandb**.  If you're talking about the website or the service use W&B.  If you're talking about the company, use Weights and Biases.

## Install

```
yarn add docusaurus
```

## Development

```shell
cd website
yarn start
```

You should be able to refresh your browser to see basic changes.  If you change the config or yaml front matter, you will need to manually restart for now.

## Deployment

```shell
# Be sure to commit and push your changes before every deploy so everyone stays synchronized
git commit -a -m "DESCRIPTION OF CHANGES"
git push

yarn deploy
# Behind the scenes this runs:
# GIT_USER=$USER USE_SSH=true yarn run publish-gh-pages
# If $USER is not your github username you'll have to run it manually
#

```
