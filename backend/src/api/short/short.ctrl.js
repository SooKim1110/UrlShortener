const postShortService = require('./short.service');

const postShortCtrl = async (req,res,next) => {

  const { originalUrl } = req.body;
  console.log(originalUrl);

  // (!) add URL valid check

  await postShortService(req,res,next)
  .then((result)=>{
    let { url, formatted_date } = result;
    console.log(typeof(formatted_date));
    var { shortUrl, createCount, visitCount } = url;
    shortUrl = req.headers.host + "/"+ shortUrl;
    res.render('short', {shortUrl, createCount, visitCount, formatted_date});
  })
  .catch((e)=>{
    res.status(e.status);
    res.render('error', { error: e });
  });
}

module.exports = postShortCtrl;