const Url = require('../../models/url');
const { nanoid } = require('nanoid')
const moment = require('moment');
const createError = require('http-errors');

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
        let formatted_date = moment(url.createDate).format('YYYY-MM-DD HH:mm:ss');
        resolve({url, formatted_date});
      }
      else{
        const shortUrl = nanoid(8);
  
        url = new Url({
          originalUrl,
          shortUrl,
          createCount: 1,
          visitCount: 0,
          createDate: new Date()
        });
        
        await url.save(function(e){
          if(e){
            reject(e);
            return;
          }
        })
        let formatted_date = moment(url.createDate).format('YYYY-MM-DD HH:mm:ss');
        resolve({url, formatted_date});
      }
    } catch (e){
      reject(e);   
    } finally {
      
    }
  })
}

module.exports = postShortService;