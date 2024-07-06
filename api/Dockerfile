FROM node:20.12.2

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

COPY . .
#ENTRYPOINT [ "./wait.sh" ]
#CMD ["nodemon", "index.js"]
COPY wait-for-it.sh /wait-for-it.sh
CMD ["./wait-for-it.sh", "db:3306", "--", "node", "index.js"]
