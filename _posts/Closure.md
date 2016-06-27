
###Closure
定义
闭包是一种强大的抽象机制。
闭包是引用了自由变量的函数，被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境。
闭包只有在被调用时才执行操作。

条件
函数可以被当作参数传递、也可以作为函数返回值、绑定到变量名

####ruby中的闭包
4种闭包方式：blocks, Procs, Methods, lambdas
迭代是闭包在 Ruby 中最常见的用法
```
10.times {puts 'fuck'}
```
```
tax = 0.08
prices = [4.45, 6.34, 3.78]

tax_table = prices.map {|price| {:price => price, :tax => price * tax}}

sum = 0
prices.each {|n| sum += n}
```

用yield自定义闭包
```
def html
  puts "head"
  yield
  puts "footer"
end

html {puts "body"}
```

实施策略
```
def do_transaction
   begin
      setup_transaction
      yield
      commit_transaction
   rescue
      roll_back_transaction
   end
end
```
####python 中的闭包
```
def add1():
  x = 1
  return lambda y: x + y

a = add1()
b = add1()

print a(9) #10
print a(10) #11
print b(99) #100
print b(100) #101
```
装饰器
```
def makebold(fn):
  def wrapped():
    return "<b>" + fn() + "</b>"
    
  return wrapped

def makeitalic(fn):
  def wrapped():
    return "<i>" + fn() + "</i>"

  return wrapped

@makebold      # makebold(makeitalic(hello))
@makeitalic    # makeitalic(hello)
def hello():
  return "hello"
 
 print(hello()) #<b><i>hello</i></b>
```

####其他作用
因为闭包只有在被调用时才执行操作，即“惰性求值”，所以它可以被用来定义控制结构。例如：在Smalltalk语言中，所有的控制结构，包括分歧条件(if/then/else)和循环(while和for)，都是通过闭包实现的

闭包可以实现对象系统
闭包过程很像类（父函数）生成实例（闭包），不同的是父函数只在调用时执行，执行完毕后其环境就会释放，而类则在文件执行时创建，一般程序执行完毕后作用域才释放，因此对一些需要重用的功能且不足以定义为类的行为，使用闭包会比使用类占用更少的资源，且更轻巧灵活。

例：假设我们仅仅想打印出各类动物的叫声，分别以类和闭包来实现：
这里只是想输出一下动物的叫声，定义一个 Animal 类未免小题大做，而且 voice 函数在执行完毕后，其作用域就已经释放，但 Animal 类及其实例 dog 的相应属性却一直贮存在内存中

![image](https://segmentfault.com/img/bVsSLy)