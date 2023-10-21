# RSM-Ranch
This website allows the RSM Ranch to post owned horses to be viewed by guests of their website.

# Tech Stack
This website uses react typescript for front end and node js for backend. The website currently uses mongoose to interact with a mongoDB database.
The project is set up to use docker witch will allow for quick deployment. 

## Set up
Before running the Project, a few things must be first set up. 
- Create a .env file in the client directory.
- Add the following to the client env file
  ```
  REACT_APP_SERVER_ADDRESS={Your server Address here}
  ```
  Remember to replace *{Your server Address here}* With your actual server address. For example
  ```
  REACT_APP_SERVER_ADDRESS=http://localhost:3001
  ```
- Create another .env file in the server directory.
- Add the following to the server env file
```
PORT={Server port}
DB_HOST={MongoDB Database Host}
DB_USER={username}
DB_PASSWORD={Password}
SECRET_KEY={Secret key}
CLIENT_ORGIN={Address of Frontend}
```
Remember to replace everything with your actual info. For example
```
PORT=3000
DB_HOST=database.qasdfgh.mongodb.net
DB_USER=testUsername
DB_PASSWORD=test1234
SECRET_KEY=abcdefg
CLIENT_ORGIN=http://localhost
```
- Create another .env file in the server directory.

## Running Project
To build images of both the front end and backend and create a container, go to the project directory and run `docker-compose up --build`.
This will run both the frontend and backend on the desired ports specefied in your env files. (Front end is usually port 80)
