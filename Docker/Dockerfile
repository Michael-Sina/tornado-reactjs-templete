# from offical base image.
FROM centos:centos7
MAINTAINER Michael <yang@fosterlink.co.jp>

# Update system and install basic pkts.
RUN yum install -y --nogpgcheck deltarpm  && \
    yum -y --nogpgcheck update  && \
    yum -y --nogpgcheck groupinstall "Development Tools" && \
    yum install -y --nogpgcheck ibus-kkc vlgothic-*　&& \
    yum install -y --nogpgcheck gcc gcc-c++ git make openssl-devel bzip2-devel vim net-tools sudo pwgen mc links curl && \
    yum install -y --nogpgcheck https://centos7.iuscommunity.org/ius-release.rpm  && \
    yum install -y --nogpgcheck python-setuptools python36u-devel pygobject2-devel pyOpenSSL && \
    yum clean all


# Install openssh server.
RUN yum install -y --nogpgcheck openssh-server && \
    yum clean all

# Install and setup up supervisor.
RUN easy_install supervisor && \
    echo_supervisord_conf > /etc/supervisord.conf  && \
    mkdir -p /var/log/supervisor  && \
    touch /var/run/supervisor.sock  && \
    echo '[include]'  >> /etc/supervisord.conf  && \
    echo 'files = /home/fosterlink/shrpa/supervisord/*.ini'  >> /etc/supervisord.conf

# Install and setup nginx.
RUN yum install -y --nogpgcheck http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm && \
    yum install -y --nogpgcheck nginx  && \
    yum clean all

# Install mysql server.
RUN yum localinstall -y --nogpgcheck http://dev.mysql.com/get/mysql57-community-release-el7-8.noarch.rpm && \
    yum install -y --nogpgcheck mysql-community-server mysql-community-devel  && \
    yum install -y --nogpgcheck MySQL-python && \
    yum clean all

# Install python3 envs.
RUN yum -y install --nogpgcheck python36u  python36u-pip python36u-devel && \
    yum clean all

# Install miniconda3
RUN curl -sSL https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh -o /tmp/miniconda.sh && \
    bash /tmp/miniconda.sh -bfp /home/fosterlink/miniconda3 && \
    rm -rf /tmp/miniconda.sh  && \
    echo 'export PATH="/home/fosterlink/miniconda3/bin:$PATH" ' >>  ~/.bashrc && \
    source ~/.bashrc

# Install required pkts.
RUN /home/fosterlink/miniconda3/bin/pip install mock pep8 pyOpenSSL simplejson requests package_name setuptools  && \
    /home/fosterlink/miniconda3/bin/pip install pytz jwt bcrypt tornado python-dateutil Crypto pycrypto && \
    /home/fosterlink/miniconda3/bin/pip install pycrypto python-dateutil pyJWT react ConfigParser  && \
    /home/fosterlink/miniconda3/bin/conda install -y mysql-connector-python

# Install nvm
RUN git clone git://github.com/creationix/nvm.git ~/.nvm  && \
	echo . ~/.nvm/nvm.sh >> ~/.bashrc  && \
	source ~/.bashrc

# Install npm
RUN yum install -y --nogpgcheck npm  && \
    yum clean all

# Install ruby
RUN yum install -y --nogpgcheck ruby && \
    yum install -y --nogpgcheck ruby-devel  && \
    yum clean all  && \
    gem install bundler

# Set time and language envs.
ENV LANG=ja_JP.UTF-8
ENV TZ=Asia/Tokyo

# Set Docker Ports
EXPOSE 22 80 443 3306 8000-8020
CMD ["/sbin/init"]
