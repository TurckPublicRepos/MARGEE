---
title: Editing
---

## Editing Basics

When working with Margee projects in Visual Studio Code, you can easily add, remove, and edit files using the built-in file explorer.

- **Adding Files:**  
  Right-click a folder in the Explorer and choose "New File" to create a new `.tps`, `.tst`, or `.twv` file.

- **Removing Files:**  
  Right-click a file and select "Delete" to remove it from your project.

- **Editing Files:**  
  Click any file to open it in the editor. Make changes as needed.

## Intellisense and Error Checking

Margee provides intellisense (code suggestions) and error checking for supported file types.  
After you finish editing, the extension will update its analysis a short time (typically a few hundred milliseconds) after your last change.  
This means intellisense and error messages may appear with a slight delay after you stop typing.

## Tips

**Tips:**
- Save your files regularly to ensure changes are detected.
- Use the Problems panel (`Ctrl+Shift+M`) to view errors and warnings.
- Rename files by right-clicking and choosing "Rename".
- Errors and other MARGEE info (like code size) are reported by MARGEE. This info can be viewed in the output window (`Ctrl+Shift+U`), and selecting `MARGEE` in the dropdown menu.
- Undo/redo changes with `Ctrl+Z`/`Ctrl+Y`.
- Organize files by function and use descriptive names for easier navigation.

**Version Control:**
- Use VS Code's built-in source control (Git) to track changes, commit edits, and revert to previous versions if needed. This helps you manage your project history and collaborate with others.

**Troubleshooting Intellisense & Error Checking:**
- If intellisense or error checking stops working, try saving your file, reloading the VS Code window (`Ctrl+Shift+P` → "Reload Window"), or restarting VS Code.
