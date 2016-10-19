---
layout: post
title: "python tips"
description: ""
categories: 
- python
tags: [python]
---
{{ page.title }}
================
{% highlight python %}
如何将字段转换成一个object，然后使用对象-属性的方式读取   
1 使用namedtuple
>>> import collections
>>> MyStruct = collections.namedtuple('mystruct', 'a b c')
>>> m = MyStruct(a=1, b={'c': 2}, c=['hi'])
>>> m.a

2 
class Struct:
      def __init__(self, **entries):
      	  self.__dict__.update(entries)
	  
>>> args = {'a': 1, 'b': 2}
>>> s = Struct(**args)
>>> s.a

列出一个目录的所有文件

1 os.listdir
from os import listdir
from os.path import isfile, join
files = [f for f in listdir(dir) if isfile(join(dir, f))]

2 os.walk
from os import walk
f=[]
for (dirpath, dirname, filenames) in walk(dir):
	f.extend(filenames)

3 glob
import os
os.chdir(dir)
glob.glob('*.txt')

用函数名字符串调用一个函数

import foo
a = getattr(foo, 'bar')
result = a()

or:
result = getattr(foo, 'bar')()

{% endhighlight %}
