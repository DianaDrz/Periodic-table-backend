const fs = require("fs");
const path = require("path");

exports.fileupload = async function(file, namePath){
    try {
        //console.log('This is file de los params \n',file);
        let matches = file.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        let response = {};
        //console.log('This is file de los maches \n',matches);
        if(matches.length !==3) return new Error("String invalido");


        response.type = matches[1];
        response.data = Buffer.from(matches[2],"base64");
        let imageBuffer = response.data;

        //console.log('esto es la imagen a guardar \n',imageBuffer);
        if(!fs.existsSync( `${path.dirname(require.main.filename)}/public${namePath}`)){
            fs.mkdirSync(
                `${path.dirname(require.main.filename)}/public${namePath}`,
                true
            );
        }

        let extension = response.type.split('/');
        let fileName = `${Date.now()}.${extension[1]}`;
        let fileRoute = `${namePath}/${fileName}`;

        fs.writeFileSync(
            `${path.dirname(require.main.filename)}/public${fileRoute}`,
            imageBuffer,
            "utf8"
        );

        return fileRoute;

    } catch (error) {
        return new Error("error del servidor");
    }

}