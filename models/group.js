module.exports = (sequelize,Sequelize) =>{
    const Group = sequelize.define('group',{
        description:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Group;
};