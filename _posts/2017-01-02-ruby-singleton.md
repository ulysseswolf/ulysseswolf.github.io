---
layout: post
title: "Ruby singleton"
description: ""
categories:
- ruby
tags: [ruby]
---
{{ page.title }}
================

{% hightlight python%}
class Logger  
    DEBUG = 0
    INFO = 1
    ERROR = 2
    NOTHING = 3
          
    LEVEL = DEBUG
          
    def debug msg  
        puts msg if DEBUG >= LEVEL
    end
          
    def info msg  
        puts msg if INFO >= LEVEL
    end
          
    def error msg  
        puts msg if ERROR >= LEVEL
    end
end
{% endhighlight %}

通过这个类来打印日志，只需要控制LEVEL的级别，就可以自由地控制打印的内容。比如 现在项目处于开发阶段，就将LEVEL设置为DEBUG，这样所有的日志信息都会被打印。而项目如果上线了 ，可以把LEVEL设置为INFO，这样就只能看到INFO及以上级别的日志打印。如果你只想看到错误日志， 就可以把LEVEL设置为ERROR。而如果你开发的项目是客户端版本，不想让任何日志打印出来，可以将 LEVEL设置为NOTHING。打印的时候只需要调用：

logger = Logger.new
logger.debug("Hello World")


虽然这个工具好用，可是打印这种事情是不区分对象的，这里每次 需要打印日志的时候都需要new出一个新的Logger，太占用内存了，可以将这个工具改成用单例 模式实现。

{% hightlight python%}
class Logger  
    private_class_method :new
          
    DEBUG = 0
    INFO = 1
    ERROR = 2
    NOTHING = 3
          
    LEVEL = DEBUG
          
    @@instance = nil
          
    def debug msg  
        puts msg if DEBUG >= LEVEL
    end
          
    def info msg  
        puts msg if INFO >= LEVEL
    end
          
    def error msg  
        puts msg if ERROR >= LEVEL
    end
          
    def self.instance  
        @@instance = new unless @@instance
    end
end
{% endhighlight %}

首先使用private_class_method将Logger的new方法私有化，这样就无法通过new方法创建 Logger的实例了。然后使用一个静态变量@@instance来保存实例，并提供一个公有的instance方法用于 获取Logger的实例，在这个方法里面判断如果@@instance为nil，就new出一个新的Logger实例，否则就 直接返回@@instance。这样就可以保证内存当中只会存在一个Logger的实例了。这时打 印日志的代码需要改成如下方式：

logger = Logger.instance  
logger.debug("Hello World")

在ruby上还有更简单的实现方式。

{% hightlight python%}
require 'singleton'
class Logger  
    include Singleton  
          
    #省略剩余代码  
end
{% endhighlight %}
首先从系统配置路径中引入singleton.rb这个文件，然后在Logger类里引入Singleton这 个模块。  
ruby有一个模块 (module)机制，在类里引入模块后，该类可以访问模块中的定义的方法。
instance方法就是定义在 Singleton这个模块里面的，然后在运行时将这个模块引入，Logger类就可以访问Singleton中的 instance方法了。

单例：保证一个类仅有一个实例，并提供一个访问它的全局访问点。

