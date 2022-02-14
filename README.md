# VERTRICAL'S SEARCH ENGINE CODING CHALLENGE

Vertrical's Coding Challenge Public Repo.

**Task**: Build a search engine

**Tech Stack**: TypeScript, React, Node.js, Express (TypeScript) & MySQL

## Usage 💻🚀

Folder structure for this project contains:
- Root folder: Where docker compose, gitignore, dotenv, README and LICENSE files are located, alongside the three main application folders 
- mysql-dump folder: includes a .sql file to import as DDL and Sample data set to a MySQL Database. This database can be installed locally either from the official site: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/ or by using the docker-compose-yml configuration file provided at the root folder (NOTE: You need to have docker installed in your machine with docker-compose enabled and working properly - see NOTE ON DOCKER for docker usage details). Also, you need to configure specific credentials for a working database for this app (you can check these credentials in the sample .env file - see NOTE ON DOTENV FILES for more details).
- search-engine-backend folder: Folder for the backend side of the application. To run it manually without using docker use these commands inside of this folder (NOTE: You need to copy the sample .env file in this folder as well for env variables to work properly - see NOTE ON DOTENV FILES for more details):

    npm install
    npm run dev

- search-engine-frontend folder: Folder for the frontend side of the application. To run it manually without using docker use these commands inside of this folder (NOTE: You need to copy the sample .env file in this folder as well for env variables to work properly - see NOTE ON DOTENV FILES for more details):

    npm install
    npm start

**NOTE ON DOCKER**: In order to run the full application (frontend, backend & database) using docker (specifically docker compose), run these commands:

First, remove build folders (if they exist) both in frontend and backend directories (dist for backend, build for frontend). Then run:

At the search-engine-backend folder:

    npm run build

At the search-engine-frontend folder:

    npm run build

To deploy the full application (at root folder):

    docker-compose -f "docker-compose.yml" up -d --build

To remove all application deployments (at root folder): 

    docker-compose -f "docker-compose.yml" down

**Also, you can use the official Docker VSCode extension to deploy these containers.**

**NOTE ON DOTENV FILES**: You need to create this sample .env file and store it at the root folder and at the backend and frontend folders (if needed):

    NODE_ENV=dev
    MYSQLDB_HOST=db
    MYSQLDB_USER=root
    MYSQLDB_ROOT_PASSWORD=123456
    MYSQLDB_DATABASE=search_engine
    MYSQLDB_LOCAL_PORT=3306
    MYSQLDB_DOCKER_PORT=3306
    NODE_LOCAL_PORT=8080
    NODE_DOCKER_PORT=8080
    CLIENT_ORIGIN=http://localhost:3000
    ITEMS_API_BASE_URL=http://localhost:8080/api/items
    REACT_LOCAL_PORT=3000
    REACT_DOCKER_PORT=3000

**IMPORTANT NOTICE**: for docker compose to work properly, only the .env file at root folder is needed (env files must not be created at the backend and frontend folders due to conflicts between env variables).

## Made using 🔨

- NodeJS Engine
- NPM
- Git
- VSCode
- Docker
- GitHub
- TypeScript
- React
- Express (TypeScript)

## Author :paintbrush:

- Santiago Múnera

Made with ❤️ by Santiago Múnera.
