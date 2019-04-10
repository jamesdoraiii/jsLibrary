module.exports = (sequilize, DataTypes) => {
    const User = sequilize.define('User', {
        
        firstName : {
            type: DataTypes.STRING,
            allowNull : false
        },
        
        lastName : {
            type: DataTypes.STRING,
            allowNull : false
        },

        email : {
            type: DataTypes.STRING,
            allowNull : false,
            unique : true
        },

        password: {
            type: DataTypes.STRING,
            allowNull : false,
        }
    });
    
    return User;
}