const Url = require('../../models/url');
const moment = require('moment');
const createError = require('http-errors');
const Base62 = require('../../utils/base62');
const base62 = new Base62();

const postShortService = (req,res,next) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { originalUrl } = req.body;
      // check if url already exists
      let url = await Url.findOne({originalUrl: originalUrl});

      if (url) {
        url.createCount++;
        let createCount = url.createCount;
        await url.updateOne({createCount});

        let shortUrl = base62.encode(url._id);
        let formatted_date = moment(url.createDate).add(9,'hours').format('YYYY-MM-DD HH:mm:ss');
        resolve({url, shortUrl, formatted_date});
      }
      else{

        url = new Url({
          originalUrl: originalUrl,
          createCount: 1,
          visitCount: 0,
          createDate: new Date()
        });
        
        const newUrl = await url.save();

        let shortUrl = base62.encode(newUrl._id);
        let formatted_date = moment(newUrl.createDate).add(9, 'hours').format('YYYY-MM-DD HH:mm:ss');

        resolve({url: newUrl, shortUrl, formatted_date});
      }
    } catch (e){
      reject(e);   
    } finally {
      
    }
  })
}

module.exports = postShortService;