class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [b, c, e];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];


let matrix = [
/*          A       B       C       D       E       F   */
/*A*/    [true,  true,   true,   false,  true,   false],
/*B*/    [false, true,   false,  false,  false,  false],
/*C*/    [false, true,   true,   true,   false,  false],
/*D*/    [false, false,  false,  true,   false,  false],
/*E*/    [true,  false,  false,  false,  true,   false],
/*F*/    [false, false,  false,  false,  true,   true]
];


//adjacency list
let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
};


//start with F becuase it can access all

// DFS - use set for constant time lookup

function depthFirstRecur(node, visited=new Set()) {
    if (visited.has(node.val)) return;

    console.log(node.val);
    visited.add(node.val);

    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited);
    });
}

// depthFirstRecur(f);

function depthFirstIter(node) {
    let visited = new Set();
    let stack = [ node ];

    while (stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if (visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored 
        stack.push(...node.neighbors);
    }
}

// depthFirstIter(f);
// f
// e
// a
// b
// c
// d


graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
};


function graphDepthFirstRecur(node, graph, visited=new Set()) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        graphDepthFirstRecur(neighbor, graph, visited);
    });
}

// graphDepthFirstRecur('f', graph);



//helper functions that iterates through the keys of the graph, so every node will be visited
function _graphDepthFirst(graph) {
    let visited = new Set();

    for (let node in graph) {
        _graphDepthFirstRecur(node, graph, visited);
    }
}

function _graphDepthFirstRecur(node, graph, visited) {
    if (visited.has(node)) return;

    console.log(node);
    visited.add(node);

    graph[node].forEach(neighbor => {
        _graphDepthFirstRecur(neighbor, graph, visited);
    });
}

// _graphDepthFirst(graph);











//weighted graph
graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};


// Dijkstra's Algorithm

// function dijkstras(graph, source) {
//     let distance = {};
//     for (let node in graph) {
//         distance[node] = Infinity;
//     }
//     distance[source] = 0;

//     let unvisited = new Set(Object.keys(graph));
//     let previous = {};
//     // console.log("")
//     // console.log("")
//     // console.log("distance:", distance)
//     // console.log("unvisited:", unvisited)
//     // console.log("previous:", previous)
    

//     while (unvisited.size > 0) {
//         let currNode = minDistanceNode(unvisited, distance);
//         unvisited.delete(currNode);
//         // console.log("")
//         // console.log("")
//         // console.log("currNode:", currNode)

//         for (let neighbor in graph[currNode]) {
//             let distanceFromCurrToNeighbor = graph[currNode][neighbor];
//             let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;
//                 // console.log("neighbor:", neighbor)
//             if (distance[neighbor] > totalNeighborDistance) {
//                 distance[neighbor] = totalNeighborDistance;
//                 previous[neighbor] = currNode;
//             }
//                 // console.log("distance:", distance)
//                 // console.log("unvisited:", unvisited)
//                 // console.log("previous:", previous)
                
//         }
//     }

//     return { distance, previous };
// }

// function minDistanceNode(nodes, distance) {
//     // console.log("helper nodes:", nodes)
//     // console.log("helper distance:", distance)
//     return Array.from(nodes).reduce((minNode, node) => (
//         distance[node] < distance[minNode] ? node : minNode
//     ));
//  }


// let { distance, previous } = dijkstras(graph, 'a');

// // console.log("")
// // console.log("")
// // console.log("answer")
// console.log(distance);
// console.log(previous);

//dijkstras algorithm without console logs

function dijkstras(graph, source) {
    let distance = {};
    for (let node in graph) {
        distance[node] = Infinity;
    }
    distance[source] = 0;

    let unvisited = new Set(Object.keys(graph));
    let previous = {};

    while (unvisited.size > 0) {
        let currNode = minDistanceNode(unvisited, distance);
        unvisited.delete(currNode);

        for (let neighbor in graph[currNode]) {
            let distanceFromCurrToNeighbor = graph[currNode][neighbor];
            let totalNeighborDistance = distance[currNode] + distanceFromCurrToNeighbor;

            if (distance[neighbor] > totalNeighborDistance) {
                distance[neighbor] = totalNeighborDistance;
                previous[neighbor] = currNode;
            }
        }
    }

    return { distance, previous };
}

function minDistanceNode(nodes, distance) {
    return Array.from(nodes).reduce((minNode, node) => (
        distance[node] < distance[minNode] ? node : minNode
    ));
 }

// let { distance, previous } = dijkstras(graph, 'a');

// console.log(distance);
// console.log(previous);