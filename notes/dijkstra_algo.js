//weighted graph

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};



// Dijkstra's Algorithm

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

let { distance, previous } = dijkstras(graph, 'a');

console.log(distance);
console.log(previous);





// Dijkstra's Algorithm with console.logs

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

