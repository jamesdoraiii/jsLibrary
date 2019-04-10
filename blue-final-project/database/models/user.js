module.exports = function(sequelize, DataTypes){
    return sequelize.define('user', {
      usernamename: {
        type: DataTypes.STRING,
        allowNull: false
      },
      passwordhash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      usernamename: {
        type: DataTypes.STRING,
        allowNull: false
      },
    })
  }