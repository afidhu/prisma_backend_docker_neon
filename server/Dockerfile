FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Install dependencies
RUN npm install

# Build TS
RUN npx tsc

# Run the compiled TS
CMD ["npx", "ts-node", "src/index.ts"]
