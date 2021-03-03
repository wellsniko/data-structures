function treeSum(root) {
    let sum = 0
    if (!root) return sum

    const queue = [root]

    while (queue.length){
        let node = queue.shift()

        sum += node.val

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    
    return sum
}


module.exports = {
    treeSum
};