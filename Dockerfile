FROM node:18.13.0-bullseye-slim

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
USER node
CMD ["node", "app.js"]
