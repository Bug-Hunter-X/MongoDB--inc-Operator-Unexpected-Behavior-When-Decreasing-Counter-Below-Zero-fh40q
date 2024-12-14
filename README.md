# MongoDB $inc Operator Unexpected Behavior When Decreasing Counter Below Zero

This repository demonstrates an uncommon error related to the MongoDB `$inc` operator when using it to decrement a counter below zero.  The issue arises when a negative value is inadvertently assigned to a counter, which can cause unexpected and incorrect data. The solution will present a robust approach to ensure safe decrementing of counters while preventing negative values.

## Problem
The original code uses `$inc` directly to decrement a counter without any checks.  If the counter is already zero, the result is a negative value. 

## Solution
The solution uses a combination of `$inc` and a conditional update (`$inc` only when it stays non-negative) to address the problem, preventing negative counter values. 

## How to Reproduce the bug
1.  Create a MongoDB collection with a counter field.
2.  Execute the code in the `bug.js` file. 
3.  Observe the negative counter value. 

## How to run the solution
1. Execute the code in `bugSolution.js`