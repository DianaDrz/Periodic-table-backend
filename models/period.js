module.exports = (sequelize,Sequelize) =>{
    const Period = sequelize.define('period',{
        description:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Period;
};