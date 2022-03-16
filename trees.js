// trees have nodes
// lists are linear but trees are nonlinear
// nodes can ONLY point to a child
// graphs have nodes that point to other nodes
// having ONE root also makes it a tree, cant have two
// edge is the line connecting them
// leaf has 0 children

// tree order
// in order
//      left, self(node), right
// pre order
//      self(node), left, right
// post order
//      left, right, self(node)

/*
function inOrderPrint(root) {
    if (!root) return;

    inOrderPrint(root.left);
    console.log(root.val);
    inOrderPrint(root.right);
}

function preOrderPrint(root) {
    if (!root) return;

    console.log(root.val);
    preOrderPrint(root.left);
    preOrderPrint(root.right);
}

function postOrderPrint(root) {
    if (!root) return;

    postOrderPrint(root.left);
    postOrderPrint(root.right);
    console.log(root.val);
}

*/

//* leetcode 105
function buildTree(preorder, inorder) {
    if (preorder.length === 0 && inorder.length === 0) return null;     // base case

    let rootVal = preorder[0]
    let root = new TreeNode(rootVal)

    let midIdx = inorder.indexOf(rootVal)
    let leftInorder = inorder.slice(0, midIdx)
    let rightInorder = inorder.slice(midIdx + 1)

    let leftPreorder = preorder.filter(val => leftInorder.includes(val))
    let rightPreorder = preofer.filter(val => rightInorder.includes(val))

    let leftTree = buildTree(leftPreorder, leftInorder);
    let rightTree = buildTree(rightPreorder, rightInorder)

    root.left = leftTree
    root.right = rightTree
}

// binary search trees are sorted and only have 0, 1, or 2 children
// every item to the left is less than the root or node
// every item to the right is greater than the root or node

// iterative depth first search
// depth first wants to go deep, not wide
// 



class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    // insert(value) {
    //     let newNode = new Node(value)
    //     let root = this.root

    //     if(!this.root) {
    //         this.root = newNode
    //         return
    //     }

    //     if (value < root.val) {
    //         if (!root.left) {
    //             root.left = newNode
    //         } else {
    //             this.insert(val)
    //         }
    //     } else {
    //         if (!root.right) {
    //             root.right = newNode
    //         } else {
    //             this.insert(val)
    //         }
    //     }
    // }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    // find(value){
    //     if (this.root === null) return false
    //     let current = this.root
    //     let found = false
    //     while(current && !found){
    //         if (value < current.value) {
    //             current = current.left
    //         } else if (value > current.value) {
    //             current = current.right
    //         } else {
    //             found = true
    //         }
    //     }
    //     if(!found) return undefined;
    //     return current;
    // }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
}


//      10
//   5     13
// 2  7  11  16

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

