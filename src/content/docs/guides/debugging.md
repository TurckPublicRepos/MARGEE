---
title: Quick start
---

## Debugging in Margee

Margee supports debugging your project directly from Visual Studio Code using a `launch.json` configuration. This allows you to connect to your device, set breakpoints, and inspect variables during execution.

### Basic Debugging Setup

Your project should include a `.vscode/launch.json` file with properties such as:

- `IP`: IP address of your device.
- `Password`: Device password.
- `RefreshInterval`: Time in milliseconds between refreshes.
- `StartDelay`: Delay before upload is finalized.
- `trace`: Enable protocol logging.

### Debugging TWV (Web Visualization)

You can also debug your `.twv` (web view) files and JavaScript elements using the `AttachVisualization` option:

- Set `"AttachVisualization": true` in your `launch.json`.
- Margee will attach the visualization (web interface) to your debug session.
- You can debug JavaScript elements natively, set breakpoints, and inspect values in the browser.

You can specify which browser to use for visualization debugging with `"AttachVisualizationTo"` (e.g., `"msedge", "chrome", ...`).

#### Example launch.json snippet

```json
{
  "trace": true,
  "IP": "192.168.1.254",
  "Password": "password",
  "RefreshInterval": 20,
  "StartDelay": 20,
  "AttachVisualization": true,
  "AttachVisualizationTo": "msedge"
}
```

This setup makes it easy to debug both your device logic and your web visualization in one workflow.

### starting the debug session

Hit `F5` to start a debugging session. The code will be compiled and uploaded to the device.
The progress is reported in the bottom (typically) blue bar.
