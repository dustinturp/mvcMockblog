# mvcMockblog
mock blog app using mvc

## requirements

### Node Packages
* express
* express-handlebars
* express-session
* sequelize
* connect-session-sequelize
* mysql2
* dotenv
* bcrypt


`npm i` 

## Create DB

cd db
mysql -u USERNAME -p 
source schema.sql

### populate db

`node seed`

## deploy

`git push heroku main`

## Deployment 
[link to heroku app](https://mvc-mock-blog.herokuapp.com/)


