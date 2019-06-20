---
layout: post
title: "shell commands"
description: ""
categories: 
- linux
tags: [Linux]
---
{{ page.title }}
================
split big file:   
by line:   
### split -l 20 file.txt new    
or by bytes:   
### split -b 100000 file.csv new   

batch kill linux porcesses   
### ps -ef | grep 'expect -f' | awk '{system("kill -9 " $2)}'   

把当前目录下的所有.c 和 .h 文件中的 "waf"字符 全部 替换成 “tamper”   
{% highlight python %}
find . -name "*.[ch]" |xargs sed -i 's/waf/tamper/g'   
{% endhighlight %}
-i option is used to edit in place on the file hello.txt.   
-e option indicates the expression/command to run, in this case s/.   
Note: It's important that you use -i -e to search/replace. If you do -ie, you create a backup of every file with the letter 'e' appended.   

### !! or sudo !!   
Repeats your last command.   
### !ssh    
last command starting with ssh   
### !mysql    
last command starting with ssh
### !?foo?:p    
search history for the most recent command that contained the string 'foo' and print it   
### !?foo    
search history for the most recent command that contained 'foo' and executes it straight away.    

cat line X to line Y on a huge file:
### 1. awk 'NR >= 57890000 && NR <= 57890010' /path/to/file   
### 2. sed -n -e "$X,$Y p" -e "$Y q" /path/to/file   

cat specific line from a file:
### sed -n '8000{p;q}' file   
The advantage of the q command is that sed will quit as soon as the 8000-th line is read

To list any process listening to the port 8080:   
### lsof -i:8080   
To kill any process listening to the port 8080:   
### kill $(lsof -t -i:8080)   
or more violently:   
### kill -9 $(lsof -t -i:8080)   

find all files larger than 20M   
### find / -type f -size +20M

command > /dev/null等价于command 1 > /dev/null   
0 表示stdin标准输入， 2是标准错误，1是标准输出.
2>&1 把标准错误重定向到标准输出
