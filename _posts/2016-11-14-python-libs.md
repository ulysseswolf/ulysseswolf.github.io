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

Click is a Python package for creating command line interfaces

import click

@click.command()
@click.option('--count', default=1, help='Number of greetings.')
@click.option('--name', prompt='Your name',
              help='The person to greet.')
def hello(count, name):
    """Simple program that greets NAME for a total of COUNT times."""
    for x in range(count):
        click.echo('Hello %s!' % name)

if __name__ == '__main__':
    hello()
And what it looks like when run:

$ python hello.py --count=3
Your name: John
Hello John!
Hello John!
Hello John!

{% endhighlight %}
