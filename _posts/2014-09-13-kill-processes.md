---
layout: post
title: "kill mysql processes"
description: ""
categories: 
- sql
tags: [sql]
---
{{ page.title }}
================
How do I kill all the processes in Mysql “show processlist”?

mysql> select concat('KILL ',id,';') from information_schema.processlist
where user='root' and time > 200 into outfile '/tmp/a.txt';

mysql> source /tmp/a.txt;
Reference

if you do not want to store in file, store in a variable

Just run in your command prompt

> out1=$(mysql -B test -uroot -proot --disable-column-names  -e "select concat('KILL ',id,';') from information_schema.processlist where user='root' and time > 200;")

> out2= $(mysql -B test -uroot -proot --disable-column-names  -e "$out1")





