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
Python为了防止栈溢出，递归函数默认有一个maximum recursive depth 1000
在计算机中，函数调用是通过栈（stack）这种数据结构实现的，每当进入一个函数调用，栈就会加一层栈帧，每当函数返回，栈就会减一层栈帧。由于栈的大小不是无限的，所以，递归调用的次数过多，会导致栈溢出。
记忆化递归：
cache = {}    # 定义一个字典，用于存储返回值

def fib(n):
    if n in cache:
        return cache[n]
    # 我们需要将返回值存储起来
    if n == 1 or n == 2:
        # 斐波那契数列的第 1 和第 2 项是 1
        value = 1
    elif n > 2:
        value = fib(n - 1) + fib(n - 2)
    cache[n] = value
    return value

Tarjan Algorithm (DFS)   
[critical connections in a network](https://leetcode.com/problems/critical-connections-in-a-network)
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
class Solution:
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

### https://leetcode.com/problems/subsets/
from typing import List
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        def backtrack(i, sub):
	    # If you try the code without use of deepcopy then you would find that every time you change chosen, the res also changes. This is because how python pass parameters and the effect of shallow copy. After appending chosen, res[-1] and chosen reference points to the same memory location. As a result even since you append chosen to res, every time you modify chosen, you also change the element in res.
	    if i == len(nums):
	        res.append(sub[:])
	        return
	    sub.append(nums[i])
	    backtrack(i+1, sub)
	    sub.pop()
	    backtrack(i+1, sub)

	res = []
	backtrack(0, [])
	return res

# solution 2: bit operation
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        allsets = 1 << len(nums)
	res = []
	for s in range(allsets):
	    sub = []
	    for idx in range(len(nums)):
	        n = 1 << idx
		if s & n:
		    sub.append(nums[idx])

	    res.append(sub)
	return res

{% endhighlight %}

# inorder traversal binary tree:
### left, root, right
{% highlight python %}
def inorder(root):
    res = []
    def helper(node):
        if not node:
            return
        helper(node.left)
        res.append(node.val)
        helper(node.right)

    helper(root)
    return res

def inorder(root):
    res = []
    stack = []
    p = root
    while p or stack:
        while p.left:
            stack.append(p.left)
            p = p.left

        p = stack.pop()
        res.append(p.val)
        p = p.right

    return res

{% endhighlight %}
# [flatten binary tree to linked list](https://leetcode.com/problems/flatten-binary-tree-to-linked-list)
If we traverse the flattened tree in the reverse way, we would notice that [6->5->4->3->2->1] is in (right, left, root) order of the original tree. So the reverse order after flattening is post order traversal in (right, left, root) order like [6->5->4->3->2->1].   

The idea is to traverse the original tree in this order by   
```
public void flatten(TreeNode root) {
    if (root == null)
        return;
    flatten(root.right);
    flatten(root.left);
}
```
and then set each node's right pointer as the previous one in [6->5->4->3->2->1], as such the right pointer behaves similar to a link in the flattened tree(though technically, it's still a right child reference from the tree data structure's perspective) and set the left child as null before the end of one recursion by

```
public void flatten(TreeNode root, TreeNode prev) {
    if (root == null)
        return prev;
    flatten(root.right);
    flatten(root.left);
    root.right = prev;
    root.left = null;
    prev = root;
    return prev;
}
```
    1
   / \
  2   5
 / \   \
3   4   6
-----------        
pre = 5
cur = 4

    1
   / 
  2   
 / \   
3   4
     \
      5
       \
        6
-----------        
pre = 4
cur = 3

    1
   / 
  2   
 /   
3 
 \
  4
   \
    5
     \
      6
-----------        
cur = 2
pre = 3

    1
   / 
  2   
   \
    3 
     \
      4
       \
        5
         \
          6
-----------        
cur = 1
pre = 2

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
