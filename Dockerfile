FROM nginx:1.15.12-alpine
COPY ./build/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf