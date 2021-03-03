function breadthFirstArray(root) {
    let queue = [root];
    let solution = []
    while (queue.length) {
        let node = queue.shift()
        solution.push(node.val);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right)
    }
    return solution
}

module.exports = {
    breadthFirstArray
};