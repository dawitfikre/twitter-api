



// Custom Logging middleware
module.exports = function logger(opts = {}) {
  let defaults = Object.assign({},{
    logging: true
  }, opts);

  return (req, res, next) =>{
    if(defaults.logging) {
      console.log(req.method, ":", req.url);
    }

    next();
  }
}
