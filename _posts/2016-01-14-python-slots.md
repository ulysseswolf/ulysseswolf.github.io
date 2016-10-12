---
layout: post
title: "Python __slots__"
description: ""
categories: 
- python
tags: [python]
---
{{ page.title }}
================

In Python every class can have instance attributes. By default Python uses a dict to store an object’s instance attributes. This is really helpful as it allows setting arbitrary new attributes at runtime.

However, for small classes with known attributes it might be a bottleneck. The dict wastes a lot of RAM. Python can’t just allocate a static amount of memory at object creation to store all the attributes. Therefore it sucks a lot of RAM if you create a lot of objects (I am talking in thousands and millions). Still there is a way to circumvent this issue. It involves the usage of __slots__ to tell Python not to use a dict, and only allocate space for a fixed set of attributes.

{% highlight python%}
>>> class User(object):
...     __slots__ = ("_name", "_age")
...
...     def __init__(self, name, age):
...         self._name = name
...         self._age = age
>>> u = User("Tom", 34)
>>> hasattr(u, "__dict__")
False
>>> u.title = "CXO" # 动态增加字段失败
AttributeError: 'User' object has no attribute 'title'
>>> del u._age          # 已有的可以删除
>>> u._age = 18          # 坑是可以补回来的
>>> u._age
>>> del u._age
>>> u._title = "CXO"
AttributeError: 'User' object has no attribute '_title'
>>> vars(u)     # 因为没有__dict__，vars失败
TypeError: vars() argument must have __dict__ attribute
{% endhighlight %}

18虽然没有__dict__，但依然可以用dir()和inspect.getmember()获取实例成员信息。

派生类必须用__slots__为新增的字段分配存储空间（即使__slots__ = []），否则会更慢。
