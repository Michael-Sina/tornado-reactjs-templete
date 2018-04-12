#!/usr/bin/env Python
# coding=utf-8

import MySQLdb

conn = MySQLdb.connect(host="db-mysql", user="tornado", passwd="tornadopasswd", db="qiwsirtest", port=3306, charset="utf8") 


cur = conn.cursor() 
