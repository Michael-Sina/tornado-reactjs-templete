from tornado.web import RequestHandler
import json
import jwt
import time
import functools
import logging

jwt_secret = 'secret'
jwt_expire = 60
jwt_algorithm = 'HS256'

JWT_OPTIONS = {
    'verify_signature': True,
    'verify_exp': True,
    'verify_nbf': False,
    'verify_iat': True,
    'verify_aud': False
}

class JWTERROR(Exception):
    pass

class JWTHandler(RequestHandler):

    def jwt_encode(self, payload):
        if not isinstance(payload, dict):
            raise JWTERROR("jwt payload must be a dict")

        # jwt_secret = self.application.setting.get("jwt_secret")
        if not jwt_secret:
            raise JWTERROR("must set jwt secret: %s" % jwt_secret)

        # # jwt_expire = self.application.setting.get("jwt_expire")
        if jwt_expire and str(jwt_expire).isdigit():
            payload.update({"exp": int(jwt_expire + time.time())})
        return jwt.encode(payload=payload, key=jwt_secret, algorithm=jwt_algorithm)

    def jwt_decode(self):

        auth = self.request.headers.get("authorization")
        try:
            if not auth:
                raise JWTERROR()

            auth_items = auth.split(' ')
            if len(auth_items) != 2 or str(auth_items[0]).lower() != "bearer":
                raise JWTERROR()

            token = auth_items[1]
            # jwt_secret = self.application.settings.get('jwt_secret')
            result = jwt.decode(token, jwt_secret, **JWT_OPTIONS)

        except jwt.DecodeError:
            self.set_status(403)
            self.finish({"msg": "jwt token is invalid: %s" % auth})

        except jwt.ExpiredSignatureError:
            self.set_status(403)
            self.finish({"msg": "jwt token has been expired"})

        except Exception as e:
            self.set_status(500)

        else:
            return result

        return {}

def json_response(method):
    @functools.wraps(method)
    def wrapped(self, *args, **kwargs):
        try:
    		self.set_header("Content-Type", "applicaton/json")
    		result = method(self, *args, **kwargs)
    		if not isinstance(result, dict):
   				result = {"data": result}
    		result = json.dumps(result)
        	self.write(result)
    	except Exception as e:
        	logging.exception(e)
        	self.set_status(500)
    return wrapped

class BaseHandler(JWTHandler):

    def set_default_headers(self):
        self.set_header('Access-Control-Allow-Origin', '*')
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
        self.set_header('Access-Control-Max-Age', 1000)
        self.set_header('Access-Control-Allow-Headers', 'Content-Type, x-www-form-urlencoded, Accept, Authorization')

    def options(self):
        self.set_status(200)
        self.finish()

    def get_current_user(self):
        jwt_auth = self.jwt_decode()
        if jwt_auth.get("user_id"):
            return jwt_auth["user_id"]

