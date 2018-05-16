# from offical base image.
FROM ubuntu:16.04
LABEL maintainer="mike-sino@mike-sino.eu.org"

# Update system and install basic pkts.
RUN apt-get update && apt-get -y upgrade  && \
    apt-get -y install build-essential sudo git curl

# Install miniconda3
RUN curl -LO -k https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh  && \
    bash Miniconda3-latest-Linux-x86_64.sh -p /miniconda -b  && \
    rm Miniconda3-latest-Linux-x86_64.sh
ENV PATH $PATH:/miniconda/bin
RUN conda update -y conda  && \
    conda upgrade -y pip && \
    rm -r "/miniconda/pkgs/" && \
    conda clean --all

# Install python moduels
COPY ./init/requirements.txt /tmp/requirements.txt
RUN pip install -q -U -r /tmp/requirements.txt

# Install jupyter lab and extensions
RUN conda install -c conda-forge jupyterLab && \
    mkdir /notebook/ && \
    conda install -c conda-forge nodejs && \
    jupyter labextension install jupyterlab-drawio && \
    jupyter labextension install @jupyterlab/github

# Install python2 and python3 kernels
RUN conda create -n python2 python=2.7 ipykernel && \
    . activate python2 && \
    python -m ipykernel install --user --name=python2 --display-name=python2 && \
    . deactivate

# Install mysql kernel for jupyter
RUN pip install git+https://github.com/shemic/jupyter-mysql-kernel

# Set Docker env
EXPOSE 8080 8000

CMD ["/sbin/init"]
