---
layout: post
title: "System Design"
description: ""
categories: 
- Design
tags: [Design]
---
{{ page.title }}
================
A simple but effective template for creating a custom string shortening service, based a on proven and widely used algorithm – Base 62 encoding.
In order to manage our list of shortened strings and their corresponding hashes we are going to use a database. In this example I’ve decided to use a MySQL database with the following schema: id : INT (primary key, auto increment) hash: VARCHAR (unique) url: VARCHAR Each encoded url (i.e. hash) entry will be identified by a unique id. Of course, whenever an entry should be added it needs to be checked if the same hash already exists, i.e. if the same url already exists in our database. Once this check is done and no same url exists we have to add a new entry and based on the last id generated we are going to calculate our hash. Following you find the corresponding SQL code for the schema:
```
CREATE TABLE IF NOT EXISTS `phpss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hash` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `hash` (`hash`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
```
Algorithm
Obviously, the underlying algorithm represents the main part of this solution. As previously mentioned, each shortened string will be represented by a unique id (and hash) in the database. We will make use of this unique ID to create hashes, using Base62 encoding. So, let’s say our next unique ID for the string to be shortened is 100. In this case 100 is Base10 encoded (100×10^0). Consequently, the next step would be to convert it to Base62 encoding. This can be done quite easily using modulo operation.
```
def base62(n):
	base62Alphabet = '0123456789abcdefghizklmnopqrstuvwxyzABCDEFGHIZKLMNOPQRSTUVWXYZ'
        hash_str = ''
        while n > 0:
            d = n % 62
            n //= 62
            hash_str = base62Alphabet[d] + hash_str

        return hash_str
```
