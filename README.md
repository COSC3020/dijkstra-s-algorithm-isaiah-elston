# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js` and test your new function.

I have not provided any test code, but you can base yours on test code from other exercises. Your tests must check the correctness of the result of running the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your answer, including your reasoning, to this markdown file.

## Disclaimer

Since Dr. Kotthoff specified that we are allowed to work together on some exercises and still receive credit, I opted to work with [Howard Shaw](https://github.com/howardthegr8one) on this Dijkstra's Algorithm exercise. We pair-programmed the code, testing code, and then composed the runtime analysis together. 

### Answer

#### TL;DR
`dijkstra` $\in \mathrm{\Theta}(\vert V^{2} \rvert)$

#### Reasoning

Our implementation of Dijkstra's algorithm only has three distinct *non-constant* components within it. The first is the initialization of the `path` array, which is the first `for` loop in the function. The `for` loop will **always** iterate from $0$ to the length of the `graph` array, which is iterating through the *entire* input graph exactly once. 

Since we are using adjacency *matrices*, we know that time it takes to iterate through any arbitrary graph is proportional to the number of *vertices* the graph contains. Therefore, we know that the time complexity of the first `for` loop in the function has a time complexity of $\vert V \rvert$.

Next, we have the `while` loop with the latter two `for` loops nested inside it. The `while` loop works very similarly to the first `for` loop we analyzed above. The `visited` array is initialized to be empty (`[]`) and is iteratively populated with the vertices after they have been visited by the algorithm. Thus, the `while` loop will also effectively begin at $0$ and then iterate through the entire graph before `visited.length != graph.length` could possibly evaluate to `true`. It follows naturally that the time complexity of doing so is $\vert V \rvert$ by the same reasoning as above.

However, there are two other `for` loops nested in the `while` loop that we now must consider. Since all of the operations inside of each `for` loop are constant time operations, I will save the reader some time and point out that each of the `for` loops have **identical** conditions for termination as the first `for` loop we discussed earlier. Therefore, the time complexity of each of these `for` loops is also $\vert V \rvert$. 

Finally, we may translate all of that into mathematical notation. Suppose that $\mathrm{T}$ represents the time function of our `dijkstra` implementation, and that $\lvert V \rvert$ represents the arbitrary number of vertices for the input `graph`:

$$\begin{gather*}
& \mathrm{T}  = \lvert V \rvert + (\lvert V \rvert *  \lvert V \rvert) \\
\implies & \mathrm{T} = \lvert V \rvert + \lvert V^{2} \rvert \\
\therefore & \mathrm{T} \in \mathrm{\Theta}(\lvert V^{2} \rvert) \\
&& \blacksquare
\end{gather*}
$$