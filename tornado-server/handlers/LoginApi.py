#coding:utf-8
from BaseApi import BaseHandler, json_response
import methods.readdb as mrd
import json
import jwt
import tornado.escape
from demjson import decode


class UserLoginHandler(BaseHandler):
    
    @json_response
    def post(self):
        try:
            args = decode(self.request.body)
            account = args["account"]
            password = args["password"]
        except:
            pass

        try:
            user_infos = mrd.select_table(table="users",column="*",condition="email",value=account)       
            if user_infos: 
                token = self.jwt_encode({"user_id": user_infos[0][0]})
                if token:
                    token = token.decode('utf-8')
                return {"token": token}

            self.set_status(403)
            return {"false"}
        except:
            pass


