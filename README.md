# CodeCamp-NodeJs-Api

## The api implementation of code camp to-do using nodeJs

## To run the server with docker, Build the docker image using this command

>docker build -t "codecamp-api" .

### To start the container, run:

#### Do not forget to replace the placeholders with your enviroment variables

>docker run -d -t -i -e PORT=YOUR_PORT \
> -e MONGODB_URI=YOUR_URI \
> -e JWT_SECRET=YOUR_SECRET
> -e JWT_TIMEOUT=24h \
> -p 5000:5000/tcp codecamp-node

### To access the API documentation, visit: 

>Slocalhost:5000/api-docs

## To install the server locally,

### rename the .env.example to .env and add your enviromental variables

#### then run:

>npm instaall && npm run dev