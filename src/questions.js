export const reactFAQ = [
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, especially for single-page applications. It's used to create reusable UI components.",
    },
    {
      question: "What is a component in React?",
      answer:
        "A component is a reusable piece of UI that can accept inputs (called 'props') and maintain its own state. Components can be either class-based or function-based.",
    },
    {
      question: "What are props in React?",
      answer:
        "Props (short for properties) are inputs to a component. They are read-only, meaning that a component cannot modify its own props, but props can be passed down from parent components to child components.",
    },
    {
      question: "What is state in React?",
      answer:
        "State is a special object that holds data that may change over the lifetime of a component. State is managed within the component and can be updated using the setState function in class components or the useState hook in functional components.",
    },
    {
      question: "What is the difference between props and state?",
      answer:
        "Props are read-only inputs passed from a parent component to a child component, whereas state is an internal object managed within a component that can be changed over time.",
    },
    {
      question: "How do you update state in React?",
      answer:
        "In class components, you update state using the setState method. In functional components, you use the useState hook to define and update the state.",
    },
    {
      question: "What is the useState hook in React?",
      answer:
        "The useState hook is a function that allows you to add state to functional components in React. It returns an array with two values: the current state and a function to update it.",
    },
    {
      question: "Why is it important to keep state immutable in React?",
      answer:
        "Keeping state immutable ensures that React can efficiently detect changes and re-render components only when necessary. Directly mutating the state can lead to unpredictable behavior and bugs.",
    },
    {
      question: "How are props passed in React?",
      answer:
        "Props are passed from parent components to child components as attributes in JSX. The child component can then access them via the props object.",
    },
    {
      question: "Can you modify props in a child component?",
      answer:
        "No, props are read-only. You cannot modify props directly in a child component. To change props, you need to pass a function from the parent component to the child component to trigger updates.",
    },
    {
      question: "What is a controlled component in React?",
      answer:
        "A controlled component is a component where React controls the form data, typically through the use of state. The value of the form element is stored in the component's state and updated via events.",
    },
    {
      question: "What is a key prop in React and why is it important?",
      answer:
        "A key is a special prop used in lists to help React identify which items have changed, are added, or are removed. It is important for efficient re-rendering of lists.",
    },
  ];
  
  export const interviewFAQ = [
    {
      id: 1,
      question: "What is the Virtual DOM in React and how does it work?",
      answer:
        "The Virtual DOM is a lightweight copy of the real DOM that React keeps in memory. React uses it to efficiently update the actual DOM by only re-rendering the parts that change, which optimizes performance.",
    },
    {
      id: 2,
      question: "What are React Hooks and why are they used?",
      answer:
        "React Hooks are functions that let you use state and other React features in functional components. They provide a way to use state (useState), lifecycle methods (useEffect), and context (useContext) without writing class components.",
    },
    {
      id: 3,
      question:
        "What is the difference between a controlled and uncontrolled component in React?",
      answer:
        "In a controlled component, form data is handled by React's state, and the value of form elements is controlled via state. In an uncontrolled component, form data is handled by the DOM itself and uses refs to access form values.",
    },
    {
      id: 4,
      question: "What is Prop Drilling in React and how can it be avoided?",
      answer:
        "Prop Drilling is the process of passing data from a parent component to deeply nested child components by passing props through each intermediary component. It can be avoided by using React Context or state management libraries like Redux.",
    },
    {
      id: 5,
      question: "What is the useEffect hook in React?",
      answer:
        "The useEffect hook allows you to perform side effects in functional components. It can be used for things like fetching data, directly manipulating the DOM, or subscribing/unsubscribing from events. It runs after the render and can be configured to run on specific changes to state or props.",
    },
    {
      id: 6,
      question: "What is the purpose of the React key prop?",
      answer:
        "The key prop is used in lists of elements to help React identify which items have changed, been added, or removed. Keys help improve the performance of React by minimizing unnecessary re-renders.",
    },
    {
      id: 7,
      question: "What is Context API in React and when should you use it?",
      answer:
        "The Context API is a way to pass data through the component tree without having to pass props down manually at every level. It is useful when global state or settings need to be accessed by many components at different levels of the hierarchy.",
    },
    {
      id: 8,
      question: "What is lazy loading in React and how is it implemented?",
      answer:
        "Lazy loading is a technique used to load components only when they are needed, which improves the performance of the app. In React, you can implement lazy loading using the React.lazy() function along with Suspense for fallback loading states.",
    },
    {
      id: 9,
      question: "What is the difference between useState and useReducer?",
      answer:
        "useState is best used for managing simple state in functional components, whereas useReducer is better for more complex state logic where state transitions are more structured. useReducer is often preferred when the state logic involves multiple sub-values or when the next state depends on the previous one.",
    },
    {
      id: 10,
      question: "What are Higher-Order Components (HOCs) in React?",
      answer:
        "A Higher-Order Component (HOC) is a function that takes a component and returns a new component with added behavior or data. It is a pattern used for reusing component logic across different components, such as adding authentication checks or handling fetch data.",
    },
  ];
  