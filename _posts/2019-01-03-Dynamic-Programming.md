---
layout: post
title: "Dynamic Programming"
description: ""
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
问题描述：一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。    
分析：
青蛙到达第 n 级的台阶有两种方式   
一种是从第 n-1 级跳上来   
一种是从第 n-2 级跳上来   
常用一个数组，来保存历史数组，计算 dp[n] 时，利用 dp[n-1]，dp[n-2].....dp[1]，来推出 dp[n] 的，也就是利用历史数据来推出新的元素值   
所有可能的跳法的: dp[n] = dp[n-1] + dp[n-2]
```
def f(n):
    if n <= 1:
    return n
    # 先创建一个数组来保存历史数据
    dp = [None] * n
    # 给出初始值, 第一级台阶初始值1
    dp[0] = 1
    # 第二级台阶初始值为2
    dp[1] = 2
    # 通过关系式来计算出 dp[n]
    for i in range(2, n):
        dp[i] = dp[i-1] + dp[-2]
    }
    # 把最终结果返回
    return dp[n-1]

def fib(n):
    a, b = 0, 1
    for _ in xrange(n):
        a, b = b, a + b
    return b
```


