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
dynamic programming is basically recursion with caching.   
90% 的字符串问题都可以用动态规划解决，并且90%是采用二维数组   

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

![](https://leetcode.com/problems/unique-paths/)
```
### 二维数组
class Solution:
    # @return an integer
    def uniquePaths(self, m, n):
        aux = [[1 for x in range(n)] for x in range(m)]
        for i in range(1, m):
            for j in range(1, n):
                aux[i][j] = aux[i][j-1]+aux[i-1][j]
        return aux[-1][-1]

### 优化
'''
根据公式 dp[i][j] = dp[i-1][j] + dp[i][j-1]，计算第 i 行的值时，除了会用到第 i - 1 行外，其他第 1 至 第 i-2 行的值都是不需要用到的，只需要用一个一维的 dp[] 来保存一行的历史记录就可以了。然后在计算机的过程中，不断着更新 dp[] 的值
1	1	1	1
1	2	3	4
1	3	6	10
->
n	n	n	n
1	2	3	4
n	n	n	n
->
n	n	n	n
n	n	n	n
1	3	6	10
d[i] = d[i-1] + d[i]
dp[i-1] 相当于之前的 dp[i-1][j]，dp[i] 相当于之前的 dp[i][j-1]
'''
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        dp = [1] * n
        for i in range(1, m):
            for j in range(1, n):
                dp[j] = dp[j - 1] + dp[j]
        return dp[-1]
```


