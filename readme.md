# JavaScript Basic Questions

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector/querySelectorAll`.

- `getElementById` selects a single element by its ID.
- `getElementsByClassName` selects all elements with a class and it returns HTMLCollection.
- `querySelector` selects the first matching element, `querySelectorAll` selects all matching elements and it returns NodeList.

## 2. How to create and insert a new element into the DOM

- First create a new element by `document.createElement("tag")` .Then
- Set content with `.innerText` or `.innerHTML`.
- Insert it into the DOM using `.appendChild()`.

## 3. Event Bubbling

- When an event happens on an element, it first runs the event handler on that element, and then it "bubbles up" to its parent elements, executing their handlers as well.

## 4. Event Delegation

- Event delegation is a technique where instead of adding event listeners to many child elements, add a single listener to a parent element and the event bubble up.
- Useful for handling dynamic content efficiently.

## 5. Difference between `preventDefault()` and `stopPropagation()`

- `preventDefault()` stops the browser’s default action (like form submit or link navigation).
- `stopPropagation()` stops the event from bubbling or capturing further in the DOM.
