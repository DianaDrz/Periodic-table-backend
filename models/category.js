module.exports = (sequelize,Sequelize) =>{
    const Category = sequelize.define('category',{
        name:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Category;
};