module.exports = function(sequelize, DataTypes){
    return sequelize.define('post', {
      trackname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      artistname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      link: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numberoflikes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      useridofposter: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    })
  }