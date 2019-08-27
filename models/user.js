module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
        ,
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        website: {
            type: DataTypes.STRING(100),
            allowNull: true,
        },
        province:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        city:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        district:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        street:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        zip:{
            type: DataTypes.STRING(20),
            allowNull: true,
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull: false,
        }
    }, {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    });
};