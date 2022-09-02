# 1. Build the app using build env
FROM node:latest AS build-env
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install --only=production
RUN npm run build

# 1. Build the app using minimal alpine env
FROM node:lts-alpine
ENV NODE_ENV production

WORKDIR /usr/src/app
RUN  npm install pm2 -g

USER node
COPY --chown=node:node --from=build-env /usr/src/app/ /usr/src/app/
COPY --chown=node:node --from=build-env /usr/src/app/.env /usr/src/app/build/
EXPOSE 3000
CMD ["npm","start:prod"]