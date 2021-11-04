const postShortService = require('./short.service');
const isValidUrl = require('../../utils/isValidUrl');

const postShortCtrl = async (req,res,next) => {

  const { originalUrl } = req.body;

  // (!) add URL valid check
  if(!isValidUrl(originalUrl)) {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write("<script>alert('올바른 URL을 입력해주세요.')</script>");
    res.write("<script>window.location=\"/\"</script>");
    res.end();
    return;
  }

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