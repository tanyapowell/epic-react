# Epic React

All the exercises and docs created during Kent C Dodd's Epic React course

- [Fundamentals](#Fundamentals)
  - [Exercise 1: Hello World](#Hello-World)
  - [Exercise 2: Intro to Raw React APIs](#Intro-to-Raw-React-APIs)
  - [Exercise 3: Using JSX](#Using-JSX)

## Fundamentals

[Code](https://github.com/tanyapowell/epic-react/tree/main/react-fundamentals)

Going back to the beginning and learning/re-learning the fundamentals of React.

### Hello World

[HTML](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/01.html)

Old skool vanilla JS. Creating nodes and appending to the DOM. 

All code is written in a single HTML file.

### Intro to Raw React APIs

[HTML](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/02.html)

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

[HTML](https://github.com/tanyapowell/epic-react/blob/main/react-fundamentals/src/exercise/03.html)

Creating a single `<div>` using JSX instead of `React.createElement`

All code is written in a single HTML file.

#### Extra Credit

1. Interpolating props and children
2. Spreading the props
