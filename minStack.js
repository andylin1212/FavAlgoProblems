/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
*/


//Solution 1: storing a stack of objects

class MinStack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push({
      val: val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    })
  }

  pop() {
  }

  top() {

  }

  getMin(){

  }
}
//Solution 2: using two stacks

class MinStack {
  constructor() {
    this.stack = [];
    this.minVal = [];
  }

  push(val) {
    this.stack.push(val)
    if (this.minVal.length === 0 || val <= this.minVal[this.minVal.length - 1]) {
      this.minVal.push(val)
    }
  }

  pop() {
    const valToPop = this.stack

    if (this.minVal[this.minVal.length - 1] === valToPop) {
      this.minVal.pop();
    }

    return valToPop
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin(){
    return this.minVal[this.minVal.length - 1]
  }
}