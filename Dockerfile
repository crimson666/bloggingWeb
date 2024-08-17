FROM node:18.19.0 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli@16.2.12
COPY . ./
RUN ng build
FROM nginx:latest
COPY --from=build app/dist/blogging-web /usr/share/nginx/html
EXPOSE 80

#docker build -t bloggingweb:latest .
#docker run -d -p 4200:80 bloggingweb