module.exports = (sequelize,Sequelize) =>{
    const Group = sequelize.define('group',{
        numberGroup:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Group;
};