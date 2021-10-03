const db = require('../models/index');
const period = db.period;

//crear
exports.createPeriod = async(req,res)=>{
    try {
       //todo lo que queramos enviar a nuestra  
       const { body } = req;
       if(!body.description) return res.status(404).send({message :'Descripcion es requerida'});

       const create = await period.create({
           description: body.description,
       });
       return res.status(201).send({message:"Periodo creado correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }

};
//listar
exports.getPeriod = async (req, res) =>{
    try {
        const find = await period.findAll({
            where:{statusDelete: false},
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
//editar
exports.updatePeriod = async(req, res) =>{
    try {
        const {body, params}=req;

        if (!body)
          return res.status(400).send({message: "Los datos son requeridos"});
        if(!body.description) return res.status(404).send({message :'Descripcion es requerido'});
                
        const validate = await period.findOne({
            where: { id: params.id, statusDelete:false},
        });

        if (!validate) 
          return res.status(404).send({message: "No se encontro el periodo"});

        validate.description = body.description;
        validate.save();

        return res
            .status(200)
            .send({message:"Periodo actualliizado correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
//eliminar
exports.deletePeriod = async (req, res) =>{
    try {
        const { id } = req.params;
        const find = await period.findByPk(id);
        if (!find) 
          return res.status(404).send({message: "No se encontro el periodo"});
        if (find.statusDelete===true) 
          return res.status(404).send({message: "No se encontro el periodo"});
        
        find.statusDelete = true;
        find.save();
        return res
            .status(200)
            .send({message: "Periodo eliminado correctamente"});

    } catch (error) {
        return res.status(500).send(error.message);
    }
};