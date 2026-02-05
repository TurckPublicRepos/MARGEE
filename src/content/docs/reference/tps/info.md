---
title: Turck Project Settings
---

A Turck Project Settings file (`TPS`) contains all settings regarding compilation of a Margee project. This means the target device, I/O parameters but also the project name and more can be changed here.

:::tip
The TPS file is essential for defining your project's hardware and compilation options. Edit it whenever you change your target device or I/O setup.
:::

![TPS Editor](../../../../assets/TPS%20editor.png)

## Key Settings in a TPS File

- **Target Device:** Select which Turck device to compile for.
- **I/O Parameters:** Configure digital and analog inputs/outputs or IO-Link ports.
- **Project Name:** Set the name for your project.
- **Other Options:** Additional compilation and project settings.

Because a `TPS` file contains only **project** related settings, the actual IP and password of the device must be set elsewhere. These settings must be set in the `launch.json` file, which can be found inside the `.vscode` directory. The `launch.json` contains (also for other non-MARGEE projects) the launch configuration for a debugging session.

:::note
You can have multiple `.TPS` files in your project. The first `.TPS` file the editor finds will be used as the project settings. 
:::

