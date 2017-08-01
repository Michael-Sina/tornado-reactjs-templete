#coding:utf-8
from tornado.web import authenticated
from BaseApi import BaseHandler, json_response
from tornado.web import RequestHandler


class AdminMainHandler(BaseHandler):

    @json_response
    def get(self):
        if self.get_current_user():
            return [
            {
                "name": "山田一郎",
                "email": "Yamada.ichiro@fosterlink.co.jp",
                "password": "123456",
                "id": 1
            },
            {
                "id": 2,
                "name": "山田二郎",
                "email": "Yamada.jiro@fosterlink.co.jp",
                "password": "334568"
            },
            {
                "id": 3,
                "name": "山田三郎",
                "email": "Yamada.saburo@fosterlink.co.jp",
                "password": "987635"
            }]
        else:
            self.redirect("/api/auth/login")