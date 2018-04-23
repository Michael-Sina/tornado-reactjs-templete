# from offical base image.
FROM ubuntu:16.04
LABEL maintainer="mike-sino@mike-sino.eu.org"

# Update system and install basic pkts.
RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install npm curl sudo build-essential python-software-properties
RUN npm install npm -g

RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs

RUN mkdir /app/
WORKDIR app
RUN mkdir /reactjs-server/

# Set Docker Ports
EXPOSE 5000 8080

CMD ["/sbin/init"]
