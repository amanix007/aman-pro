###### Resource list

* [Big O Notation in JavaScript | The Ultimate Beginners Guide with Examples](https://www.doabledanny.com/big-o-notation-in-javascript)
* [Learn Big O Notation In 12 Minutes - Web Dev Simplified](https://www.youtube.com/watch?v=itn09C2ZB9Y)
* [Must-Know JavaScript Algorithms for Beginners || Big O Notation](https://www.youtube.com/watch?v=lWldunWaLPs)
* [Big-O Algorithm Complexity Cheat Sheet](https://www.bigocheatsheet.com/)
* [Big O Notation Cheat Sheet](https://flexiple.com/algorithms/big-o-notation-cheat-sheet/)
* [Big O Notation Algorithm Complexity Cheat Sheet](https://hackr.io/blog/big-o-notation-cheat-sheet)
* [Big O Cheat Sheet – Time Complexity Chart](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
* [Google Search: big o notation examples js](shorturl.at/luO09)

# Big O Notation

### Ex-1: **Constant time complexity: Big O(1)**

Here is a simple function called timesTwo:

```javascript
Big O(1)
function timesTwo(num) {
  return 2 * num;
}
let result = timesTwo(5); // 10
let result2 = timesTwo(2000); // 4000
```

It takes a whole number as an argument, and then just returns 2 times that number. So, if we pass in 5, then it will return 2 times 5, which is 10. And if we pass in 2000, then it will return 2 times 2000, which is 4000.

Now, which of these do you think will take the longest to compute? 2 \* 5 or 2 \* 2000? You wouldn’t have been stupid to have guessed 2 \* 2000 takes longer than 2 \* 5, but you’d be wrong!

In JavaScript, both take the same time. It’s just one operation (one multiplication). 20 \* 2 billion takes as long as 2 \* 3.

No matter what number we input into this function, it takes the same amount of time to compute. The algorithm is said to have a Big O(1) – pronounced “Big O of 1” - which is known as <strong>constant time complexity</strong>; no matter the size of the input, the function takes the same amount of time to compute.

<br>
But say we had a function with two operations, like the one below, where we input a number, multiply it by 4, save it to a variable called `total`, and return `total` times 3. So, all together, we have two multiplications in this function.

```javascript
function manyTimes(num) {
  let total = 4 * num;
  return total * 3;
}
```

Now, we wouldn’t say this function has a Big O of 2, it’d still just be a Big O of 1 because we’re looking at the big picture (1 operation isn’t gonna take significantly longer than 2 for a computer so we can just ignore it). No matter what we put in, the number of operations won’t increase in the function, it’s constant time.

## What is space complexity and time complexity?

Before we go through another example, let’s get some definitions down:
**“Time complexity”: analysing how the runtime of an algorithm changes as the input increases.**

The algorithms we went through above had constant Big O time complexity because the runtime of the algorithms did not increase as the input size increased.

**“Space complexity” (aka auxiliary space complexity): The space required by the algorithm, not including inputs.**