---
layout: post
title: "Count Primes"
description: ""
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
https://leetcode.com/problems/count-primes/
埃氏筛法：
要得到自然数n以内的全部素数，必须把不大于根号n的所有素数的倍数剔除，剩下的就是素数。   
先用2去筛，即把2留下，把2的倍数剔除掉；再用下一个质数，也就是3筛，把3留下，把3的倍数剔除掉；接下去用下一个质数5筛，把5留下，把5的倍数剔除掉；不断重复下去   
![](https://ask.qcloudimg.com/http-save/yehe-5705865/0dnbwgclot.gif)
```
class Solution:
    def countPrimes(self, n: int) -> int:
        if n < 3:
            return 0
        primes = [True for _ in range(n)]
        primes[0] = primes[1] = False
        for i in range(2, int(n**0.5)+1):
            for j in range(i*i, n, i):
                if primes[j]:
                    primes[j] = False
                    
        return sum(primes)
```
