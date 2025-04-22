const { nanoid } = require("nanoid");
const LinkModel = require("../model/link.model");


const crearLinkAcortadoDB = async(originalUrl)=>{
    try {
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(originalUrl)) {
          return {
            error: "URL inválida. Asegúrate de que esté bien formada.",
            statusCode: 400,
          };
        }
    
        const shortCode = nanoid(4);
        const shortUrl = `${process.env.BACKEND_URL}/link/${shortCode}`;
    
        const linkGenerado = new LinkModel({
            originalUrl,
            shortCode,
            shortUrl,
          });

        await linkGenerado.save()
         
        return{
            shortUrl,
            msg: 'Url acortada o creada con exito',
            statusCode: 201
        }
    } catch (error) { 
        return{
            error,
            statusCode: 500
        }
    }
}


const redirigirLinkDB = async (shortCode) => {
    const link = await LinkModel.findOne({ shortCode });

    if (!link) {
        return {
            error: 'No se encontró el shortCode (simulado)',
            statusCode: 404
        };
    }

    return {
        originalUrl: link.originalUrl,
        statusCode: 200
    };
};



module.exports = {
    crearLinkAcortadoDB,
    redirigirLinkDB
}