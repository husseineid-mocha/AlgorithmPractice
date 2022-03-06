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