module.exports = (sequelize,Sequelize) =>{
    const Element = sequelize.define('element',{
        typeElement:{
            type: Sequelize.STRING,
        },
        name:{
            type: Sequelize.STRING,
        },
        symbolQ:{
            type: Sequelize.STRING,
        },
        atomicNumber:{
            type: Sequelize.INTEGER,
        },
        atomicMass:{
            type: Sequelize.STRING,
        },
        image:{
            type: Sequelize.STRING,
        },
        statusDelete:{
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
    });
    return Element;
};