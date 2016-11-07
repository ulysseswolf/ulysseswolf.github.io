---
layout: post
title: "erlang"
description: ""
categories: 
- erlang 
tags: [erlang]
---
{{ page.title }}
================

Add one of the following to the /etc/apt/sources.list file:

{% highlight python%}
deb http://packages.erlang-solutions.com/ubuntu trusty contrib   
deb http://packages.erlang-solutions.com/ubuntu saucy contrib   
deb http://packages.erlang-solutions.com/ubuntu precise contrib   
{% endhighlight %}

Determine which one to add according to the result of running the following in the console:

{% highlight python%}
lsb_release -c 
{% endhighlight %}

Run the following two commands, after successfully updating the /etc/apt/sources.list file:

{% highlight python%}
wget http://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc   
sudo apt-key add erlang_solutions.asc
{% endhighlight %}

Then run the following:

{% highlight python%}
sudo apt-get update   
sudo apt-get install erlang
{% endhighlight %}

Reference: https://www.erlang-solutions.com/resources/download.html

