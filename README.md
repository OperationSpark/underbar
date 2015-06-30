# Underbar

This project was written in the same spirit as
[JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans), and thusly
uses the [Mocha Test Suite](http://visionmedia.github.io/mocha) to facilitate a
TDD approach to learning. It walks you through a reimplementation of
[underscore.js](http://underscore.js), a popular collection of useful functions
authored by Jeremy Ashkenas.

## Links and Resources

Some quick notes that may come in handy:

- As you work through these functions, you may sometimes have questions about
  what arguments they take, or about how they work (their *interface*). If the
  inline comments don't clarify these questions, it's a good idea to reference
  the official library's [documentation](http://underscore.js).
- Many of the functions operate on "collections." They can take both arrays or
  objects as their arguments and you need to be able to handle both cases.
    - You can use `Array.isArray(obj)` to find out whether an object is an array.
    - You can use `obj.length` to test if something is either a string or an
      array.
- Javascript has a built-in `Math` object that provides some very useful
  functions. You can read up on them [here](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math).
- Within a function, you can use the `arguments` keyword to access all the
  parameters that were passed in--even if they aren't named in the function
  definition. This is useful if you don't know how many arguments are going to
  be passed in in advance.
    - You can count the arguments by using `arguments.length` and access each
      argument using `arguments[i]`.
    - The `arguments` object is very similar to an array, but note that it does
      not support most array functions (such as `slice` or `push`). You can read
      more about this [here](http://www.sitepoint.com/arguments-a-javascript-oddity/).
- If you have an array `myParameters` and would like to call a function
  `myFunction` using the elements in the array as parameters, you can use
  `myFunction.apply(context, myParameters)`. The first parameter, `context`, is
  the execution context for your function call. From inside `myFunction`, you
  can access it as `this`. For this exercise, you can just pass `null` for `context`.
  If you're curious, you can read more in the [documentation for apply](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/apply).

## Goals

As is, the repository is missing code for most of the functions. It's your job
to fix the library by implementing them. The functions are split in two sections,
with a separate test suite for each.

The files in the `spec` directory contain the test suites. Your goal is to get all
the tests to pass by implementing the missing functions. Run all the tests by
opening `SpecRunner.html` in your browser.

The file `src/underbar.js` contains function definitions and explanations for
the following functions (*italicized functions* are solved for you). Implement
each of the functions by making all of the tests pass:

#### Part I:
- [ ] identity
- [ ] *first*
- [ ] last
- [ ] each
- [ ] *indexOf*
- [ ] filter
- [ ] reject
- [ ] uniq
- [ ] map
- [ ] *pluck*
- [ ] reduce

#### Part II:
- [ ] *contains*
- [ ] every
- [ ] some
- [ ] extend
- [ ] defaults
- [ ] *once*
- [ ] memoize
- [ ] delay
- [ ] shuffle

#### Extra Credit:
- [ ] invoke
- [ ] sortBy
- [ ] zip
- [ ] flatten
- [ ] intersection
- [ ] difference
- [ ] throttle

**Note:** Some browsers provide built-in functions--including `forEach`, `map`,
`reduce` and `filter`--that replicate the functionality of some of the functions
you will implement. Don't use them to implement your functions.

### Throttle

There's one function that is a little more complicated, so we've included some
more context to help you along.

**_.throttle(func, wait)**: Wrap a function `func` so that it can be called at
most once within a period of `wait` milliseconds. This is useful for throttling
access to expensive APIs or to drawing routines in a video game. Let's see how
it's used:

```javascript
var counter = 0;
var increment = function() {
  return counter += 1;
};

// Create a function called throttledIncrement. This function can be called at
// most once every 100ms
var throttledIncrement = _.throttle(increment, 100);

throttledIncrement(); // return 1; `counter` should now be 1
throttledIncrement(); // return 1; schedule `increment()` call in 100ms
throttledIncrement(); // return 1; should do nothing

// Wait 100 ms; `increment` is called
```

- Arguments passed to the throttled function should be passed to the original
  function.
- The throttled function should always return the most recently returned value of
  the original function.
- If the wait period is 100ms and the function was last called 30ms ago,
  another call to the throttled function should schedule a call for 0ms after the wait period is over.

## Extra Extra Credit

- Download the real [underscore.js](https://github.com/documentcloud/underscore/)
  implementation and test suite, and try to understand how it works. A great way
  to do this is to break parts of the code and see which tests fail.
- Compare your implementations to the ones in the real library. Notice that this
  assignment has stripped out some complexity from the original library; notice
  where these changes have been made, and try to understand what edge cases the
  original library is handling that your functions aren't.
- Notice that the real underscore.js uses an object named `breaker`. Look through the
  source and understand what this is doing, and how it optimizes some of the functions.
