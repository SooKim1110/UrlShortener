const Url = require('../../models/url');
const createError = require('http-errors');
const Base62 = require('../../utils/base62');
const base62 = new Base62();

const getOriginalService = (req,res,next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { shortUrl } = req.params;
      
      let id = base62.decode(shortUrl);
      console.log(id);
      const url = await Url.findOne({ _id: id });

      if (url) {
        const originalUrl = url.originalUrl;
        url.visitCount++;
        const visitCount = url.visitCount;
        await url.updateOne({visitCount});
        resolve(originalUrl);
      }
      else{
        // invalid url
        let e = createError(404, "URL not found on server");
        reject(e);
      }
    } catch (e){
      reject(e);
    } finally {
      
    }
  })
}

module.exports = getOriginalService;