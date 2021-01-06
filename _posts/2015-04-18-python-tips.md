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
对一个 list 排序，这很简单，但如果要先按元素的一个属性排序，再按另一个排序，怎么做？比如一个学校的人站成一行，需要年级从小到大，并且每个年级里从矮到高。可以这样：
[P1, P2, P3, ...Pn].sort(key=lambda x: (x.grade, x.height))
把需要排序的属性拿出来作为一个 tuple，主要的放前面，次要的放后面。因为 Python 在比较 tuple 大小的时候正是按字典序进行的。如果需要对更多属性排序，继续添加进 tuple 即可。这个技巧还可以扩展。假设有一个 list：lst = [1, -2, 10, -12, -4, -5, 9, 2]
还是排序，我们希望把正的放前面，负的放后面，并且分别按绝对值从小到大。即输出：[1, 2, 9, 10, -2, -4, -5, -12]
最简单的方法是：lst.sort(key=lambda x: (x < 0, abs(x)))

Python的locals()函数会以dict类型返回当前位置的全部局部变量。
动态加载re:
locals()['re'] = __import__('re')

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

CPython 3 使用 UTF8 作为默认编码（ sys.getdefaultencoding() ）   

CPython 2 中，True 和 False 使用全局变量实现。 Python 3 将 True 和 False 设计为语言 关键字，不再允许对其重新赋值。   

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


get first and last line of a text file   
{% highlight python %}
# 1
with open(fname, 'rb') as fh:
    #firstline
    first = next(fh).decode()

    fh.seek(-1024, 2)
    last = fh.readlines()[-1].decode()

#The variable value here is 1024: it represents the average string length. I choose 1024 only for example. If you have an estimate of average line length you could just use that value times 2.

#Since you have no idea whatsoever about the possible upper bound for the line length, the obvious solution would be to loop over the file:

for line in fh:
    pass
last = line

seek(offset[, whence])
    Change the stream position to the given byte offset. offset is interpreted relative to the position indicated by whence. The default value for whence is SEEK_SET. Values for whence are:

    SEEK_SET or 0 – start of the stream (the default); offset should be zero or positive
    SEEK_CUR or 1 – current stream position; offset may be negative
    SEEK_END or 2 – end of the stream; offset is usually negative

    Return the new absolute position.
# 2
with open(file, "rb") as f:
    first = f.readline()        # Read the first line.
    f.seek(-2, os.SEEK_END)     # Jump to the second last byte.
    while f.read(1) != b"\n":   # Until EOL is found...
        f.seek(-2, os.SEEK_CUR) # ...jump back the read byte plus one more.
    last = f.readline()         # Read last line.

# 3
import subprocess
first_line = subprocess.check_output(['head', '-1', file])
last_line = subprocess.check_output(['tail', '-1', file])



# 繁体转简体
# 安装
# pip install opencc-python-reimplemented

# t2s - 繁体转简体（Traditional Chinese to Simplified Chinese）
# s2t - 简体转繁体（Simplified Chinese to Traditional Chinese）
# mix2t - 混合转繁体（Mixed to Traditional Chinese）
# mix2s - 混合转简体（Mixed to Simplified Chinese）

import opencc
cc = opencc.OpenCC('t2s')
s = cc.convert('眾議長與李克強會談')
print(s)


# get first/last day of current year
from datetime import date
a = date(date.today().year, 1, 1)
b = date(date.today().year, 12, 31)
{% endhighlight %} 



# openpyxl
## set column width
from openpyxl import Workbook

wb = Workbook()
worksheet = wb.active
worksheet.column_dimensions['A'].width = 50

wb.save(filename="col_width.xlsx")


# flask redis pool
#Redis-py provides a connection pool for you from which you can retrieve a connection. Connection pools create a set of connections which you can use as needed (and when done - the connection is returned to the connection pool for further reuse). Trying to create connections on the fly without discarding them (i.e. not using a pool or not using the pool correctly) will leave you with way too many connections to redis (until you hit the connection limit).

#You could choose to setup the connection pool in the init method and make the pool global (you can look at other options if uncomfortable with global).


redis_pool = None

def init():
    global redis_pool
    print("PID %d: initializing redis pool..." % os.getpid())
    redis_pool = redis.ConnectionPool(host='10.0.0.1', port=6379, db=0)
#You can then retrieve the connection from a pool like this:

redis_conn = redis.Redis(connection_pool=redis_pool)


# dumps python tuple to redis list
>>> tup1 = ('2011-04-05', 25.2390232323, 0.32093240923490, 25.239502352390)
>>> import pickle
>>> r.lpush('9999', pickle.dumps(tup1))
1L
>>> v = pickle.loads(r.lpop('9999'))
>>> v
('2011-04-05', 25.2390232323, 0.3209324092349, 25.23950235239)
>>> type(v)
<type 'tuple'>
