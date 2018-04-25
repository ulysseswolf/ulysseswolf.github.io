---
layout: post
title: "Python urllib"
description: ""
categories: 
- python
- web
tags: [python]
---
{{ page.title }}
================

If you want to obtain the contents of a web page into a variable, just read the response of 
`urllib.request.urlopen`
{% highlight python %}
import urllib.request
...
url = 'http://example.com/'
response = urllib.request.urlopen(url)
data = response.read()      # a 'bytes' object
text = data.decode('utf-8') # a 'str'; this step can't be used if data is binary
{% endhighlight %} 

`urlretrieve` is considered legacy and might become deprecated (not sure why, though).

So the most correct way to do this would be to use the `urllib.request.urlopen` function to return a file-like object that represents an HTTP response and copy it to a real file using `shutil.copyfileobj`.

{% highlight python %}
mport urllib.request
import shutil
...
# Download the file from 'url' and save it locally under 'file_name':
with urllib.request.urlopen(url) as response, open(file_name, 'wb') as out_file:
    shutil.copyfileobj(response, out_file)
{% endhighlight %}
