const { crearLinkAcortadoDB, redirigirLinkDB } = require("../services/link.services")

const crearLinkAcortado = async(req, res)=>{
    const {originalUrl} = req.body
    const { shortUrl, msg, statusCode, error } = await crearLinkAcortadoDB(originalUrl)

    try {
        res.status(statusCode).json({shortUrl, msg})
    } catch {
        res.status(statusCode).json({error})
    }
}

const redirigirLink = async (req, res) => {
    const { shortCode } = req.params;
    const { originalUrl, statusCode, error } = await redirigirLinkDB(shortCode);
  
    if (error) {
      return res.status(statusCode).json({ error });
    }
  

    return res.redirect(originalUrl);
  };
  

module.exports = {
    crearLinkAcortado,
    redirigirLink
}