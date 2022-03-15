// stack is a collection of data
// LIFO
// LAST IN FIRST OUT
// a collection of books
// a bunch of plates

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop(){
        if(!this.first) return null;
        var temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }

    pop() {
        if (!this.first) {
            return null
        }
        if (this.size === 1) {
            this.first = null
            this.last = null
        }
        let temp = this.first
        this.first = temp.next
        this.size--
        return temp.value
    }
}

/* this is not similar to the push and pop for linked list in that the pop has linear time
since it removes from the end of the list, has to iterate through it, this pop is dealing with the first item, 
it's constant time */

//? Insertion and removal are both O(1) time


//! Queue
// queue is a FIFO, first in first out

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(value) {
        let node = new Node(value)
        if (!this.head) {
            this.first = node
            this.last = node
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.head) return null
        if (this.size === 1) {
            this.first = null
            this.last = null
        }
        let temp = this.first
        this.first = this.first.next
        this.size--
        return temp.value
    }
}
