class TreeNode {
    constructor(val, left, right){
        this.val = (val === undefined ? null : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

module.exports = {
    TreeNode
};