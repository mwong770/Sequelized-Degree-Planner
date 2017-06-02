
module.exports = function(sequelize, DataTypes) {
    var Plans = sequelize.define("Plans", {
        plan_name: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
            validate: {
                not: /[^a-zA-Z\d\s:]/,
                notEmpty: true
            } 
        }
    }, 
        { 
            timestamps: false
        }
    // ,
    // {
    //     classMethods: {
    //         associate: function(models) {
    //           Courses.hasMany(models.Plans);
    //         }
    // }
    // }
    );
    return Plans;
};


