// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return 
    const root = preorder.shift()
    const inIndex = inorder.indexOf(root)

    let leftPre = []
    let leftIn = []

    inorder.splice(inIndex, 1)
    let i = 0
    while (i < inIndex ){
        leftPre.push(preorder.shift())
        leftIn.push(inorder.shift())
        i+=1
    }

    return new TreeNode(
        root,
        buildTree(leftPre, leftIn),
        buildTree(preorder, inorder)
    )
}
