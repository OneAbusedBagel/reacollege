// -----------------------------------------------------------------------------
const graph =
// -----------------------------------------------------------------------------
{
  A: ['B', 'D'],
  B: ['A', 'C', 'E'],
  C: ['B'],
  D: ['A', 'E'],
  E: ['B', 'D', 'F'],
  F: ['E']
};



// -----------------------------------------------------------------------------
function bfs(graph, start)
// -----------------------------------------------------------------------------
{
  const queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length)
  {
    const vertex = queue.shift();

    if (!visited.has(vertex))
    {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex])
      {
        queue.push(neighbor);
      }
    }
  }
  return result;
}



// -----------------------------------------------------------------------------
function dfs(graph, start)
// -----------------------------------------------------------------------------
{
  const stack = [start];
  const visited = new Set();
  const result = [];

  while (stack.length)
  {
    const vertex = stack.pop();

    if (!visited.has(vertex))
    {
      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of graph[vertex])
      {
        stack.push(neighbor);
      }
    }
  }
  return result;
}


// -----------------------------------------------------------------------------
//
// Main
//
// -----------------------------------------------------------------------------
printnl('Examples of Breadth-First Search and Depth-First Search.');
printnl('');

printnl('Source: https://hackernoon.com/a-beginners-guide-to-bfs-and-dfs-in-javascript');
printnl('');



printnl('The graph:');
printnl('&nbsp;&nbsp;A&nbsp;--&nbsp;B&nbsp;--&nbsp;C');
printnl('&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;|');
printnl('&nbsp;&nbsp;D&nbsp;--&nbsp;E&nbsp;--&nbsp;F');
printnl('');



const bfsResult = bfs(graph, 'A'); // ['A', 'B', 'D', 'C', 'E', 'F']
printnl('Breadth-First-Search Result = ' + bfsResult);

const dfsResult = dfs(graph, 'A'); // ['A', 'D', 'E', 'F', 'B', 'C']
printnl('Depth-First-Search Result = ' + dfsResult);
