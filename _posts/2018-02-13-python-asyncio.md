---
layout: post
title: "Python AsyncIO"
description: ""
categories: 
- python
tags: [python]
---
{{ page.title }}
================

{% highlight python %}
import time
import asyncio
from aiohttp import ClientSession

tasks = []
url = "https://www.baidu.com/{}"
async def hello(url):
    async with ClientSession() as session:
        async with session.get(url) as response:
#            print(response)
            print('Hello World:%s' % time.time())
            return await response.read()

def run():
    for i in range(5):
        task = asyncio.ensure_future(hello(url.format(i)))
        tasks.append(task)
    result = loop.run_until_complete(asyncio.gather(*tasks))
    print(result)

if __name__ == '__main__':
    loop = asyncio.get_event_loop()
    run()

{% endhighlight %}

假如并发达到2000个，程序会报错：ValueError: too many file descriptors in select()。报错的原因字面上看是 Python 调取的 select 对打开的文件有最大数量的限制，这个其实是操作系统的限制，linux打开文件的最大数默认是1024，windows默认是509，超过了这个值，程序就开始报错。有三种方法解决这个问题：   
1.限制并发数量。（一次不要塞那么多任务，或者限制最大并发数量）   
2.使用回调的方式。   
3.修改操作系统打开文件数的最大限制，在系统里有个配置文件可以修改默认值。   

{% highlight python %}
mport time,asyncio,aiohttp


url = 'https://www.baidu.com/'
async def hello(url,semaphore):
    async with semaphore:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                return await response.read()


async def run():
    semaphore = asyncio.Semaphore(500) # 限制并发量为500
    to_get = [hello(url.format(),semaphore) for _ in range(1000)] #总共1000任务
    await asyncio.wait(to_get)


if __name__ == '__main__':
#    now=lambda :time.time()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run())
    loop.close()
{% endhighlight %}
