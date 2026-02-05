---
title: Styling
---

## Styling in TWV

Styling in TWV is typically managed using standard CSS, either through classes or inline styles. When you define elements in JavaScript for TWV, you can assign CSS classes or set inline styles directly in the returned HTML string.

### Using Classes

You can pass a `className` argument to your element functions and include it in the HTML output. This allows you to leverage global or local CSS rules.

```js
// Example
return `<div id="${id}" class="myCustomClass">${content}</div>`;
```

### Inline Styles

For dynamic layouts, you can set inline styles using string interpolation:

```js
return `<div style="color: ${color}; grid-column: ${col};">${content}</div>`;
```

### Dynamic Styling with JavaScript

During redraw events, you can update styles or classes programmatically:

```js
const el = document.getElementById(id);
el.style.backgroundColor = newColor;
el.classList.toggle("active", isActive);
```

### Best Practices

- Use CSS classes for reusable styles.
- Use inline styles for dynamic or computed values.
- Update styles in redraw events for interactive or real-time changes.

This approach allows you to combine the flexibility of JavaScript with the power of CSS, making your TWV interfaces both dynamic and visually consistent.

## Example CSS File

You can define your styles in a separate CSS file and reference the classes in your TWV JavaScript elements.

```css
.myCustomClass {
  background: #f0f0f0;
  color: #333;
  border-radius: 8px;
  padding: 12px;
  transition: background 0.3s;
}
.active {
  background: #0078d4;
  color: #fff;
}
```

Then, in your JavaScript element:

```js
return `<div id="${id}" class="myCustomClass ${isActive ? 'active' : ''}">${content}</div>`;
```

Include your CSS file in your HTML or project so the classes are available to your TWV elements.