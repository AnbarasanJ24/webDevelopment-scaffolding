# Base Image => Provide Kernel and other file system 
FROM node:alpine

# Creating working directory inside conatiner
WORKDIR /usr/app

# Copy only package json to container (Cache Purpose)
COPY ./package.json ./

# Install Required Dependecies
RUN npm install

# Copy Remaining files into container
COPY ./ ./

# FInal command to start the applicayion
CMD ["npm","start"]