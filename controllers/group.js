const db = require('../models/index');
const group = db.group;

//crear
exports.createGroup = async(req,res)=>{
    try {
       //todo lo que queramos enviar a nuestra  
       const { body } = req;
       if(!body.description) return res.status(404).send({message :'Descripcion es requerida'});

       const create = await group.create({
           description: body.description,
       });
       return res.status(201).send({message:"Grupo creado correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }

};
//listar
exports.getGroup = async (req, res) =>{
    try {
        const find = await group.findAll({
            where:{statusDelete: false},
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
//editar
exports.updateGroup = async(req, res) =>{
    try {
        const {body, params}=req;

        if (!body)
          return res.status(400).send({message: "Los datos son requeridos"});
        if(!body.description) return res.status(404).send({message :'Descripcion es requerido'});
                
        const validate = await group.findOne({
            where: { id: params.id, statusDelete:false},
        });

        if (!validate) 
          return res.status(404).send({message: "No se encontro el grupo"});

        validate.description = body.description;
        validate.save();

        return res
            .status(200)
            .send({message:"Grupo actualliizado correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
//eliminar
exports.deleteGroup = async (req, res) =>{
    try {
        const { id } = req.params;
        const find = await group.findByPk(id);
        if (!find) 
          return res.status(404).send({message: "No se encontro el grupo"});
        if (find.statusDelete===true) 
          return res.status(404).send({message: "No se encontro el grupo"});
        
        find.statusDelete = true;
        find.save();
        return res
            .status(200)
            .send({message: "Grupo eliminado correctamente"});

    } catch (error) {
        return res.status(500).send(error.message);
    }
};