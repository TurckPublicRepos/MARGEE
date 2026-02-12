
---
title: TypeScript Elements in TWV
---

TWV lets you build dynamic user interfaces by defining elements as TypeScript classes. Each element is a reusable building block that controls its own rendering and behavior. The runtime takes care of instantiating, rendering, and updating these elements for you.

## How Elements Work

1. **Definition:** You define an element as a TypeScript class that extends the `RUNTIME_ELEMENT` abstract class.
2. **Discovery:** When a `.twv` file is loaded, the runtime finds each element and creates an instance of its class.
3. **Rendering:** The runtime calls the `render` method on each instance, passing in arguments from the `.twv` file.
4. **DOM Integration:** The element’s `root` DOM node is appended to its parent in the UI tree. Class names (including the TypeScript class name and any custom class from the `.twv` file) are automatically added to the root for styling.
5. **Lifecycle:** The runtime continues to call `render` for every element in a cyclic fashion, allowing elements to update in response to data or user actions. The `HMI_RUNTIME.isRendered` flag lets you check if the element is being rendered for the first time or is being updated.

## The Base Class: `RUNTIME_ELEMENT`

Every custom element must extend the following abstract class:

```typescript
export abstract class RUNTIME_ELEMENT {
  public abstract readonly root: HTMLElement;
  public content?: HTMLElement;
  public abstract render(...args: (ARG | undefined)[]): void;
}
```

- `root`: The main DOM node for your element. This is what gets appended to the parent in the UI tree.
- `content`: Optional. Can be used if your elements has child nodes (only **HMI_SCREEN**, **HMI_GRID** and **HMI_CONTAINER**)
- `render`: Called by the runtime to update your element. All arguments from the `.twv` file are passed here.

## Writing Your Own Element

Here’s a step-by-step guide to creating a custom element:

1. **Create a TypeScript class that implements `RUNTIME_ELEMENT`.**
2. **Define the `root` property as your main DOM node.**
3. **Implement the `render` method to update the DOM and handle logic.**
4. **Use arguments in `render` to control appearance and behavior.**
5. **Leverage `HMI_RUNTIME.isRendered` to distinguish between initial and update renders.**

### Example: `HMI_CONTAINER`

```typescript
export class HMI_DISPLAY_VALUE implements RUNTIME_ELEMENT { 
  readonly p = document.createElement('p');
  readonly root = this.p;

  render(
    value: ARG_VAL_NUMERICAL,
    before: ARG_CONST_ARRAY_USINT | undefined,
    after: ARG_CONST_ARRAY_USINT | undefined,
    decimals: ARG_CONST_NUMERICAL | undefined,
  ): void {
    const _value = HMI_RUNTIME.get(value);
    const _before = HMI_RUNTIME.get(before, 'formattedString') ?? '';
    const _after = HMI_RUNTIME.get(after, 'formattedString') ?? '';
    const _decimals = HMI_RUNTIME.get(decimals) ?? 0;

    const displayValue = +_value.toFixed(_decimals);
    this.p.innerHTML = `${_before}${displayValue}${_after}`;
  }
}
```

#### What’s Happening in the Example?

- The class defines a `root` div.
- The `render` method reads values from the runtime.
- The content of the paragraph element is updated accordingly
- The runtime manages when and how often `render` is called.

## Tips for Custom Elements

- Use the arguments in `render` to make your element flexible and reusable.
- Add logic in `render` to update styles, classes, or content based on state or arguments.
- Use `HMI_RUNTIME.isRendered` to separate initialization from updates if needed.
- Custom class names from the `.twv` file are automatically added to your root element for easy styling.

## Summary

TWV elements are TypeScript classes that control their own rendering and logic. The runtime handles instantiation, rendering, and updates, so you can focus on building interactive, maintainable UI components. By following the base class structure and using the `render` method, you can create powerful custom elements for your application.