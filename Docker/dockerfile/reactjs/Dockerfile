# from offical base image.
FROM ubuntu:16.04
LABEL maintainer="mike-sino@mike-sino.eu.org"

# Update system and install basic pkts.
RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install npm

RUN mkdir /app/
WORKDIR app
RUN mkdir /reactjs-server/

# Set Docker Ports
EXPOSE 5000 8080

CMD ["/sbin/init"]
