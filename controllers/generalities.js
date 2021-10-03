const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db= require("../models/index");
const user = db.user;
const privateky='TGF2M1ByaXZBZGEzMjEu';

const { expireIn } = '1h';
exports.login= async(req,res)=>{
    try {
        const {body} = req;

        if(!body.email) return res.status(404).send({message:"El email es requerido"});
        if(!body.password) return res.status(404).send({message:"El password es requerido"});

        const cUser = await user.findOne({
            where:{
                email: body.email,
                statusDelete: false,
            }
        });

        if(!cUser) return res.status(404).send({message:"Credenciales invalidas"});
        if(!bcrypt.compareSync(body.password,cUser.password)) return res.status(404).send({message:"Credenciales invalidas"});

        const response ={
            id: cUser.id,
            name:cUser.name,
            email:cUser.email,
        };
        let token = jwt.sign(
            {
                user:response,
            },
            privateky,
            expireIn
        );
        return res.status(200).send({
            user: response,
            token,
        });
    } catch (error) {
        return res.status(500).send(error.message);
    }
}