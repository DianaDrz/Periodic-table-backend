module.exports = (sequelize,Sequelize) =>{
    const Category = sequelize.define('category',{
        nameC:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Category;
};