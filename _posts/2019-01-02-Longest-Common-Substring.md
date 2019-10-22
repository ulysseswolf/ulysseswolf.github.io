---
layout: post
title: "Longest Common Substring"
description: ""
categories: 
- Algorithm
tags: [Algorithm]
---
{{ page.title }}
================
Longest Common Substring Algorithm

Find the [longest common substring](http://en.wikipedia.org/wiki/Longest_common_substring_problem)!

For example, given two strings: 'academy' and 'abracadabra', the common and the longest is 'acad'.  
Another example: ''ababc', 'abcdaba'. For this one, we have two substrings with length of 3: 'abc' and 'aba'.

There are several algorithms to solve this problem such as [Generalized suffix tree](http://en.wikipedia.org/wiki/Generalised_suffix_tree).

In this page, I'll solve the problem brute force like way with m*n complexity where m and n are the lengths of the two given strings.


The code looks like this:

```
def lcs(S,T):
    m = len(S)
    n = len(T)
    counter = [[0]*(n+1) for x in range(m+1)]
    longest = 0
    endIndex = 0
    for i in range(m):
        for j in range(n):
            if S[i] == T[j]:
                c = counter[i][j] + 1
                counter[i+1][j+1] = c
                if c > longest:
                    longest = c
		endIndex = i + 1

    return S[endIndex-longest:endIndex]

# test 1
ret = lcs('academy', 'abracadabra')
print(ret)
# test 2
ret = lcs('ababc', 'abcdaba')
print(ret)
```

Output:

```
acad
aba
```

This is how it works

1.  Initally, we initialized the counter array all 0:
    
```
    m = len(S)
    n = len(T)
    counter = [[0]*(n+1) for x in range(m+1)]
```
    
    ![](https://bogotobogo.com/python/images/lcs/Longest_Initial.png)
    
    Note that the array size is (m+1)x(n+1).
    
2.  Starting from the 1st row, we will compare the fist character of a string **S** with all characters in a string **T**.
    
```
    for i in range(m):
        for j in range(n):
            if S[i] == T[j]:
```
    
    ![](https://bogotobogo.com/python/images/lcs/Traverse.png)
    
3.  While we traverses the characters in **T**, if it matches with the character in **S**, we increment the counter. It will be saved counter[i+1][j+1] which is at diagonally one lower position.  
    
```
    if S[i] == T[j]:
        c = counter[i][j] + 1
        counter[i+1][j+1] = c
```
    
    ![](https://bogotobogo.com/python/images/lcs/diagonal.png)
    
    The figure shows when 'a' in **S** meets 'a' in **T**, we make an increment to the counter and stores it at (i+1, j+1). Also, if the counter is greater than the **longest**, we should update. Also, we reset the **lcs_set** and add the string.
    
```
    if c > longest:
         lcs_set = set()
         longest = c
         lcs_set.add(S[i-c+1:i+1])
    elif c == longest:
         lcs_set.add(S[i-c+1:i+1])
```
    
    If the counter is the same as the current longest, it does not reset the lcs_set. It just add the substring to the set.
    
  
5.  The picture below is the final state of the code:
    
    ![](https://bogotobogo.com/python/images/lcs/Final.png)
    
    When 'd' meets 'd', the counter is updated to 4 which means the longest substring is 4. So, it takes 4 string from the current i index which is 3, and add it the the set.
    
```
    lcs_set.add(S[i-c+1:i+1])
```
    
    So, at that point, the set has 'acad' substring!
6.  Finally, the **lcs()** returns the set **lcs_set**
    
```
     return lcs_set
```
    
