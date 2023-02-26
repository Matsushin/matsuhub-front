FROM node:16.15.1-alpine
WORKDIR /app

RUN apk update && \
    apk add git && \
    apk add --no-cache curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh
ENV PATH $HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH
ENV HOST=0.0.0.0
ENV PORT=80

COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY . .

RUN yarn build

EXPOSE 80
CMD ["yarn", "start"]
