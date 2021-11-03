const Url = require('../../models/url');

const getOriginalService = (req,res,next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { shortUrl } = req.params;
 
      const url = await Url.findOne({ shortUrl: shortUrl });

      if (url) {
        const originalUrl = url.originalUrl;
        url.visitCount++;
        const visitCount = url.visitCount;
        await url.updateOne({visitCount});
        resolve(originalUrl);
      }
      else{
        // invalid url
        let e = new Error("invalid URL");
        e.status = 404;
        console.log(e);
        reject(e);
      }
    } catch (e){
      e.status = 500;
      reject(e);
    } finally {
      
    }
  })
}

module.exports = getOriginalService;