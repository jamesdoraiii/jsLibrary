module.exports = function(sequelize, DataTypes){
    return sequelize.define('comment', {
      commentcontent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      useridofcommenter: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      postidofparent: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    })
  }