---
title: Configuring W&B Enterprise
sidebar_label: Configuration
---

## Enterprise Cloud

A W&B Enterprise Cloud is a fully scalable cloud environment provisioned on your private AWS or GCP account and the region of your choosing. The environment can be provisioned by us or by your company, using a toolset comprised of Terraform and Kubernetes.

### Authentication

A W&B Enterprise Cloud must be configured with any authentication provider supported by [Auth0](https://auth0.com). You should set up your own Auth0 domain and application, and send us the client ID and domain. We will configure your W&B Cloud Enterprise license with this integration.

## Enterprise Server

A W&B Enterprise Server is a self-contained virtual machine provisioned on your private cloud, a physical server, or developer workstation.

### Authentication

By default, a W&B Enterprise Server runs in "single-user mode": right from booting up, you can log in and start sending data to your server. However, to unlock the full sharing functionality of W&B, you should configure authentication.

Your server supports any authentication provider supported by [Auth0](https://auth0.com). You should set up your own Auth0 domain and application that will be under your teams' control.

After creating an Auth0 app, you'll need to configure your Auth0 callbacks to the host of your W&B Server. By default, the server supports http from the public or private IP address provided by the host. You can also configure a DNS hostname and SSL certificate if you choose.

* Set the Callback URL to `http(s)://YOUR-W&B-SERVER-HOST`
* Set the Logout URL to `http(s)://YOUR-W&B-SERVER-HOST/logout`
* Set the Allowed Web Origin to `http(s)://YOUR-W&B-SERVER-HOST`

![Enterprise authentication settings](/img/enterprise-auth.png)

Then, navigate to the W&B settings page at `http(s)://YOUR-W&B-SERVER-HOST/vm-settings`. Enable the "Customize Authentication with Auth0" option, and fill in the Client ID and domain from your Auth0 app. The press "Update settings and restart W&B".

### File Storage

By default, a W&B Enterprise Server saves files to a local data disk with a capacity that you set when you provision your instance.

To support limitless file storage, you may configure your server to use an external cloud file storage bucket with an S3-compatible API.

![Enterprise file storage settings](/img/enterprise-file-storage.png)

To do so, navigate to the W&B settings page at `http(s)://YOUR-W&B-SERVER-HOST/vm-settings`. Enable the "Use an external file storage backend" option, and fill in your desired endpoint, access key, and secret key.

For AWS, your standard endpoint will be `http://s3.YOUR-REGION.amazonaws.com`. For GCP, it will be `https://storage.googleapis.com`. You can configure S3-compatible keys for Google Cloud Storage by [following the instructions here](https://cloud.google.com/storage/docs/migrating#keys).
