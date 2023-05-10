'''
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.
'''

#Main concept: there is a local minimum at every element

#Solution:
#O(1) time for every operation

class MinStack:
    def __init__(self):
        self.stack = []
        self.minStack = []

    def push(self, val:int) -> None:
        self.stack.append(val)
        val = min(val, self.minStack[-1] if self.minStack else val) #find minValue at each element and add it to minstack
        self.minStack.append(val)

    def pop(self) -> None:
        #pop the local minimum and stack value from both stacks
        self.minStack.pop()
        return self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]