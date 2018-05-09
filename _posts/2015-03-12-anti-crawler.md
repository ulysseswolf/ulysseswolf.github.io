---
layout: post
title: "Nginx"
description: ""
categories:    
- Nginx
tags: [Nginx]
---
{{ page.title }}
================
进入到 nginx 安装目录下的 conf 目录，将如下代码保存为 agent_deny.conf
cd /usr/local/nginx/conf
vim agent_deny.conf

{% highlight python %}
#禁止Scrapy等工具的抓取
if ($http_user_agent ~* (Scrapy|Curl|HttpClient)) {
     return 403;
}
#禁止指定UA及UA为空的访问
if ($http_user_agent ~* "FeedDemon|Indy Library|Alexa Toolbar|AskTbFXTV|AhrefsBot|CrawlDaddy|CoolpadWebkit|Java|Feedly|UniversalFeedParser|ApacheBench|Microsoft URL Control|Swiftbot|ZmEu|oBot|jaunty|Python-urllib|lightDeckReports Bot|YYSpider|DigExt|HttpClient|MJ12bot|heritrix|EasouSpider|Ezooms|^$" ) {
     return 403;             
}
#禁止非GET|HEAD|POST方式的抓取
if ($request_method !~ ^(GET|HEAD|POST)$) {
    return 403;
}
{% endhighlight %}
然后，在网站相关配置中的  location / {  之后插入如下代码：
{% highlight python %}
include agent_deny.conf;
{% endhighlight %}
保存后，平滑重启 nginx 即可：
 /usr/local/nginx/sbin/nginx -s reload






