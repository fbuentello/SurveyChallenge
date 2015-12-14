

#About This Repo

This repo is a small application that is built with NodeJS, AngularJS, MySQL, SequelizeJS. 

###Challenges from project

1. Getting mindset back to relational databases
2. Learning Sequelize
3. Turn around time for project



###Instructions

First: **Clone the repo**

```bash
git clone https://github.com/fbuentello/SurveyChallenge.git
```
Second: **Install npm/bower modules**
Cd into the directory and run the following command:

```bash
npm install
```
```bash
bower install
```
Lastly, let's start the server:

```bash
node app.js
```

Simple go to [localhost:3000](http://localhost:3000/) to view the application. 

Click the `admin` button at the top right of the screen to view the login screen. From there, the creditials to login are:

username: **sumoMe**   
password: **test**

Once in, you will see a screen with prepopulated questions. You can simply add a question and return back to the home page to see your question if you wish to answer it.

No single user can view the same question twice.

###Future Improvements

1. Integrate PassportJS and use their sessions instead of JWTs
2. Move away from hosted DB
3. Clean up code.......ALOT
4. Master Sequelize and MYSQL(again)


##Project Structure

###app folder: Back-end Files
***config folder***   
- **auth.js**: Handles all token handling.   
- **config.js**: Contains information such as DB_URL, passwords, etc.[Would be in .gitignore in real life]    
- **index.js**: Sets up Sequelize and models

***controller folder***   
- **question.controller.js**: Handles all the logic for submitting/getting/answering a question

***models folder***   
- **question.models.js**: Sequelize Model for Question

***routes folder***   
- **question.route.js**: Contains all the routes for the Question model   
- **index.js**: Contains login route

-

###public folder: Front-end files

Pretty standard stuff, message me if confused.







