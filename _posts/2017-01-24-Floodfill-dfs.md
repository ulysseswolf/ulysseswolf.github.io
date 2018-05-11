---
layout: post
title: "Floodfill漫水填充法"
description: ""
categories: 
- python
tags: [python]
---
{{ page.title }}
================
10 * 10矩阵表示地图，0 表示海洋，1 表示陆地，计算独立岛屿   

{% highlight python %}
m = [[1,1,1,0,0,0,0,0,1,1], 
     [1,0,1,0,1,1,1,0,1,1],
     [1,0,1,0,1,1,1,1,0,1],
     [1,1,0,0,0,1,1,1,0,0],
     [0,0,0,0,0,0,1,1,1,0],
     [0,1,1,1,0,1,1,1,1,0],
     [0,1,1,1,1,1,1,1,1,0],
     [0,0,1,1,1,1,1,1,0,0],
     [0,0,0,1,1,1,1,0,1,1],
     [0,0,0,0,0,0,0,0,1,0]]

#上下左右四个方向
directions = [(1,0), (-1,0), (0,1), (0,-1)]
#访问过的坐标
v = []
def dfs(x, y, nums):
    if x == 9 and y == 9:
        print(nums)
        return 

    for a, b in directions:
        x1 = x + a
        y1 = y + b
        if 0 <= x1 and x1 < 10 and 0 <= y1 and y1 < 10 and ((x1, y1) not in v):
            if m[x1][y1] == 1:
                m[x1][y1] = nums
                
                v.append((x1, y1))
                dfs(x1, y1, nums)

nums = 0
for i in range(9):
    for j in range(9):
        if m[i][j] > 0:
            nums -= 1
            dfs(i, j, nums)
print('there are {0} isolated islands'.format(-nums))
{% endhighlight %}
