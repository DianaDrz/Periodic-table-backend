const db = require('../models/index');
const category = db.category;
const element = db.element;
//crear
exports.createCategory = async(req,res)=>{
    try {
       //todo lo que queramos enviar a nuestra  
       const { body } = req;
       if(!body.nameC) return res.status(404).send({message :'Nombre es requerido'});

       const create = await category.create({
           nameC: body.nameC,
       });
       return res.status(201).send({message:"Categoria creada correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }

};
//listar
exports.getCategory = async (req, res) =>{
    try {
        const find = await category.findAll({
            where:{statusDelete: false},
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
//editar
exports.updateCategory = async(req, res) =>{
    try {
        const {body, params}=req;

        if (!body)
          return res.status(400).send({message: "Los datos son requeridos"});
        if(!body.nameC) return res.status(404).send({message :'name es requerido'});
                
        const validate = await category.findOne({
            where: { id: params.id, statusDelete:false},
        });

        if (!validate) 
          return res.status(404).send({message: "No se encontro la categoria"});

        validate.nameC = body.nameC;
        validate.save();

        return res
            .status(200)
            .send({message:"Categoria actualliizada correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
//eliminar
exports.deleteCategory = async (req, res) =>{
    try {
        const { id } = req.params;
        const find = await category.findByPk(id);
        if (!find) 
          return res.status(404).send({message: "No se encontro la categoria"});
        if (find.statusDelete===true) 
          return res.status(404).send({message: "No se encontro la cateogoria"});
        
        find.statusDelete = true;
        find.save();
        return res
            .status(200)
            .send({message: "Categoria eliminada correctamente"});

    } catch (error) {
        return res.status(500).send(error.message);
    }
};
exports.orderElementsCategory = async (req, res) =>{
    try {        
        const find = await category.findAll({
            where:{statusDelete: false},
            include:{
                model:element,            
            },
            order:['nameC']
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);       
    }
};