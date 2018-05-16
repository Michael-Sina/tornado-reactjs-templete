#coding:utf-8
from tornado.web import authenticated
from BaseApi import BaseHandler, json_response
from tornado.web import RequestHandler


class UserMainHandler(BaseHandler):

		@json_response
		def get(self):
			if self.get_current_user():
				return [
    			{
      				"id": 10001,
      				"publisher": "講談社",
      				"author": "佐木飛朗斗　所十三",
      				"title": "疾風伝説 特攻の拓"
    			},
    			{
      				"id": 10002,
      				"publisher": "講談社",
      				"author": "藤沢とおる",
      				"title": "湘南純愛組"
    			},
    			{
      				"id": 10003,
      				"publisher": "小学館",
      				"author": "西森博之",
      				"title": "今日から俺は"
    			},
    			{
      				"id": 10004,
      				"publisher": "少年画報社",
      				"author": "田中広",
      				"title": "BADBOYS"
    			},
    			{
      				"id": 10005,
      				"publisher": "集英社",
      				"author": "森田まさのり",
      				"title": "ろくでなしBLUES"
    			},
    			{
      				"id": 10006,
      				"publisher": "白泉社",
      				"author": "森恒二",
      				"title": "ホーリーランド"
    			}]
			else:
				self.redirect("/api/auth/login")