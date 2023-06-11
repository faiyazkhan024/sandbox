// Let’s say we want to print numbers from 0 - 4 we can use for loop to print all of them! But we want them to print with a delay of n seconds where n is the current iteration for example in 1st iteration the delay is 0 seconds and in 2nd it’s 1 seconds and in 3rd it’s 2 seconds and so on.. The following code doesn’t seem to work as expected, please find the bug and help fix it with a brief explanation.
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// The original code doesn't produce the expected result due to the behavior of closures in JavaScript. In the loop, the setTimeout callback functions are created, but they all share the same reference to the variable i. By the time the timeouts are executed, the loop has already completed, and the value of i is 5 in all iterations.

// To fix this issue, you can use either of the following solutions:

// Solution 1:
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
// In this solution, a self-invoking function is used to create a new scope for each iteration of the loop. By passing i as an argument to the self-invoking function and immediately invoking it, the value of i is captured and stored in the variable j. Each callback function created inside the self-invoking function has its own unique copy of j, resulting in the desired delayed output.

// Solution 2:
for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}
// Using let instead of var in the loop declaration introduces block scope for the variable i. With let, a new lexical environment is created for each iteration of the loop, ensuring that the value of i is preserved within each iteration. This allows the callbacks to access the correct value of i at the time of their creation.

// Both solutions will produce the desired output, printing the numbers 0 to 4 with a delay of n seconds for each iteration.
