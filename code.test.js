/*
DISCLAIMER: I worked with Howard Shaw on this assignment.
Please see the README.md file for more information...
*/

// We copied a graph from here because I didn't want to come up with a larger one myself:
// https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/
// Only used this link for my 'test1' graph, not for any actual code.

const fs = require('fs');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

const test1 = [ 
    [ 0, 4, 0, 0, 0, 0, 0, 8, 0],
    [ 4, 0, 8, 0, 0, 0, 0, 11, 0],
    [ 0, 8, 0, 7, 0, 4, 0, 0, 2],
    [ 0, 0, 7, 0, 9, 14, 0, 0, 0],
    [ 0, 0, 0, 9, 0, 10, 0, 0, 0],
    [ 0, 0, 4, 14, 10, 0, 2, 0, 0],
    [ 0, 0, 0, 0, 0, 2, 0, 1, 6],
    [ 8, 11, 0, 0, 0, 0, 1, 0, 7],
    [ 0, 0, 2, 0, 0, 0, 6, 7, 0] 
]
assert(JSON.stringify(dijkstra(test1, 0)) === JSON.stringify([0, 4, 12, 19, 21, 11, 9,  8, 14]))

const test2 = [
    [0, 2, 4, 8, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 1],
    [0, 0, 0, 0, 5, 6, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]
assert(JSON.stringify(dijkstra(test2, 0)) === JSON.stringify([0, 2, 4, 8, 5, 10, 3]))

const test3 = [
    [0, 1, 2, 0, 0], 
    [0, 0, 0, 4, 0],
    [0, 0, 0, 8, 3],
    [0, 0, 0, 0, 1], 
    [0, 0, 0, 0, 0]
]
assert(JSON.stringify(dijkstra(test3, 0)) === JSON.stringify([0, 1, 2, 5, 5]))

const test4 = [
    [0, 2, 4, 0], 
    [0, 0, 1, 7],
    [0, 0, 0, 1],
    [0, 0, 0, 0]
]
assert(JSON.stringify(dijkstra(test4, 0)) === JSON.stringify([0, 2, 3, 4]))

const test5 = []
assert(JSON.stringify(dijkstra(test5, 0)) === JSON.stringify([]))