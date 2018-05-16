# Tornado-Reactjs-Scaffold
Docker + ubuntu:16.04 + Tornado + Reactjs(Ant-Design) + MySQL

## Develop Environment

### Develop OS
ubuntu:16.04

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