FROM mysql:latest
COPY ./database /docker-entrypoint-initdb.d
EXPOSE 3306
