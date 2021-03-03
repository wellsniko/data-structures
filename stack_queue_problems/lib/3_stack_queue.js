// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val){
        this.value = val
        this.next = null
    }

}

class Stack {
    constructor(){
        this.length = 0
        this.top = null
        this.bottom = null
    }

    push(newNode){
        // const newNode = new Node(val)

        if (!this.top){
            this.top = newNode
            this.bottom = newNode
        } else {
            const temp = this.top
            this.top = newNode
            this.top.next = temp
        }
        this.length += 1
        return this.length
    }

    pop(){
        if (!this.top) return null

        const temp = this.top
        if (this.top === this.bottom){
            this.top = null
            this.bottom = null
        } else {
            this.top = this.top.next

        }

        this.length -= 1
        return temp
    }

    size(){
        return this.length
    }

}

class StackQueue {
    constructor(){
        this.inStack = new Stack()
        this.outStack = new Stack()
        this.front = null
        this.back = null 
    }

    enqueue(val){
        const newNode = new Node(val)

        if (!this.front){
            this.front = newNode
            this.back = newNode
        } else {
            this.back.next = newNode
            this.back = newNode
        }

        this.inStack.push(new Node(val))
        return this.size()
    }

    size(){
        return this.inStack.size() + this.outStack.size()
    }

    dequeue(){
        if (!this.front) {
            return null
        } else if (this.size() === 1){
            this.front = null 
            this.back = null
        } else {
            this.front = this.front.next
        }

        if (this.outStack.size() === 0){
            while (this.inStack.size() > 0){
                this.outStack.push(this.inStack.pop())
            }
        }

        return this.outStack.pop()
        
    }



};

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
