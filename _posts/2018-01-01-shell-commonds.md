---
layout: post
title: "shell commonds"
description: ""
categories: 
- linux
tags: [linux]
---
{{ page.title }}
================
把当前目录下的所有.c 和 .h 文件中的 "waf"字符 全部 替换成 “tamper”   
{% highlight python %}
find . -name "*.[ch]" |xargs sed -i 's/waf/tamper/g'   
{% endhighlight %}
-i option is used to edit in place on the file hello.txt.   
-e option indicates the expression/command to run, in this case s/.   
Note: It's important that you use -i -e to search/replace. If you do -ie, you create a backup of every file with the letter 'e' appended.   
