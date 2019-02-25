FROM node:8 as builder

WORKDIR "/opt/app"

COPY . ./

RUN npm install
ARG configuration=production

RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.15 as runner

COPY --from=builder /opt/app/dist/out/ /usr/share/nginx/html
COPY --from=builder /opt/app/default.conf /etc/nginx/conf.d/default.conf