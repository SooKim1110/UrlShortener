const postShortService = require('./short.service');

const postShortCtrl = async (req,res,next) => {

  const { originalUrl } = req.body;

  // (!) add URL valid check

  await postShortService(req,res,next)
  .then((result)=>{
    let { url, formatted_date } = result;
    var { shortUrl, createCount, visitCount } = url;
    shortUrl = req.headers.host + "/"+ shortUrl;
    res.render('short', {shortUrl, createCount, visitCount, formatted_date});
  })
  .catch((e)=>{
    next(e);
  });
}

module.exports = postShortCtrl;