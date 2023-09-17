# Technical Challenge Toolbox

This is my implementation following the steps stated by toolbox for the technical challenge using Express with Node v14 for the API and Node v16 with React for the Frontend for building a API Gateway for filtering csv files, searching files and returning it to a frontend with React

## Installation

Clone this repository 
```bash
git clone https://github.com/DevKhris/files-challenge-tb.git
```

Use Docker Compose for build the images and get projects running
```bash
docker-compose up -d -v --build
```

## Usage

Once the containers are running use this urls to test the application

Files API endpoint
```bash
http://localhost:8080/
```

Files APP endpoint
```bash
http://localhost:3000/
```

## Testing

Go to project directory
```bash
cd files-api
```
or
```bash
cd files-app
```

Run test suite with command
```bash
npm test
```

## Manual Install

Go to any project directory

```bash
cd files-api
```
or
```bash
cd files-app
```

Install dependencies

```bash
npm install
```

Run project
```
npm start
```