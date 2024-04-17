/*
DISCLAIMER: I worked with Howard Shaw on this assignment.
Please see the README.md file for more information...
*/

function dijkstra(graph, sourceNode) {

    let path = []
    let visited = []
    let runningNode

    for (let index = 0; index < graph.length; index++) {
        if (index == sourceNode) {
            path[index] = 0;
        } else {
            path[index] = Infinity;
        }
    }

    while (visited.length != graph.length) {

        let runningPath = Infinity

        for (let index = 0; index < graph.length; index++) {
            if ((path[index] < runningPath) && (!visited.includes(index))) {
                runningPath = path[index]
                runningNode = index
            }
        }

        visited.push(runningNode)

        for (let index = 0; index < graph.length; index++) {
            if (graph[runningNode][index] > 0) {

                let nextPath = Math.min(path[index], path[runningNode] + graph[runningNode][index])

                if (nextPath != 0 && index != runningNode) { 
                    path[index] = nextPath 
                }
            }
        }
    }

    return path;
}