module.exports = (sequelize, DataTypes) =>
    sequelize.define('Users', {
        UserID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Email: {
            type: DataTypes.STRING
        },
        Password: {
            type: DataTypes.STRING
        },
    },{
        timestamps: false,
    })

    

    