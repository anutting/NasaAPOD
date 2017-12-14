FROM node:9.2.0
RUN npm i
RUN mkdir /srv ; mkdir /srv/www
ADD . /srv/www/
WORKDIR /srv/www
CMD [ "node", "index.js" ]

