const jwt = require("jsonwebtoken");
const privateKey= 'TGF2M1ByaXZBZGEzMjEu';

exports.verifyToken = async (req,res,next)=>{
    try {
        const token = req.get('token');
        const decoded = jwt.verify(token,privateKey);

        req.user = decoded.user;
        next();
    } catch (error) {
        return res.status(200).send({message:"Token no es valido"});
    }
}