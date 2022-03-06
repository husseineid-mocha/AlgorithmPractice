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
