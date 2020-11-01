# Epic React

All the exercises and docs created during Kent C Dodd's Epic React course

- [Fundamentals](#Fundamentals)
  - [Exercise 1: Hello World](#Hello-World)
  - [Exercise 2: Intro to Raw React APIs](#Intro-to-Raw-React-APIs)
  - [Exercise 3: Using JSX](#Using-JSX)
  - [Exercise 4: Creating custom components](#Creating-custom-components)
  - [Exercise 5: Styling components](#Styling-components)
  - [Exercise 6: Forms](#Forms)
- [Hooks](#Hooks) 
  - [Exercise 1: Use State](#Use-State)

## Fundamentals

[Code](https://github.com/tanyapowell/epic-react/tree/main/react-fundamentals)

Going back to the beginning and learning/re-learning the fundamentals of React.

### Hello World

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/01.html)

Old skool vanilla JS. Creating nodes and appending to the DOM.

All code is written in a single HTML file.

### Intro to Raw React APIs

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/02.html)

Using the `React.createElement` method to create nodes and append them to the DOM.

All code is written in a single HTML file.

#### Extra Credit

Nesting elements using `React.createElement` to produce the following DOM output:

``` html
<body>
  <div id="root">
    <div class="container">
      <span>Hello</span>
      <span>World</span>
    </div>
  </div>
</body>
```

### Using JSX

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/03.html)

Creating a single `<div>` using JSX instead of `React.createElement`

All code is written in a single HTML file.

#### Extra Credit

1. Interpolating props and children
2. Spreading the props

### Creating custom components

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/04.html)

Creating a custom reusable React component

All code is written in a single HTML file.

#### Extra Credit

1. Creating the component using `React.createElement`

2. Creating the component using JSX

3. Runtime validation with PropTypes

4. Using the prop-types package

5. Using React Fragments

### Styling components

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/05.js)

Inline styling of components and regular CSS with the `className` prop

All code is written in a single JS file.

### Forms

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/06.js)

All code is written in a single JS file.

1. `Refs`

2. Validation

## Hooks

### Use State

[Exercise Files](https://github.com/tanyapowell/epic-react/blob/main/react-hooks/src/exercise/01.js)

Basic exercise to use the `useState` hook to store a name in state

All code is written in a single JS file.
