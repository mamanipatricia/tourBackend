$ npm i -g npm // update  npm :)
## Project Initialization
---
1. express --no-view tours

2. cd folder

3. add dependencies

4. npm i sequelize-cli sequelize mysql2 express

5. npm i -D nodemon

6. reinstall all  $ npm i

## DB
1. npx sequelize init

2. COnfigure DB credential in config/config.json

## Create DB on DB server
- Nombres de Modelos en SINGULAR

// console  mycli ...
1. create database tours

// Create models and migrations
2. npx sequelize model:generate --name permission --attributes name:string
 - npx sequelize model:generate --name ct_user --attributes ctId:
integer,userId:integer

// Associations in DB
3. look at the models file 
KEYWORDS
    - belongsTo
    - belongsToMany
    - hasMany
    - ..... documentation
    - references
    - foreignKey
    - as duhh
    - from -- to /// no es command
    - through when is N:M


// run migrations
4. npx sequelize db:migrate
options: - npx sequelize db:migrate:undo
         - npx sequelize db:migrate:status    up/down

// 


5. 
