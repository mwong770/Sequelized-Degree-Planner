
module.exports = function(sequelize, DataTypes) {
    var Courses = sequelize.define("Courses", 
        {
            course_name: {
                type: DataTypes.STRING,
                allowNull: false,
                required: true,
                validate: {
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
                type: DataTypes.STRING,
                allowNull: false
            },
            year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            semester_code: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            credits: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            grade: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        { 
            timestamps: false
        }
    );
    return Courses;
};



