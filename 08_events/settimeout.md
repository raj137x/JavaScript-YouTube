
# JavaScript Timeout Functions: `setTimeout` and `clearTimeout`

## `setTimeout`

- **Purpose**: Executes a function after a specified delay.
- **Syntax**: `setTimeout(function, delay, arg1, arg2, ...)`
  - `function`: The function to be executed.
  - `delay`: The time in milliseconds to wait before executing the function.
  - `arg1, arg2, ...`: Optional arguments to pass to the function.
- **Example**:
  ```javascript
  const timeoutID = setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
  }, 2000);
  ```

## `clearTimeout`

- **Purpose**: Cancels a timeout set with `setTimeout`.
- **Syntax**: `clearTimeout(timeoutID)`
  - `timeoutID`: The identifier returned by `setTimeout` which specifies the timeout to clear.
- **Example**:
  ```javascript
  const timeoutID = setTimeout(() => {
    console.log("This will not be displayed");
  }, 2000);

  // Cancel the timeout before it executes
  clearTimeout(timeoutID);
  ```

## Summary
- **`setTimeout`** schedules a function to be executed after a delay.
- **`clearTimeout`** cancels a scheduled function execution.
