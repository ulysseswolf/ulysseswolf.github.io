---
layout: post
title: "The n-th ugly numer"
description: ""
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
https://leetcode.com/problems/ugly-number-ii   
Let's say we have the first 3 ugly numbers 1, 2, 3. What would be the next number? Given the definition, the next number has to be the the smallest number among 2*(1,2,3), 3*(1,2,3), 5*(1,2,3). Obviously, the smallest number is 2 * 1 = 2. But wait, 2 is already in there. So precisely speaking, the next number has to be the the smallest number among all the existing numbers multiplied by 2, 3,5 that isn't in the list already. Now, we can traverse all numbers and maintain a hashset if we want, but it would become O(N^2). Good news is that we can solve this in a DP-like approach. First, we assume there is only one number in the list, which is 1. The next number is Min(2 * 1, 3 * 1, 5 * 1)=2 and it is not in the list. Because we have already considered 2*1 (we move the pointer to its next position, which is 2), now we only need to consider 2 * 2, 3 * 1, 5 * 1 in the next iteration. This way, we don't have to worry about finding a number that is already in the list.
```
class Solution(object):
    def nthUglyNumber(self, n):
        if n == 1: return 1
        p1, p2, p3 = 0, 0, 0 #pointers in the following list
        
        q = [0] * n
        q[0] = 1
        
        for i in range(1, n):
            t1, t2, t3 = q[p1] * 2, q[p2] * 3, q[p3] * 5
            q[i] = min(t1, t2, t3)
            if q[i] == t1: p1 += 1
            if q[i] == t2: p2 += 1
            if q[i] == t3: p3 += 1
            
        return q[-1]
```
