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

  //O(1) time | O(1) space
  push(val) {
    //push to stack object, storing new value and minimum so far
    this.stack.push({
      val: val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    })
  }

  //O(1) time | O(1) space
  pop() {
    this.stack.pop();
  }

  //O(1) time | O(1) space
  top() {
    //return .val of last element in stack
    return this.stack[this.stack.length - 1].val
  }

  //O(1) time | O(1) space
  getMin(){
    //return .val of last element in stack
    return this.stack[this.stack.length - 1].min
  }
}
//Solution 2: using two stacks

class MinStack {
  constructor() {
    this.stack = [];
    this.minVal = [];
  }

  //O(1) time | O(1) space
  push(val) {
    //push to main stack
    this.stack.push(val)

    //if first item or value less than or equal to last item in minVal, push to minVal
    if (this.minVal.length === 0 || val <= this.minVal[this.minVal.length - 1]) {
      this.minVal.push(val)
    }
  }

  //O(1) time | O(1) space
  pop() {
    //remove last item from main stack
    const valToPop = this.stack.pop()

    //if value removed is current min, remove from min stack
    if (this.minVal[this.minVal.length - 1] === valToPop) {
      this.minVal.pop();
    }

    //return popped valu
    return valToPop
  }

  //O(1) time | O(1) space
  top() {
    //return last val in main stack
    return this.stack[this.stack.length - 1]
  }

  //O(1) time | O(1) space
  getMin(){
    //return last value in minimum value stack
    return this.minVal[this.minVal.length - 1]
  }
}