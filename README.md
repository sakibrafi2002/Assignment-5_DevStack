# DevStack

DevStack is a simple technology explorer for developers. Browse popular tools, compare their details, and create a technology stack for your next project.

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify

## Features

- Browse technologies loaded from a JSON file.
- Add and remove technologies from your personal stack.
- Get toast notifications when stack items change.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like elements inside JavaScript. React uses it to describe what the user interface should look like.

### 2. What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a component. It is used for the technology data, loading state, and selected stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. It loads the technology data from `data.json` when the app starts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` helps React identify each item and update only the item that changed.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering shows different UI based on a condition. This project shows `No stack selected` when the stack is empty and the stack list when it has items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data through props. The parent can also pass a function as a prop, which the child calls to send an action or data back.
