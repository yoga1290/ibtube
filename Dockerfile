FROM node:8.15.1-alpine

ENV YOUTUBE_API_KEY=''
EXPOSE 80
WORKDIR  /usr/app
COPY . .

RUN rm -fr node_modules


# before building image
RUN npm i
RUN npm i -g http-server
RUN npm run test

#RUN npm run build

# execute on the runtime:
CMD cat src/environments/environment.ts \
 | sed -e "s/key: .*/key: '${YOUTUBE_API_KEY}'/g" > src/environments/environment.docker.ts
CMD mv src/environments/environment.docker.ts src/environments/environment.ts
# ... or may be it would be better to mount the whole enviroment file?

#CMD npm start -- --env=docker
CMD npm build:docs

CMD http-server ./docs -p 80