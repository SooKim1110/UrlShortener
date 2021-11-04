const getOriginalService = require('./original.service');

const getOriginalCtrl = async (req,res,next) => {
 
  await getOriginalService(req,res,next)
  .then((result)=>{
    if (result){
      res.redirect('https://'+result);
    }
  })
  .catch((e) => {
    next(e);
  })
}

module.exports = getOriginalCtrl;