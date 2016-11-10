FROM node

RUN mkdir /code
WORKDIR /code
COPY . /code
RUN npm install

CMD ["/usr/local/bin/node", "./index.js"]
EXPOSE 8000
