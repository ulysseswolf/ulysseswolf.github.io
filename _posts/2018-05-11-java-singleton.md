---
layout: post
title: "Singleton"
description: "thread save singleton"
categories: 
- Java
tags: [Java]
---
{{ page.title }}
================
如果只有一个线程顺序地执行当然是没有问题的。但如果有多个线程并发地执行 getInstance，可能就会带来很大的问题了。例如，当第一个线程，进入到 getInstance 中，这时 instance 变量仍然是 null，那么 if 条件就成立了，这个线程就会去执行创建 Singleton 实例的那条语句。在第一个线程的赋值语句之前，第二个线程也进入了 getInstance 方法，这时 instance 仍然是 null，那么第二个线程也会去执行 Singleton 的构造方法，新建一个对象。

这就产生了问题。那为了让这个方法变成线程安全的，我们可以为这个方法加上锁：
```
   public static synchronized Singleton getInstance() {
        if (instance == null)
            instance = new Singleton();

        return instance;
    }
```
通过使用 synchronized 关键字，就可以把这个方法变成线程安全的了。   

但是，这个方法只是在 instance 为 null 的时候，会有并发的问题，如果 instance 已经创建，不为 null 以后，再调用 getInstance() 方法就不会再有线程安全的问题了，所以，每次都为这样一个只读的方法加一个锁，性能上划不来。   
## 静态内部类
《Effective Java》作者推荐了一种叫做静态内部类的办法：   
```
class Singleton {
    public static Singleton instance;

    private static class SingletonWrapper {
        static Singleton instance = new Singleton();
    }

    private Singleton() {

    }

    public static Singleton getInstance() {
        return SingletonWrapper.instance;
    }
}
```
在第一次调用 getInstance 方法之前，SingletonWrapper 类是没有被加载的，因为它是一个静态内部类。当有线程第一次调用 getInstance 的时候，SingletonWrapper 就会被 class loader 加载进 JVM，在加载的同时，执行 instance 的初始化。所以，这种写法，仍然是一种懒汉式的单例类。
类的加载的过程是单线程执行的。它的并发安全是由 JVM 保证的。所以，这样写的好处是在 instance 初始化的过程中，由 JVM 的类加载机制保证了线程安全，而在初始化完成以后，不管后面多少次调用 getInstance 方法都不会再遇到锁的问题了。   
## 枚举
使用枚举来实现单例类：
```
public class Main {
    public static void main(String[] args) {
        Singleton.INSTANCE.sayHello();
    }
}

enum Singleton {
    INSTANCE;

    public void sayHello() {
        System.out.println("hello");
    }
}
```
enum Singleton 只不过就是 class Singleton 的语法糖而已。在 JVM 看来，枚举类型不过就是 java.lang.Enum 类的子类。   
在加载 Singleton 类的时候，就会把 instance 初始化完成。这仍然利用了类加载器是线程安全的这一特性。   

CAS   
CAS是乐观锁，当多个线程尝试使用CAS同时更新同一个变量时，只有其中一个线程能更新变量的值，而其它线程都失败，失败的线程并不会被挂起，而是被告知这次竞争中失败，并可以再次尝试。
如果当前值 == 预期值，则以原子方式将该值设置为给定的更新值。
用CAS的好处在于不需要使用传统的锁机制来保证线程安全,CAS是一种基于忙等待的算法,依赖底层硬件的实现,相对于锁它没有线程切换和阻塞的额外消耗,可以支持较大的并行度。

CAS的一个重要缺点在于如果忙等待一直执行不成功(一直在死循环中),会对CPU造成较大的执行开销。

另外，如果N个线程同时执行到singleton = new Singleton();的时候，会有大量对象创建，很可能导致out of memory(内存溢出)。
```
import java.util.concurrent.atomic.AtomicReference;
public class Singleton {
    private static final AtomicReference INSTANCE = new AtomicReference();
    private Singleton() {}
    public static Singleton getInstance() {
        for (;;) {
            Singleton singleton = INSTANCE.get();
            if (null != singleton) {
                return singleton;
            }
	    singleton = new Singleton();
	    // 如果当前值 == 预期值，则以原子方式将该值设置为给定的更新值
	    // boolean compareAndSet(V expect, V update)
            if (INSTANCE.compareAndSet(null, singleton)) {
                return singleton;
            }
        }
    }
}
```
