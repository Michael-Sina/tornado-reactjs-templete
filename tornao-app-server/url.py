import sys    
reload(sys)
sys.setdefaultencoding("utf-8")

from handlers.UserMainApi import UserMainHandler
from handlers.LoginApi import UserLoginHandler
from handlers.AdminMainApi import AdminMainHandler

url = [
	(r'/api/auth/userlogin', UserLoginHandler),
    (r'/api/auth/user', UserMainHandler),
    (r'/api/auth/admin', AdminMainHandler),
    # (r'/api/auth/logout', UserLogoutHandler),
    # (r'/api/auth/login', AuthHandler),
    # (r'.*', PageNotFoundHandler),
]
