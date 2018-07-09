[![](https://images.microbadger.com/badges/image/mikesino/tornado-reactjs-scaffold-with-docker.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/mikesino/tornado-reactjs-scaffold-with-docker.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker "Get your own version badge on microbadger.com")

[![](https://images.microbadger.com/badges/image/mikesino/tornado-reactjs-scaffold-with-docker:back-end.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker:back-end "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/mikesino/tornado-reactjs-scaffold-with-docker:back-end.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker:back-end "Get your own version badge on microbadger.com")

[![](https://images.microbadger.com/badges/image/mikesino/tornado-reactjs-scaffold-with-docker:front-end.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker:front-end "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/mikesino/tornado-reactjs-scaffold-with-docker:front-end.svg)](https://microbadger.com/images/mikesino/tornado-reactjs-scaffold-with-docker:front-end "Get your own version badge on microbadger.com")

# Tornado-Reactjs-Scaffold

Docker + ubuntu:16.04 + Tornado + Reactjs(Ant-Design) + MySQL

## Develop Environment

### Develop OS

docker base image ubuntu:16.04

### Mock Server

[Json Server](http://jsonplaceholder.typicode.com/): [localhost:5000](localhost:5000)

### Frontend

1. language: js
2. framework: Reactjs(Ant-Design)


### Backend

1. language: Python3
2. framework: Tornado
3. process manager: supervisor
4. session: JWT (Json Web Token)
5. database: MySQL Community Server 5.7.18

### Version

Github

## Usage

### start docker

1. run docker images
   
```
docker-compose up -d
```

2. access to backend docker bash
　 
```
docker exec -it tornado bash
```

3. access to frontend docker bash

```
docker exec -it react sh
```
