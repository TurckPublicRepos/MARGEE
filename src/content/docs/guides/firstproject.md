---
title: My First Project
---

Follow these steps to create and explore your first Margee project:

1. **Install Prerequisites**
  - Download and install [Visual Studio Code](https://code.visualstudio.com/Download).
  - Install the Margee extension from the VS Code Marketplace.

2. **Create a New Project**
  - Open VS Code and launch the Command Palette (`Ctrl+Shift+P` or `F1`).
  - Type `MARGEE: Create a new Margee project` and select it.
  - Enter a project name and choose a folder for your project.

3. **Explore the Project Structure**
  - Open the generated folder. You’ll see one or more folders containing:
    - `.tps` files: Device and project configuration
    - `.tst` files: Example logic for your Turck device
    - `.twv` files: Web interface (vHMI) example
    - Miscellaneous assets: Images, stylesheets, etc.

4. **Edit Device Logic**
  - Open a `.tst` file. Try editing a task or variable. Margee provides code suggestions and error checking.

5. **Customize the Web Interface**
  - Open a `.twv` file. Add a button, change a label, or adjust layout. Use preview to see changes live.

6. **Configure Device Settings**
  - Edit the .tps file to set device type, I/O parameters, and project options.
  - Make the necessary changes in the `launch.json`. Like the IP address, password, and more

7. **Debug and Simulate**
  - Use Margee’s debugging tools to set breakpoints, watch variables, and simulate device behavior.
  - Hit `F5` to start a debugging session. The code will be compiled and uploaded to the device.
  - The progress is reported in the bottom (typically) blue bar.