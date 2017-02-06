FROM node:7.2.0
WORKDIR /code
RUN npm install -g yarn
ADD package.json /code/package.json
ADD yarn.lock /code/yarn.lock
RUN yarn install
CMD yarn start
