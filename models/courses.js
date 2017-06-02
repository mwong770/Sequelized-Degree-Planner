//replace mysql model with sequelized equivalent
//edit model and initialize migration file to make devoured field carry a default value of false -otherwise bugs
//sync models

//Tier 2- Add a customer association -Create at least one new customer model and connect it to other model.
//ex. logs customer and which burger, or customer and many burgers - modify handlebars and css as needed

//Tier 3 - add validation to models -burger's name can't be null, burger's devoured status is false by default, 
//and customer's name can't be null
//order the bugrgers you send back to the user in alphabetical order using the sequelize order option

module.exports = function(sequelize, DataTypes) {
  
  var Courses = sequelize.define("Courses", {
    course_name: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
        validate: {
            not: /[^a-zA-Z\d\s:]/,
            notEmpty: true
        }
    },
    planned: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    current: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    semester: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 20172
    }
    // ,
    // classMethods: {
    //     associate: function(models) {
    //         Courses.belongsTo(models.Plans, {
    //             onDelete: "cascade",
    //             foreignKey: {
    //                 allowNull: true
    //             }
    //         });
    //     }
    // }
  },
 
    { 
        timestamps: false
    }
  );
  return Courses;
};



