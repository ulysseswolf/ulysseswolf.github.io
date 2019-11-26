---
layout: post
title: "algorithm"
description: "algorithm"
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
Tarjan Algorithm (DFS)   
https://leetcode.com/problems/critical-connections-in-a-network   
In tarjan algorithm, we keep two arrays DFN and LOW in DFS procedure. DFN array records the order of DFS for each node while LOW array records the lowest order of each node's neighbor except its direct parent. Initially, LOW[i] equals to DFN[i].
After DFS, we find edge(u,v) where DFN(u)<LOW(v) and get the final answers.   
```
from collections import defaultdict
from typing import List
class Solution:
    def criticalConnections(self, n: int, connections: List[List[int]]) -> List[List[int]]:
        graph = defaultdict(list)
	for u, v in connections:
            g[u].append(v)
            g[v].append(u)
            
        N = len(connections)
        dfn = [None] * N
        low = [None] * N
        
        def dfs(node, parent, level):
            # already visited
            if dfn[node] is not None:
                return 
            
            dfn[node] = low[node] = level
            for neighbor in g[node]:
                if not dfn[neighbor]:
                    dfs(neighbor, node, level + 1)
            
            # minimal level in the neignbors, exclude the parent
            cur = min([level] + [low[neighbor] for neighbor in g[node] if neighbor != parent])    
            low[node] = cur
        
        dfs(0, None, 0)
        
        ans = []
        for u, v in connections:
            if low[u] > dfn[v] or low[v] > dfn[u]:
                ans.append([u, v])
        return ans
```

backtrack   
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

{% highlight python %}
class Solution(object):
    def generateParenthesis(self, N):
        ans = []
        def backtrack(S = '', left = 0, right = 0):
            if len(S) == 2 * N:
                ans.append(S)
                return
            if left < N:
                backtrack(S+'(', left+1, right)
            if right < left:
                backtrack(S+')', left, right+1)

        backtrack()
        return ans
{% endhighlight %}




