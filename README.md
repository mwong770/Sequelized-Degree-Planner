

# Sequelized Degree Planner

A Node.js and MySQL degree planner that lets students keep track of which courses they have and have not taken. 

[Check Out Sequelized Degree Planner](https://sequelized-degree-planner.herokuapp.com/)


## Table of Contents

[:computer:  Technologies Used](#technologies-used)

[:dvd:  Installation](#installation)

[:bar_chart:  MySQL Configuration](#mysql-configuration)

[:crystal_ball:  Usage](#usage)

[:credit_card:  Customer View](#customer-view)

[:ledger:  Manager View](#manager-view)

[:briefcase:  Supervisor View](#supervisor-view)

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
* Clone the Bamazon repository to your local computer.
* On your terminal, navigate to the folder where the repository is located.
* Run the command `npm install` to download all required dependencies.


## <a name="mysql-configuration"></a> :bar_chart: MySQL Configuration 

* In bamazonCustomer.js, find the following code. 

![screenshot of database connection](/screenshots/Database_Connection.png)

* Enter your MySQL password, if you have one.
* To create the database and tables and then populate the tables, you can run the .sql files in the terminal by going to the Bamazon folder and typing `mysql -uroot -p < bamazonSchema.sql` and `mysql -uroot -p < bamazonSeeds.sql`, or you can run bamazonSchema.sql and bamazonSeeds.sql in MySQL Workbench.


## <a name="usage"></a> :crystal_ball: Usage 



## <a name="features"></a> :boom: Features

* Read the latest scraped articles from NPR when first entering the site
* Read the headline, summary and byline of newly scraped articles
* Click "Read" to read the full article on NPR's website
* Add notes to articles
* Save and unsave articles
* Click "Saved" to see only saved articles
* Hide and unhide articles
* Click "Hidden" to see only hidden articles
* Click "Home" or "Scrape New Articles" to see unsaved and unhidden articles 
* Delete any comments
* Click "Scrape New Articles" to rescrape articles from NPR's site


## <a name="developer"></a> :bust_in_silhouette: Developer

* Maria Wong 


## <a name="questions-or-comments"></a> :email: Questions or Comments 

If you have any questions or comments, feel free to message me on [LinkedIn](https://www.linkedin.com/in/maria-wong/).

Thanks for checking out Sequelized Degree Planner!
