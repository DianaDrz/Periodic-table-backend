const express = require("express");
const morgan = require("morgan");

const fileUpload = require("express-fileupload");
const enrutador = require("./routes/routes");
const db = require("./models/index");

const app = express();
db.sequelize.sync();

//Para eliminar las tablas o vaciar los cambios
/*db.sequelize.sync({force:true}).then(() =>{
    console.log("tablas restablecidas");
});*/


//midelwares --> routes -->statics files y start server
//MIDELWARES
app.use(morgan('dev'));
app.use(express.json({limit:'50mb'}));

//RUTAS Routes
//post get put delete
app.use("/api",enrutador);

//static files
app.use(fileUpload());

//routes
app.use("/api",enrutador);
app.use("/public",express.static(__dirname + "/public"));
//START
app.listen(3000,()=>{
    console.log('Servidor esta corriento en el pueto',3000);
})
