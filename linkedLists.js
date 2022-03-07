// Linked list
/*
- list or ordered data
- data structure that contains a head, tail, and length property
- Linked lists consist of nodes, and each node has a value and a pointer to another node or null
- no indices
*/

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         let node = new Node(val)
//         if(!this.head){
//             this.head = node
//             this.tail = this.head
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }
//     pop(){
//         if (!this.head) return undefined
//         let current = this.head
//         while(current.next){
//             if (current.next.next === null){
//                 current.next = null
//             }
//             current = current.next
//         }
//         this.length--
//     }
// }







// node is a container for some data
// the first node is the head
// the last node is the tail
// if the tail.next is null, that's how you know it's the tail
// an array is stored contiguously is memory, while a linked list is not
// if you want to insert something into the middle of an array you need to shift everything over
//               this can cost o(n) space
// in a linkedlist you dont need to shift everything over, you just need to adjust the pointers


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')

a.next = b;
b.next = c;
c.next = d;

///     A => B => C => D => null


// const printLinkedList = head => {
//     let current = head;
//     while (current !== null) {
//         console.log(current.val)
//         current = current.next
//     }
// }

//recursively
// const printLinkedList = head => {
//     if (head === null) return
//     console.log(head.val);
//     printLinkedList(head.next);
// }

// console.log(printLinkedList(a))

//
//Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// const linkedListValues = (head) => {
//     let result = []
//     let current = head;
//     while (current !== null) {
//       result.push(current.val)
//       current = current.next
//     }
//     return result
//   };
  

/* 
Write a function, sumList, that takes in the head of a linked list containing numbers as an argument. The function should return the total sum of all values in the linked list.

const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val
    current = current.next
  }
  return sum
};

*/


/* 
Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.
const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true
    current = current.next
  }
  return false
};

*/

/* 
Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

If there is no node at the given index, then return null.

const getNodeValue = (head, index) => {
  let count = 0
  let current = head;
  while (current !== null) {
    if (index === count) return current.val
    count++
    current = current.next
  }
  return null
};


*/

/* 
Write a function, reverseList, that takes in the head of a linked list as an argument. The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

const reverseList = (head) => {
  let current = head;
  let previous = null;
  while (current !== null) {
    let next = current.next
    current.next = previous
    previous = current
    current = next
  }
  return previous

};

FOR THIS PROBLEM WE NEED TO HAVE A PREVIOUS SO WE CAN POINT THE CURRENT TO THE PREVIOUS
WE ALSO NEED TO HAVE A NEXT BECAUSE WHEN WE MAKE CURRENT.NEXT = PREVIOUS WE ARE SEVERING THE TIE WITH THE NEXT NODE
AND WE NEED THAT TO BE KEPT SOMEWHERE


*/


/* 
Write a function, zipperLists, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty.

const zipperLists = (head1, head2) => {
  const head = head1;
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0
  
  while(current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
    count++
  }
  
  if(current1 !== null) tail.next = current1;
  if(current2 !== null) tail.next = current2;
  
  return head;
};

*/


/* 
Write a function, mergeLists, that takes in the head of two sorted linked lists as arguments. The function should merge the two lists together into single sorted linked list. The function should return the head of the merged linked list.

Do this in-place, by mutating the original Nodes.

You may assume that both input lists are non-empty and contain increasing sorted numbers.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  let dummyHead = new Node()
  let tail = dummyHead
  let current1 = head1
  let current2 = head2
  
  while(current1 !== null && current2 !== null) {
    if (current1.val > current2.val) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
  }
  
  if(current1 !== null) tail.next = current1
  if(current2 !== null) tail.next = current2
  
  return dummyHead.next
};

*/


/*
Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

const isUnivalueList = (head) => {
  let current = head;
  
  while (current !== null) {
  if (current.val !== head.val) return false
    current = current.next
  }
  return true
};


*/


//! REMOVE NODE
/*
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next
  
  let current = head;
  let previous = null;
  
  while (current !== null) {
    if (current.val === targetVal) {
      previous.next = current.next
      break // we only want the first time it happens
    }
    previous = current
    current = current.next
  }
  
  return head
};
*/

//! INSERT NODE
/*
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  let newNode = new Node(value)
  
  let count = 0
  let current = head
  
  if (index === 0) {
    newNode.next = head
    return newNode
  }
  
  while(current !== null) {
    let next = current.next
    if (count === index - 1) {
      current.next = newNode
      newNode.next = next
    }
    current = current.next
    count++
  }
  
  return head
};

*/


//! create linked list from array of values
/*
const createLinkedList = (values) => {
  let dummyHead = new Node(null)
  let tail = dummyHead
  
  for (let ele of values) {
    tail.next = new Node(ele)
    tail = tail.next
  }
  
  return dummyHead.next
};

*/