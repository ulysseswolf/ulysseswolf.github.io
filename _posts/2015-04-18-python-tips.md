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

Unicode 相关的字符串问题

Python 3 相比 Python 2 最大的改动之一，就是在语言内部对 unicode 的处理。

在 Python 2 中，文本类型 （也就是 unicode） 和二进制类型 （也就是 str） 的边界非常模糊。   
很多函数的参数既可以是文本，也可以是二进制。但是在 Python 3 中，文本类型和二进制类型的字符串被完全的区分开了。   

于是，下面这段在 Python 2 下可以正常运行的代码在 Python 3 下就会报错：

mymac = hmac.new('abc')
TypeError: key: expected bytes or bytearray, but got 'str'
解决办法其实很简单，只要加上判断：如果 value 是文本类型，就将其转换为二进制。如下所示：

value = 'abc'
if isinstance(value, six.text_type):
    value = value.encode(encoding='utf-8')
mymac = hmac.new(value)

在 Python 3 中，很多内置函数被修改成了只返成迭代器 Iterator：
map()
filter()
dict.items()
迭代器有诸多好处，最大的好处就是，使用迭代器不需要一次性分配大量内存，所以它的内存效率比较高。   
但是迭代器有一个天然的特点，当你对某个迭代器做了一次迭代，访问完它的内容后，就没法再次访问那些内容了。   
迭代器中的所有内容都只能被访问一次。

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

正则匹配多行文本
点(.)不能匹配换行符
re.compile() 函数接受一个标志参数叫 re.DOTALL ，它可以让正则表达式中的点(.)匹配包括换行符在内的任意字符

1.绝对路径转相对路径
print os.path.relpath("d:/MyProj/MyFile.txt")
## ..\MyProj\MyFile.txt
是根据当前路径的相对路径
 

2.相对路径转绝对路径
 注意用os.chdir(dir)改变当前比较路径
path = "..\MyProj\MyFile.txt"
print os.path.abspath(path)
## D:\MyProj\MyFile.txt

## setup file sharing
python3 -m http.server

## Reverse While Iterating In A Loop.
for element in reversed([1,3,5]): print(element)

## Reverse A String In Line.
"Test Python"[::-1]

## Reverse A List Using Slicing.
[1, 3, 5][::-1]

## Find The Most Frequent Value In A List.
test = [1,2,3,4,2,2,3,1,4,4,4]
print(max(set(test), key=test.count))
##-> 4

## Lambda To Imitate Print Function.
import sys
lprint=lambda *args:sys.stdout.write(" ".join(map(str,args)))
lprint("python", "tips",1000,1001)
##-> python tips 1000 1001

