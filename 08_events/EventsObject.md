# JavaScript Events Object: Full Detail and Explanation

## What is an Event?
An event is any interaction that occurs within a webpage. Examples of events include:

- Clicking a button
- Pressing a key
- Moving the mouse
- Submitting a form
- Loading a webpage

## What is an Event Object?

When an event happens, the browser creates an event object. This object contains information about the event and is passed to the event handler (the function that deals with the event).

## Key Properties of an Event Object

Here are some important properties of the event object:

1. **type**: This property tells you what kind of event occurred (e.g., "click", "keydown").
 ```javascript
   element.addEventListener('click', function(event) {
       console.log(event.type); // Output: "click"
   });

   ```

2. **target**: This property refers to the element that triggered the event.

```javascript

element.addEventListener('click', function(event) {
    console.log(event.target); // Output: The element that was clicked
});

```

3. **currentTarget**: This property refers to the element to which the event handler is attached.

```javascript

element.addEventListener('click', function(event) {
    console.log(event.currentTarget); // Output: The element with the event listener
});

```

4. **timeStamp**: This property provides the time when the event was created.

```javascript

element.addEventListener('click', function(event) {
    console.log(event.timeStamp); // Output: Time in milliseconds
});

```

5. **bubbles**: This property tells you whether the event bubbles up through the DOM (more on this later).

```javascript

element.addEventListener('click', function(event) {
    console.log(event.bubbles); // Output: true or false
});

```

6. **cancelable**: This property indicates whether the event can be canceled.

```javascript

element.addEventListener('click', function(event) {
    console.log(event.cancelable); // Output: true or false
});

```

## Key Methods of an Event Object

Here are some important methods that can be called on an event object:

1. **preventDefault()**: This method cancels the event’s default action (if it is cancelable).

```javascript

element.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default action (e.g., following a link)
});

```

2. **stopPropagation()**: This method prevents the event from bubbling up to parent elements.

```javascript

element.addEventListener('click', function(event) {
    event.stopPropagation(); // Stops the event from propagating further
});

```

3. **stopImmediatePropagation()**: This method stops other event listeners from being called.

```javascript

element.addEventListener('click', function(event) {
    event.stopImmediatePropagation(); // No other listeners will be called
});

```

### Example

Let's look at a practical example to tie all this together:

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Object Example</title>
</head>
<body>
    <button id="myButton">Click me</button>

    <script>
        var button = document.getElementById('myButton');
        // `event` inside the `function parameters` refers to the `event object` that is automatically passed to the event handler function when the event occurs. This object contains all the relevant information about the event, including details about the element that triggered the event, the type of event, and other event-specific properties.
        button.addEventListener('click', function(event) {
            alert('Button was clicked!');
            console.log('Event Type: ' + event.type);
            console.log('Event Target: ' + event.target);
            console.log('Event TimeStamp: ' + event.timeStamp);
            
            // Prevent the default action (if any)
            event.preventDefault();
        });
    </script>
</body>
</html>

```

In this example:

- We have a button element with the id `myButton`.
- We add a click event listener to this button.
- When the button is clicked, an alert is shown, and various properties of the event object are logged to the console.

## Conclusion

The event object in JavaScript is a powerful tool that gives you detailed information about an event and control over how that event is handled. By understanding its properties and methods, you can create more interactive and responsive web applications.
