# Stage 1
FROM node:18.17.1-alpine as builder

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

# Stage 2
FROM nginx:1.25.3-alpine

WORKDIR /usr/share/nginx/html

COPY nginx/__CHANGE_ME__.conf /etc/nginx/conf.d/default.conf

RUN rm -rf ./*

COPY --from=builder /app/dist .

EXPOSE 3000

HEALTHCHECK CMD curl -f localhost:3000 || exit 1

CMD ["nginx", "-g", "daemon off;"]
