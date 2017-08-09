
# Sequelized Degree Planner

A Node.js and MySQL degree planner that lets students organize courses by semester planned, registered, or completed

[Check Out Sequelized Degree Planner](https://sequelized-degree-planner.herokuapp.com/)


## Table of Contents

[:computer:  Technologies Used](#technologies-used)

[:dvd:  Installation](#installation)

[:bar_chart:  MySQL Configuration](#mysql-configuration)

[:crystal_ball:  Usage](#usage)

[:boom:  Features](#features)

[:bust_in_silhouette:  Developer](#developer)

[:email:  Questions or Comments](#questions-or-comments)


## <a name="technologies-used"></a> :computer: Technologies Used 

* Node.js
* Heroku
* MySQL
* MySQL Workbench
* JavaScript
* Handlebars
* Bootstrap
* HTML5
* CSS3
* Node Modules
	* [mysql](https://www.npmjs.com/package/mysql) 
	* [sequelize](https://www.npmjs.com/package/sequelize)
	* [express](https://www.npmjs.com/package/express)
	* [body-parser](https://www.npmjs.com/package/body-parser) 
	* [method-override](https://www.npmjs.com/package/method-override) 
	* [express-handlebars](https://www.npmjs.com/package/express-handlebars) 


## <a name="installation"></a> :dvd: Installation 

* Install [Node.js](https://nodejs.org/en/download/) and [MySQL](https://www.mysql.com/downloads/), if you don't have them.
* Optional: Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/), if you don't have it.
* Clone the Sequelized Degree Planner repository to your local computer.
* On your terminal, navigate to the folder where the repository is located.
* Run the command `npm install` to download all required dependencies.


## <a name="mysql-configuration"></a> :bar_chart: MySQL Configuration 

* Create a folder called config with a file called config.json
* Enter the following code in the config.json file: 

![screenshot of configuration file](/screenshots/config_json.png)

* Enter your MySQL password in the config.json file, if you have one.
* To create the database run `mysql -uroot -p` in your terminal to connect to MySQL, then run the command `create database courses_db`. Alternately, you can run the command `Create Database courses_db` in MySQL Workbench.

![screenshot of MySQL database creation](/screenshots/mysql.png)

## <a name="usage"></a> :crystal_ball: Usage 

* On your terminal, navigate to the folder where the repository is located.
* Run the command `node server.js` to begin using the app.


## <a name="features"></a> :boom: Features

* Users can enter course information -- course name, semester took/will take, year took/will take, credit hours, whether planning on taking the course, currently registered for the course, or completed the course (optional - defaults to planned), and the grade received (optional - defaults to N/A, if course completed)
* Course information entered is displayed under Planned, Registered, or Completed categories
* Courses under each category are displayed in ascending order by semester/year 
* Credit totals are displayed for Planned, Registered, and Completed categories
* The user can click the pencil icon to edit course information
* Users can delete course information
* Users can move courses from Planned to Registered by clicking the 'Registered' button
* Users can move courses from Registered to Completed, and enter the grade received, by clicking the 'Completed' button


## <a name="developer"></a> :bust_in_silhouette: Developer

* Maria Wong 


## <a name="questions-or-comments"></a> :email: Questions or Comments 

If you have any questions or comments, feel free to message me on [LinkedIn](https://www.linkedin.com/in/maria-wong/).

Thanks for checking out Sequelized Degree Planner!
