# Difference between 'event' and 'event object' in JavaScript

In JavaScript, the terms "event" and "event object" are closely related but refer to slightly different concepts.

## Event

An **event** is an action or occurrence recognized by the browser or a web application. Events can be triggered by user interactions such as clicking a button, moving the mouse, pressing a key, or by other actions like page load, page unload, or asynchronous requests.

Common types of events include:
- Mouse events: `click`, `dblclick`, `mouseover`, `mouseout`, `mousemove`
- Keyboard events: `keydown`, `keypress`, `keyup`
- Form events: `submit`, `reset`, `change`, `input`
- Window events: `load`, `resize`, `scroll`
- Touch events: `touchstart`, `touchend`, `touchmove`

## Event Object

The **event object** is an instance of the `Event` interface (or one of its derived interfaces) that is automatically passed to the event handler when an event is fired. This object contains detailed information about the event and provides methods to interact with it.

## Key Differences

- **Definition**:
  - **Event**: The action or occurrence itself (e.g., a click, a key press).
  - **Event Object**: The object that contains information about the event when it occurs.

- **Usage**:
  - **Event**: Describes what happened (e.g., "The click event occurred").
  - **Event Object**: Provides details and context about the event and allows for manipulation (e.g., `event.type`, `event.target`).

## Example

Consider a simple example with a click event:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event vs Event Object</title>
</head>
<body>
    <button id="myButton">Click me</button>

    <script>
        // Define an event handler function
        function handleClick(event) {
            console.log('An event occurred:', event.type); // Event type (e.g., "click")
            console.log('Event target:', event.target);    // Event object property (element that triggered the event)
            console.log('Mouse X:', event.clientX);        // Mouse coordinates when the event occurred
        }

        // Get the button element
        const button = document.getElementById('myButton');

        // Attach the event listener to the button
        button.addEventListener('click', handleClick);
    </script>
</body>
</html>

```

### Explanation

- **Event:**
  - In this example, the event is the click action on the button.

- **Event Object:**

  - The event object (`event`) is automatically passed to the `handleClick` function when the click event occurs.

  - This object contains properties and methods like `event.type`, `event.target`, and `event.clientX`.

  ## Key Properties and Methods of the Event Object


  - ### Properties:

- `type`: The type of event (e.g., "click").
- `target`: The element that triggered the event.
- `currentTarget`: The element to which the event handler is attached.
- `clientX`, clientY: The coordinates of the mouse pointer (for mouse events).
- `key`, `keyCode`: The key value and code (for keyboard events).

### Methods:

- `preventDefault()`: Prevents the default action associated with the event.

- `stopPropagation()`: Stops the event from propagating (bubbling) up the DOM tree.

- `stopImmediatePropagation()`: Stops the event from propagating and prevents other listeners of the same event from being called.

## Summary:

- An event is the action or occurrence itself, such as a mouse click or a key press.

- The event object is the object that is passed to the event handler, containing information about the event and methods to interact with it.