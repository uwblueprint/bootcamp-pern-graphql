# Bootcamp: PERN Stack (GraphQL Backend)

This repo contains the starter-code for our bootcamp activity.

## Tech Stack

We will be using the PERN stack. These technologies are easy to learn, allow for fast development speeds, and are popularly used in Blueprint.

* Frontend: React + Redux
* Backend: Node.js + Express.js + Apollo Server
* Database: PostgreSQL

## Setup

The dev environment is containerized with Docker to minimize setup efforts.

1. Install Docker Desktop (skip tutorials): [MacOS](https://docs.docker.com/docker-for-mac/install/) | [Windows (Home)](https://docs.docker.com/docker-for-windows/install-windows-home/) | [Windows (Pro, Enterprise, Education)](https://docs.docker.com/docker-for-windows/install/) | [Linux](https://docs.docker.com/engine/install/#server)
```bash
# verify your installation by running the following in a terminal
$ docker --version
$ docker-compose --version
```

2. Clone this repo and go into the project directory
```
$ git clone https://github.com/uwblueprint/bootcamp-pern-graphql.git
$ cd bootcamp-pern-graphql
```

3. Fill in backend environment variables in `/backend/.env.sample`, then rename the file to `.env`
```
POSTGRES_DB=bootcamp
POSTGRES_USER=<insert-username-of-your-choice>
POSTGRES_PASSWORD=<insert-password-of-your-choice>
DB_HOST=localhost
```

4. Fill in frontend environment variables in `/frontend/.env.sample`, then rename the file to `.env`
```
REACT_APP_GRAPHQL_SERVER_URL=http://localhost:5000
```

5. Set `eraseDatabaseOnSync` to true in `/backend/server.js` so the database will get seeded with test data when we run our application

6. Run the application
```
$ docker-compose up --build
```
You should set `eraseDatabaseOnSync` back to `false` now.

7. Go to http://localhost:3000 in your browser. You should see this:

![Complete setup](docs/complete_setup.PNG)

## Useful Commands for Development

To first setup the application run the following command:

```
$ docker-compose up --build
```

On subsequent runs you can omit the --build tag

```
$ docker-compose up
```

Keep in mind that both the frontend and backend have hot reload enabled so you will rarely need to restart the application.
