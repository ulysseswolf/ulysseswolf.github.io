---
layout: post
title: "python libs"
description: ""
categories: 
- python
tags: [python]
---
{{ page.title }}
================
使用yagmail，发送一个带附件的邮件，只需要2行代码：
{% highlight python %}
import yagmail
yag = yagmail.SMTP(user='abc@163.com', password='nicai?', host='smtp.163.com', port='25')
yag.send(user, subject = "I now can send an attachment", attachments=['a.txt', 'b.jpg'])
{% endhighlight %}
