

// // function Node(value) {
// //   this.value = value;
// // }

// class Node {
//     constructor(value) {
//       this.value = value;
//       this.next = null;
//     }
//   }
  
//   class List {
//     constructor() {
//       this.head = null;
  
//       this.addBack = function () { };
//     }
//   }
  
//   /**Add Front
//   Rudy isn’t nice: he cuts in line in front of everyone else. Given a pointer to 
//   the first ListNode and a value, create a new node, assign it to the list head, 
//   and return a pointer to the new head node. */
  
//     // addFront(value) {
//     //   const node = new Node(value);
  
//     //   node.next = this.head;
  
//     //   this.head = node;
  
//     //   return this;
//     // }
  
//   /**Remove Front
//   Ha! Rudy is getting what he deserves – kicked out of line. Given a pointer to the 
//   first node in a list, remove the head node and return the new list head node. 
//   If the list is empty, return null. */
  
  
// //     removeFront() {
// //       const node = this.head;
  
// //       if (node) {
// //         this.head = node.next;
// //       }
      
// //       return this;
// //     }
// //   }
  
  
//   /**Front
//   Finally, Tad and Sam reach the front of the line to get movie tickets. Oh no – only one
//   seat remains! Who was earlier in line: Tad or Sam? Return the value (not the node) at the
//   head of the list. If the list is empty, return null. */
  
  
// //     front() {
// //       return this.head ? this.head.value : null;
// //       if (this.head) {
// //         return this.head.value;
// //       } else {
// //         return null;
// //       }
// //     }
// //   }
  
  
//   // function removeFront(head) {


//   isEmpty() {
//     return this.head === null ? true : false;
//   }

//   /**Contains
// Sam thinks Tad might be somewhere in a very long line waiting to attend the Superman movie.
//  Given a ListNode pointer and a val, return whether val is found in any node in the list. */
  
//   contains(value) {
//     if (this.isEmpty()) {
//       return false;
//     }

//     let runner = this.head;

//     while (runner) {
//       if (runner.value === value)
//         return true;
//     }
//     console.log('in while loop node has value', runner);
//     runner = runner.next;
//   }
//     return false;

//   // 
  
//   removeFront(list.head)
  
//   const list = new List();
  
//   const node = new Node(7);
//   // const node1 = new Node(11);
  
//   // node.next = node1;
  
//   // list.head = node;
// list.addFront(11).addFront(9).addFront(15).addFront(99);
  
//     // console.log('before', list);
//     // list.removeFront();
  

// list.contains(2345)
// //   console.log('after', list.front());