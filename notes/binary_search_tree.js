// inOrderPrint would properly sort

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


//naive approach, because of the chance that 
//the tree becomes a linked list

class BST {
    constructor() {
        this.root = null;
    }

    insert(val, root=this.root) {
        if(!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right);
            }
        }
    }

    search(val, root=this.root){
        if (!root) return false;
        // if (root.val === val) return true;

        if (val < root.val){
            return this.search(val, root.left)
        } else if (val > root.val){
            return this.search(val, root.right)
        } else {
            return true
        }
    }
    
}

let tree1 = new BST();
tree1.insert(10);
tree1.insert(5);
tree1.insert(16);
tree1.insert(1);
tree1.insert(7);
tree1.insert(16);

let tree2 = new BST();
tree2.insert(1);
tree2.insert(5);
tree2.insert(7);
tree2.insert(10);
tree2.insert(16);
tree2.insert(16);

// console.log(tree1) = objrect
//tree1.root = object 
//tree1.root.val = integer

// console.log(tree1.search(5))
// console.log(tree1.search(122))