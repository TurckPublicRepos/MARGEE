---
title: JavaScript
---

All elements are written in plain JavaScript. Programmers are able to create, change, debug, and remove all elements. TWV leverages a specific event-driven rendering lifecycle, which is crucial to understand when implementing custom elements.

## TWV Rendering Lifecycle

When rendering a screen in TWV, each element function is called **twice** during the initial render phase:

1. **First Call (`INIT_START`):**  
   The function is called with the event type `INIT_START`. The returned string (usually HTML) is appended to the overall JavaScript string that builds the screen.
2. **Child Elements:**  
   After the parent element's first call, all child element functions are called in the same manner.
3. **Second Call (`INIT_END`):**  
   The function is called again, this time with the event type `INIT_END`. The returned string is again appended to the JavaScript string.

This double-call mechanism ensures that both the initial structure and any post-initialization logic are handled before the screen is fully drawn.

Once the screen is rendered, the same functions are called repeatedly at regular intervals (using `REDRAW_START` and `REDRAW_END` events). However, **the returned strings are no longer used**. Instead, these calls are intended for updating existing elements in the DOM, such as refreshing values or graphics.

## Event Types

TWV uses the following event types to indicate the reason for each function call:

- **0. INIT_START**  
  Called when a new screen is loaded. The returned string is appended to the HTML data.
- **1. INIT_END**  
  Called after `INIT_START`, but before the actual screen is drawn. The returned string is appended to the HTML data.
- **2. REDRAW_START**  
  Called every X milliseconds. Used to update graphics and texts dynamically.
- **3. REDRAW_END**  
  Called after `REDRAW_START` for any final updates.

## Function Arguments

To be usable in a `.TWV` file, every element function **must** have at least two arguments:

- `event`: The event type (enum), provided by the runtime.
- `id`: A unique identifier (number), also provided by the runtime.

These two arguments are **always filled by the runtime** and **cannot be set in the `.TWV` file**. All other arguments are optional and can be specified by the user in the `.TWV` file.

The `id` is especially important for dynamic updates: it allows the function to locate and update the corresponding DOM element during redraw events.

## Example: `HMI_CONTAINER`

Let's take a quick look at how the element `HMI_CONTAINER` is implemented:

```
HMI_CONTAINER=function(event, id, column=0, columnnSpan=0, row=0, rowspan=0, className, acceptedUsers = []) {
  if (acceptedUsers.length > 0) {
    const element = window.document.getElementById(id);
    if (acceptedUsers.includes(HMI_RUNTIME.CurrentUser)) {
      element?.classList.remove("notInUserList");
    } else {
      element?.classList.add("notInUserList");
    }
  }
  
  if (event === HMI_EVENT.INIT_START)
    return `<div id="${id}" class="HMI_CONTAINER ${className} ${acceptedUsers.length > 0 ? 'notInUserList' : ''}" style="grid-column:${column}/${column+columnnSpan}; grid-row:${row}/${row+rowspan};">`;
  else if (event === HMI_EVENT.INIT_END)
    return "</div>";
} 
```

### Explanation

- **Arguments:**  
  - `event` and `id` are provided by the runtime.
  - Other arguments (`column`, `columnnSpan`, `row`, `rowspan`, `className`, `acceptedUsers`) are user-configurable in the `.TWV` file.
- **Rendering:**  
  - On `INIT_START`, the function returns an opening `<div>` tag with grid positioning and classes.
  - On `INIT_END`, the function returns the closing `</div>` tag.
- **Dynamic Updates:**  
  - When `acceptedUsers` is provided, the function checks the current user and toggles the `"notInUserList"` class on the container element. This logic runs on every call, including redraw events.
- **Usage:**  
  - The element can be called from a `.TWV` file as long as it has the required `event` and `id` arguments.

## Key Points

- **Lifecycle:** Functions are called twice during initial rendering, and repeatedly for updates.
- **Returned Strings:** Only used during initial rendering (`INIT_START` and `INIT_END`).
- **Dynamic Updates:** Use the `id` to update elements during redraw events.
- **Arguments:** `event` and `id` are mandatory and runtime-controlled; other arguments are user-configurable.

This approach allows for flexible, dynamic interfaces where elements can be both rendered and updated efficiently using plain JavaScript.