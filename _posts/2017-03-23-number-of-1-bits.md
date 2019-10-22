---
layout: post
title: "Number of 1 bits"
description: ""
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

1.Built in solution with built-in function:
{% highlight python%}
def hammingWeight(self, n):
    """
    :type n: int
    :rtype: int
    """
    return bin(n).count('1')
{% endhighlight %}
2.Using bit operation to cancel a 1 in each round

Think of a number in binary n = XXXXXX1000, n - 1 is XXXXXX0111. n & (n - 1) will be XXXXXX0000 which is just cancel the last 1

{% highlight python%}
def hammingWeight(self, n):
    """
    :type n: int
    :rtype: int
    """
    c = 0
    while n:
        n &= n - 1
        c += 1
    return c
{% endhighlight %}
