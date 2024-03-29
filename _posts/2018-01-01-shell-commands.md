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
> 覆盖输出文件   
>> 在文件末添加   

myfile.txt contains filenames delimited by newline
### zip out.zip -@ < myfile.txt   
If a file list is specified as -@ [Not on MacOS], zip takes the list of input files from standard input instead of from the command line.
### Zip an archive without including parent directory
zip -j ...

Store just the name of a saved file (junk the path), and do not store directory 
names. By default, zip will store the full path (relative to the current 
directory).


打印文件中的某一列。它智能的去切分你的数据，不管是空格，还是TAB:
awk '{print $1}' file

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


# extract package to direction:
tar xzf wiki-js.tar.gz -C ./wiki
