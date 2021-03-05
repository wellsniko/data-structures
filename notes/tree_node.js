class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// console.log(a) ==>

// TreeNode {
//   val: 'a',
//   left:
//    TreeNode {
//      val: 'b',
//      left: TreeNode { val: 'd', left: null, right: null },
//      right: TreeNode { val: 'e', left: null, right: null } },
//   right:
//    TreeNode {
//      val: 'c',
//      left: null,
//      right: TreeNode { val: 'f', left: null, right: null } } }

//


//* order: left, self, right 
//* would work for sorting binary search trees
function inOrderPrint(root){
    if (!root) return;

    inOrderPrint(root.left);
    console.log(root.val)
    inOrderPrint(root.right)
}
// inOrderPrint(a)
// d
// b
// e
// a
// c
// f


//* order: left, right, root
function postOrderPrint(root) {
    if (!root) return;

    postOrderPrint(root.left);
    postOrderPrint(root.right);
    console.log(root.val);
}
// children printed before parent
// postOrderPrint(a)
// d
// e
// b
// f
// c
// a



//!
////* Depth First (DF)
////* order: self, left, right
////* DF use stack (LIFO)

function depthFirst(root){
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        console.log(node.val)
        if (node.right) stack.push (node.right)
        if (node.left) stack.push(node.left)
    }
}

function depthFirstRecur(root) {
    if (!root) return;
    
    console.log(root.val);
    depthFirstRecur(root.left);
    depthFirstRecur(root.right);
}

function preOrderPrint(root) {
    if (!root) return;

    console.log(root.val);
    preOrderPrint(root.left)
    preOrderPrint(root.right)
}

//node must be printed before its children
//left printed before right
// a
// b
// d
// e
// c
// f




//!
////* Breadth First (BF)
////* order: self, all children, all grandchildren
////* uses queue (FIFO)

function breadthFirst(root) {
    let queue = [root];
    while (queue.length) {
        let node = queue.shift()

        console.log(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right)
    }
}

// breadthFirst(a)
// a
// b
// c
// d
// e
// f
