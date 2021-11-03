const getOriginalService = require('./original.service');

const getOriginalCtrl = async (req,res,next) => {
  const { shortUrl } = req.params; 

  await getOriginalService(req,res,next)
  .then((result)=>{
    console.log("result is " ,result);
    if (result){
      res.redirect('https://'+result);
    }
  })
  .catch((e) => {
    res.status(e.status);
    res.render('error', { error: e });
  })
}

module.exports = getOriginalCtrl;