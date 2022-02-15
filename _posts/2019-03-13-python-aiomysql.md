---
layout: post
title: "Python aiomysql"
description: ""
categories: 
- python
- mysql
tags: [python]
---
{{ page.title }}
================

{% highlight python %}
import aiomysql
import asyncio

g_pool = None

async def fetch_user():
    global g_pool

    # 从连接池中获取连接
    with (await g_pool) as conn:
        # 用这个连接执行数据库操作
        cursor = await conn.cursor()

        await cursor.execute("SELECT * FROM user")
        rows = await cursor.fetchall()
        print(rows)
        
        # with 退出后，将自动释放 conn 到 g_pool 中

async def fetch_blog():
    global g_pool

    with (await g_pool) as conn:
        cursor = await conn.cursor()

        await cursor.execute("SELECT * FROM blog")
        rows = await cursor.fetchall()
        print(rows)

async def run(loop):
    global g_pool
    g_pool = await aiomysql.create_pool(
        host='127.0.0.1', 
        port=3306, 
        user='root', 
        password='password', 
        db='test', 
        autocommit=True,
        minsize=1,
        maxsize=10, 
        loop=loop)

    await fetch_user()
    await fetch_blog()

    g_pool.close()
    await g_pool.wait_closed()

loop = asyncio.get_event_loop()
loop.run_until_complete(run(loop))

{% endhighlight %} 
