---
title: My First Project
---


This guide will walk you through creating and exploring your very first Margee project. Before you begin, make sure Margee is set up in your environment. See [Online Installation](../../installing/online) or [Offline Installation](../../installing/offline) on how to setup your MARGEE environment. 

## 1. Create a New Project

1. Open VS Code and launch the Command Palette (`Ctrl+Shift+P` or `F1`).
2. Type `MARGEE: Create a new Margee project` and select it.
3. Enter a project name and choose a folder for your project.
4. When prompted, click ‘Yes’ to open the project.

## 2. Explore the Project Structure

In your new project you’ll find the following files:

- **`.tps` files** — Device and project configuration
- **`.tst` files** — Example logic for your Turck device
- **`.twv` files** — Web interface (vHMI) example
- **Assets** — Images, stylesheets, and more

## 3. Edit Device Logic

Open a `.tst` file and try editing a task or variable. Margee provides code suggestions and error checking as you work.

## 4. Customize the Web Interface

Open a `.twv` file. Add a button, change a label, or adjust the layout. Use the preview feature to see your changes live.

## 5. Configure Device Settings

- Edit the `.tps` file to set device type, I/O parameters, and project options.
- Update the `launch.json` file with your device’s IP address, password, and other settings as needed.

## 6. Debug and Simulate

Use Margee’s debugging tools to:

- Set breakpoints
- Watch variables
- Simulate device behavior

Press `F5` to start a debugging session. Your code will be compiled and uploaded to the device. Progress is shown in the blue status bar at the bottom.
