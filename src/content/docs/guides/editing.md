---
title: Editing
---


# Editing Guide

This guide explains how to add, remove, and edit files in your Margee project using Visual Studio Code, and how to make the most of Margee's intellisense and error checking features.

---

## Editing Basics

You can easily manage files in your Margee project using VS Code's built-in file explorer:

- **Add Files:** Right-click a folder in the Explorer and choose "New File". You can create `.tps`, `.tst`, or `.twv` files for Margee.
- **Remove Files:** Right-click a file and select "Delete" to remove it from your project.
- **Edit Files:** Click any file to open it in the editor and make changes as needed.


## Intellisense and Error Checking

Margee provides Intellisense (code suggestions) and error checking for supported file types. After you finish editing, the extension updates its analysis a short time (typically a few hundred milliseconds) after your last change. This means Intellisense and error messages may appear with a slight delay after you stop typing.


## Tips for Effective Editing

- **Save regularly:** Ensure changes are detected by saving files often.
- **View errors and warnings:** Use the Problems panel (`Ctrl+Shift+M`).
- **Rename files:** Right-click and choose "Rename".
- **View Margee info:** Errors and other Margee information (like code size) are reported in the Output window (`Ctrl+Shift+U`), under the `MARGEE` dropdown.
- **Undo/redo:** Use `Ctrl+Z`/`Ctrl+Y`.
- **Organize files:** Group files by function and use descriptive names for easier navigation.

### Version Control

Use VS Code's built-in source control (Git) to track changes, commit edits, and revert to previous versions. This helps you manage your project history and collaborate with others.

### Troubleshooting Intellisense & Error Checking

If Intellisense or error checking stops working:

- Save your file to trigger analysis.
- Reload the language parsers (`Ctrl+Shift+P` → `MARGEE: Reset the MARGEE parsers`).
- Reload the VS Code window (`Ctrl+Shift+P` → `Developer: Reload Window`).
- Check that the Margee extension is enabled and up to date.
- View the Output window (`Ctrl+Shift+U`) and select `MARGEE` for logs or error messages.
