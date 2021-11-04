const getOriginalService = require('./original.service');

const getOriginalCtrl = async (req,res,next) => {
 
  await getOriginalService(req,res,next)
  .then((result)=>{
    if (result){
      let hasProtocol = /^((http|https|ftp):\/\/)/;
      if(!hasProtocol.test(result)) {
      result = "http://" + result;
      }
      console.log(result);
      res.redirect(result);
    }
  })
  .catch((e) => {
    next(e);
  })
}

module.exports = getOriginalCtrl;