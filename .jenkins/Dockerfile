# bearersh/node-corp:x
FROM node:10-alpine


RUN apk update && apk upgrade && apk add vips-dev fftw-dev build-base --update-cache \
      --repository https://alpine.global.ssl.fastly.net/alpine/edge/testing/ \
      --repository https://alpine.global.ssl.fastly.net/alpine/edge/main

# Installs latest Chromium (68) package.
RUN  apk add --no-cache --virtual \ 
      build-dependencies \
      gcc \
      python-dev \
      python2 \
      curl \
      jq \
      && rm -rf /var/cache/apk/* \
      && curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py \
      && python get-pip.py \
      && pip install awscli \
      && yarn global add sharp


# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Puppeteer v1.4.0 works with Chromium 68.
RUN yarn add puppeteer@1.4.0