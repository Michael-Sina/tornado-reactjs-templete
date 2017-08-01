#coding:utf-8
import tornado.ioloop
import tornado.options
import tornado.httpserver
from application import application
from tornado.options import define, options

define("port", default = 8888, help = "run on the given port", type = int)
define("mysql_host", default="localhost:3306", help="connect to the given mysql url and port")
define("mysql_database", default="qiwsirtest", help="connect to the given database")
define("mysql_user", default="root", help="connect to the given user")
define("mysql_password", default="xeqaVmIrY4=e", help="use the correct password")
define("docker_host", default="localhost：32704", help="use the correct host in your browser")

def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(options.port)

    print " "
    print "-----------------------------------------------------------------------"
    print "- Development server is running at http://localhost:%s...  " % (options.port,)
    print "-----------------------------------------------------------------------"
    print "- MySQL Host: %s                         " % (options.mysql_host,)
    print "- MysQL DataBase: %s                     " % (options.mysql_database,)
    print "- MysQL User: %s                         " % (options.mysql_user,)
    print "- MysQL Password: %s                     " % (options.mysql_password,)
    print "-----------------------------------------------------------------------"
    print "- Author: Michael                        "
    print "- Email: chutian.8986@gmail.com          "
    print "-----------------------------------------------------------------------"
    print ""

    print "Development server is running at http://localhost:%s" % options.port
    print "Quit the server with Control-C"

    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()
