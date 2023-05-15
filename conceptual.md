### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is an open-source JavaScript library for building user interfaces.React is a popular choice for building modern web applications because it allows developers to create complex user interfaces quickly and efficiently.
- What is Babel?
Babel is an open-source JavaScript compiler that is used to translate modern JavaScript code into a format that can be understood by older browsers
- What is JSX?
JSX is a syntax extension for JavaScript that is used with the React library. It allows developers to write code that combines HTML-like syntax with JavaScript logic
- How is a Component created in React?
a component is a reusable piece of code that defines the UI elements and their behavior
- What are some difference between state and props?
Props (short for "properties") are data that is passed down from a parent component to a child component. They are read-only and cannot be modified by the child component. Instead, changes to props must be made in the parent component and then passed down again.

State is data that is managed internally by a component. It can be updated by the component itself, and changes to state trigger a re-render of the component and its child components. State is typically used to manage data that changes over time based on user interaction or other events.
- What does "downward data flow" refer to in React?
In React, "downward data flow" refers to the concept that data should be passed from parent components to child components via props
- What is a controlled component?
In React, a controlled component is a form element (such as an input, textarea, or select) that is controlled by React state
- What is an uncontrolled component?
In React, an uncontrolled component is a form element (such as an input, textarea, or select) that is not controlled by React state.
- What is the purpose of the `key` prop when rendering a list of components?
When rendering a list of components in React, the key prop is used to give each item in the list a unique identifier 
- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using an array index as the key prop when rendering a list of components is considered a poor choice because it can lead to issues with component state and performance.
- Describe useEffect.  What use cases is it used for in React components?
useEffect is a built-in React Hook that allows you to perform side effects in functional components. Side effects can include anything that affects the outside world, such as making an API call, modifying the DOM, or setting up a timer.
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a built-in React Hook that returns a mutable ref object whose current property can be used to hold a value that persists across component renders.
- When would you use a ref? When wouldn't you use one?
You would use a ref in React when you need to access or manipulate a DOM element, or when you need to persist data across component renders without triggering a re-render.
- What is a custom hook in React? When would you want to write one?
In React, a custom hook is a reusable function that can contain stateful logic and be shared across components. Custom hooks are a way to encapsulate complex logic and make it easier to reuse across different components, without having to duplicate code or use higher-order components.