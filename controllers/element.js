const db = require('../models/index');
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const uploadImages = require("../utils/uploadImages");
const element = db.element;
const category = db.category;
//crear
//1.- Alta de todo lo necesario
exports.createElement = async(req,res)=>{
    try {
       //todo lo que queramos enviar a nuestra  
       const { body } = req;
       if(!body.typeElement) return res.status(404).send({message :'typeElement es requerido'});
       if(!body.name) return res.status(404).send({message :'name es requerido'});
       if(!body.symbolQ) return res.status(404).send({message :'symbolQ es requerido'});
       if(!body.atomicNumber) return res.status(404).send({message :'atomicNumber es requerido'});
       if(!body.atomicMass) return res.status(404).send({message :'atomicMass es requerido'});
       
       let image = await uploadImages.fileupload(body.image,'/image');

       const create = await element.create({
           typeElement: body.typeElement,
           name: body.name,
           symbolQ: body.symbolQ,
           atomicNumber: body.atomicNumber,
           atomicMass: body.atomicMass,
           image: image,
           id_category: body.id_category,
           id_group: body.id_group,
           id_period: body.id_period,
       });
       return res.status(201).send({message:"Elemento creada correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }

};
//listar
exports.getElement = async (req, res) =>{
    try {        
        //Busquedas por nombre de categorias
        const {nameCategory}= req.query;
        if(nameCategory)
        {
            const find = await element.findAll({
                where:{statusDelete: false},
                include:{
                    model:category,
                    where:{name:{[Op.iRegexp]:nameCategory}}
                },
            });
            return res.status(200).send(find);
        }
        //3.- Traer la información de 1 o N elementos
        const {page,size}=req.query;
        if(page,size){
            const elem = await element.findAndCountAll({
                limit:size,
                offset:page*size
            });
            return res.status(200).send(elem);
        }
        // 2.- Traer la información de la tabla
        const find = await element.findAll({
            where:{statusDelete: false},
            //order:['id_period', 'atomicNumber']

        });
        //order = [[atomicNumber, 'DESC']]
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
// 4. Editar
exports.updateElement = async(req, res) =>{
    try {
        const {body, params}=req;

        if (!body)
          return res.status(400).send({message: "Los datos son requeridos"});
        if(!body.typeElement) return res.status(404).send({message :'typeElement es requerido'});
        if(!body.name) return res.status(404).send({message :'name es requerido'});
        if(!body.symbolQ) return res.status(404).send({message :'symbolQ es requerido'});
        if(!body.atomicNumber) return res.status(404).send({message :'atomicNumber es requerido'});
        if(!body.atomicMass) return res.status(404).send({message :'atomicMass es requerido'});
             
        
        const validate = await element.findOne({
            where: { id: params.id, statusDelete:false},
        });

        if (!validate) 
          return res.status(404).send({message: "no se encontro el Elemento"});

        validate.typeElement = body.typeElement;
        validate.name = body.name;
        validate.symbolQ = body.symbolQ;
        validate.atomicNumber = body.atomicNumber;
        validate.atomicMass = body.atomicMass;
        validate.save();

        return res
            .status(200)
            .send({message:"Elemento se actualliizo correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
//5. Eliminar
exports.deleteElement = async (req, res) =>{
    try {
        const { id } = req.params;
        const find = await element.findByPk(id);
        if (!find) 
          return res.status(404).send({message: "No se encontro el elemento"});
        if (find.statusDelete===true) 
          return res.status(404).send({message: "No se encontro el elemento"});
        
        find.statusDelete = true;
        find.save();
        return res
            .status(200)
            .send({message: "Elemento eliminado correctamente"});

    } catch (error) {
        return res.status(500).send(error.message);
    }

};

exports.orderElementsCategory = async (req, res) =>{
    try {        
        const find = await element.findAll({
            where:{statusDelete: false},
            include:{
                model:category, 
                order:['name','atomicNumber']
            },
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
exports.orderElementsGroups = async (req, res) =>{
    try {        
        const find = await element.findAll({
            where:{statusDelete: false},
            order:['id_group', 'atomicNumber']            
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};
exports.orderElementsPeriod = async (req, res) =>{
    try {        
        const find = await element.findAll({
            where:{statusDelete: false},
            order:['id_period', 'atomicNumber']            
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(error.message);
        
    }
};