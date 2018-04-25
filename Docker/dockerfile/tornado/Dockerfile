# from offical base image.
FROM ubuntu:16.04
LABEL maintainer="mike-sino@mike-sino.eu.org"

# Update system and install basic pkts.
RUN apt-get update && apt-get -y upgrade
RUN apt-get -y install build-essential sudo
RUN apt-get -y install git
RUN apt-get install -y \
    curl 

# Install Miniconda3
RUN curl -LO https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
RUN bash Miniconda3-latest-Linux-x86_64.sh -p /miniconda -b
RUN rm Miniconda3-latest-Linux-x86_64.sh
ENV PATH $PATH:/miniconda/bin
RUN conda update -y conda
RUN pip install --upgrade pip

RUN mkdir /app/
WORKDIR app
RUN mkdir /tornado-server/

# Install python moduels
COPY ./init/requirements.txt /tmp/requirements.txt
RUN pip install -q -U -r /tmp/requirements.txt

# Install Jupyter
RUN conda install jupyter
RUN mkdir /notebook/
RUN jupyter notebook --generate-config
COPY init/jupyter_notebook_config.py /root/.jupyter/jupyter_notebook_config.py

# Set Docker Ports
EXPOSE 5000 8080

CMD ["/sbin/init"]
