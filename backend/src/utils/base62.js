class Base62 {
  constructor(){
    this.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }

  encode = function (id) {
    id = id + 10000000;
    let shortUrl = [];
    while (id > 0){
      shortUrl = [this.chars[id%62], ...shortUrl];
      id = Math.floor(id/62);
    }
    return shortUrl.join('');
  }

  decode = function (shortUrl) {
    let id = shortUrl.split('')
      .reverse()
      .reduce((prev,curr,i) => prev + this.chars.indexOf(curr) * (62** i),0);
    id = id - 10000000;
    return id;
  }
}

module.exports = Base62;