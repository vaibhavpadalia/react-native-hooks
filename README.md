# React Native Hooks ⚓

This POC covers the following hooks:
1. useState()
2. useEffect()
3. useRef()
4. useCallback()
5. useMemo()
6. useReducer()
7. useContext()


`Note: useMemo() and useCallback() are used for performance optimization. However, performance optimizations are not free. They always come with a cost but do not always come with a benefit to offset that cost.`

useMemo() & useCallback() are used for the following reasons:
1. Referential equality
2. Computationally expensive calculations

Referential Equality can be explained with the following examples:
```
true === true // true
false === false // true
1 === 1 // true
'a' === 'a' // true

{} === {} // false
[] === [] // false
() => {} === () => {} // false

const z = {}
z === z // true
```

<b>Q. What is the difference between useMemo() and useCallback() ?</b>

A. useCallback and useMemo both expect a function and an array of dependencies. The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
useCallback returns its function uncalled so you can call it later, while useMemo calls its function and returns the result.
They are a replacement for shouldComponentUpdate from React.PureComponent because the dependencies of these hooks get checked for referential equality.

To know more about when to use useMemo() or useCallback() refer [this](https://kentcdodds.com/blog/usememo-and-usecallback) article.

<br/>
<b>Q. What is the difference between useReducer() and useState() ?</b>

A. useReducer() is generally used when we have some complex state logic where next state depends on the previous one.
useReducer() takes reducer function and initial state as arguments and returns the state and dispatch method.
Note that you can also access previous state in useState hook too.

<br/>
<b>Q. What is useContext() ?</b>

A. useContext() provides the same functionality that you would expect from React's Context API.
It is a simple functional implementation of it. A Context provides both a consumer and a provider. When using the useContext Hook in React, you have to remember to pass in the whole context object, not just the consumer or provider.
