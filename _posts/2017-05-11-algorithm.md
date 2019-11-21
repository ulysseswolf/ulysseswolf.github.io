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
        for v in connections:
            graph[v[0]].append(v[1])
            graph[v[1]].append(v[0])
            
        dfn = [None for i in range(n)]
        low = [None for i in range(n)]
        
        res = []
        self.cur = 0
       
        def dfs(node,parent):
            if dfn[node] is None:
                dfn[node] = self.cur
                low[node] = self.cur
                self.cur+=1
                for n in graph[node]:
                    if dfn[n] is None:
                        dfs(n,node)
                    
                if parent is not None:
                    l = min([low[i] for i in graph[node] if i!=parent]+[low[node]])
                else:
                    l = min(low[i] for i in graph[node]+[low[node]])
                low[node] = l
                
        dfs(0,None)
        
        for v in connections:
            if low[v[0]]>dfn[v[1]] or low[v[1]]>dfn[v[0]]:
                res.append(v)
        return res
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




