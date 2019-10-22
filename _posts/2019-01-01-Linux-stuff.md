---
layout: post
title: "Linux stuff"
description: ""
categories: 
- Linux
tags: [Linux]
---
{{ page.title }}
================

<details>
<summary><b>Why should you avoid <code>telnet</code> to administer a system remotely?</b></summary><br>

Modern operating systems have turned off all potentially insecure services by default. On the other hand, some vendors of network devices still allow to establish communication using the telnet protocol.

**Telnet** uses most insecure method for communication. It sends data across the network in plain text format and anybody can easily find out the password using the network tool.

In the case of **Telnet**, these include the passing of login credentials in plain text, which means anyone running a sniffer on your network can find the information he needs to take control of a device in a few seconds by eavesdropping on a **Telnet** login session.
</details>

<details>
<summary><b>What are the advantages of using a reverse proxy server?</b></summary><br>

**Hide the topology and characteristics of your back-end servers**

The **reverse proxy server** can hide the presence and characteristics of the origin server. It acts as an intermediate between internet cloud and web server. It is good for security reason especially when you are using web hosting services.

**Allows transparent maintenance of backend servers**

Changes you make to servers running behind a reverse proxy are going to be completely transparent to your end users.

**Load Balancing**

The reverse proxy will then enforce a load balancing algorithm like round robin, weighted round robin, least connections, weighted least connections, or random, to distribute the load among the servers in the cluster.

When a server goes down, the system will automatically failover to the next server up and users can continue with their secure file transfer activities.

**SSL offloading/termination**

Handles incoming HTTPS connections, decrypting the requests and passing unencrypted requests on to the web servers.

**IP masking**

Using a single ip but different URLs to route to different back end servers.

Useful resources:

- [The Benefits of a Reverse Proxy](https://dzone.com/articles/benefits-reverse-proxy)

</details>

<details>
<summary><b>What is the difference between a router and a gateway? What is the default gateway?</b></summary><br>

**Router** describes the general technical function (layer-3 forwarding) or a hardware device intended for that purpose, while gateway describes the function for the local segment (providing connectivity to elsewhere). You could also state that "_you set up a router as gateway_". Another term is hop which describes the forwarding in between subnets.

The term **default gateway** is used to mean the router on your LAN which has the responsibility of being the first point of contact for traffic to computers outside the LAN.

It's just a matter of perspective, the device is the same.

Useful resources:

- [Difference between router and gateway (orignal)](https://networkengineering.stackexchange.com/questions/51426/difference-between-router-and-gateway)

</details>

