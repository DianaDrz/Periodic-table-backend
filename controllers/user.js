const db = require('../models/index');
const bcrypt = require("bcryptjs");
const user = db.user;

//crear
exports.createUser = async(req,res)=>{
    try {
       //todo lo que queramos enviar a nuestra  
       const { body } = req;
       if(!body.name) return res.status(404).send({message :'Nombre es requerido'});
       if(!body.email) return res.status(404).send({message :'Email es requerido'});
       if(!body.password) return res.status(404).send({message :'Password es requerido'});
       
       let encriptedPassword = bcrypt.hashSync(body.password,10);
       console.log('La contraseña \n',encriptedPassword);

       const create = await user.create({
           name: body.name,
           email: body.email,
           password: encriptedPassword,
       });
       return res.status(201).send({message:"Usuario creado correctamente"});
    } catch (error) {
        return res.status(500).send(error.message);
    }

};
//listar
exports.getUser = async (req, res) =>{
    try {
        const find = await user.findAll({
            where:{statusDelete: false},
        });
        return res.status(200).send(find);
    } catch (error) {
        return res.status(500).send(message.error);
        
    }
};
//editar
exports.updateUser = async(req, res) =>{
    try {
        const {body, params}=req;

        if (!body)
          return res.status(400).send({message: "Los datos son requeridos"});
        if(!body.name) return res.status(404).send({message :'name es requerido'});
        if(!body.email) return res.status(404).send({message :'email es requerido'});
        if(!body.password) return res.status(404).send({message :'password es requerido'});
                
        let encriptedPassword = bcrypt.hashSync(body.password,10);
        console.log('La contraseña \n',encriptedPassword);

        const validate = await user.findOne({
            where: { id: params.id, statusDelete:false},
        });

        if (!validate) 
          return res.status(404).send({message: "no se encontro al usurio"});

        validate.name = body.name;
        validate.email = body.email;
        validate.password = encriptedPassword;
        validate.save();

        return res
            .status(200)
            .send({message:"Usuario se actualliizo correctamente"});
    } catch (error) {
        return res.status(500).send(message.error);
    }
};
//eliminar
exports.deleteUser = async (req, res) =>{
    try {
        const { id } = req.params;
        const find = await user.findByPk(id);
        if (!find) 
          return res.status(404).send({message: "no se encontro al usuario"});
        if (find.statusDelete===true) 
          return res.status(404).send({message: "no se encontro al usuario"});
        
        find.statusDelete = true;
        find.save();
        return res
            .status(200)
            .send({message: "Usuario eliminado correctamente"});

    } catch (error) {
        
    }

};