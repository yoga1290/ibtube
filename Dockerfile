FROM node:8.15.1-alpine

EXPOSE 4200:80
WORKDIR  /usr/app
COPY . .

# before building image
RUN npm i
RUN npm run test
RUN npm run build

# execute on the runtime:
CMD npm run test
