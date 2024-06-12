# Difference between Properties and Methods of the Event Object

In JavaScript, the event object is a fundamental part of the event handling mechanism. It encapsulates information about an event and provides methods to interact with it. Understanding the difference between properties and methods of the event object is crucial for effective event handling.

## Properties of the Event Object

**Properties** are attributes of the event object that store information about the event. These properties provide details about the nature of the event, the element that triggered it, and other contextual information. Properties are typically used to read or modify event-related data.

Here are some common properties of the event object:

1. **`type`**: A string representing the type of event (e.g., "click", "keydown").

```javascript
console.log(event.type); // "click"
```

2. **`target`**: The element that triggered the event.

```javascript
console.log(event.target); // <button id="myButton">Click me</button>
```

3. **`currentTarget`**: The element to which the event handler is attached.

```javascript
console.log(event.currentTarget); // <div id="myDiv">...</div>
```

4. **`clientX`** and **`clientY`**: The X and Y coordinates of the mouse pointer relative to the viewport when the event occurred (for mouse events).

```javascript
console.log(event.clientX, event.clientY); // 150 75
```

5. **`key`** and **`keyCode`**: The key value and code of the key pressed (for keyboard events).

```javascript
console.log(event.key, event.keyCode); // "a" 65
```

6. **`timeStamp`**: The time at which the event was created (in milliseconds).

```javascript
console.log(event.timeStamp); // 1643123456789
```

7. **`relatedTarget`**: The secondary target related to the event (e.g., the element the mouse came from or is going to, in mouseover/mouseout events).

```javascript
console.log(event.relatedTarget); // <div id="anotherElement">...</div>
```

## Methods of the Event Object

**Methods** are functions associated with the event object that allow you to perform actions or manipulate the event's behavior. Methods provide a way to interact with the event system, such as preventing the default action of an event or stopping its propagation.

Here are some common methods of the event object:

1. **`preventDefault()`**: Prevents the default action associated with the event (e.g., following a link, submitting a form).

```javascript
event.preventDefault();
```
2. **`stopPropagation()`**: Stops the event from propagating (bubbling) up the DOM tree.

```javascript
event.stopPropagation();
```

3. **`stopImmediatePropagation()`**: Stops the event from propagating and prevents other listeners of the same event from being called.

```javascript
event.stopImmediatePropagation();
```

4. **`initEvent()`**: Initializes the value of an event created using `document.createEvent`. (Note: This is rarely used in modern code due to the introduction of newer event creation mechanisms like `Event` constructor).

```javascript
event.initEvent('click', true, true);
```

### Example to Illustrate the Difference

Here's an example that demonstrates both properties and methods of the event object:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Properties and Methods</title>
</head>
<body>
    <a href="https://www.example.com" id="myLink">Go to Example.com</a>

    <script>
        const link = document.getElementById('myLink');

        link.addEventListener('click', function(event) {
            // Using a property to get event type and target
            console.log('Event type:', event.type); // "click"
            console.log('Event target:', event.target); // <a href="...">Go to Example.com</a>

            // Using a method to prevent the default action
            event.preventDefault();
            console.log('Default action prevented.');
            
            // Using a method to stop the event from propagating
            event.stopPropagation();
            console.log('Event propagation stopped.');
        });

        document.body.addEventListener('click', function() {
            console.log('Body clicked.');
        });
    </script>
</body>
</html>
```
### Explanation:

- **Properties:**

  - `event.type` and `event.target` are used to get information about the event type and the element that triggered it.

- **Methods:**

  - `event.preventDefault()` prevents the default action of the link (navigating to "https://www.example.com").

  - `event.stopPropagation()` prevents the event from bubbling up to the `body` element, so the `console.log('Body clicked.')` statement won't execute.

  ### Summary

- **Properties**: Attributes of the event object that provide information about the event (e.g., `type`, `target`, `clientX`).

- **Methods**: Functions associated with the event object that allow you to control the event's behavior (e.g., `preventDefault()`, `stopPropagation()`).