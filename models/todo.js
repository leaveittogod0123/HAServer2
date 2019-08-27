module.exports = (sequelize, DataTypes) => {
    return sequelize.define('todo', {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
    });
};

