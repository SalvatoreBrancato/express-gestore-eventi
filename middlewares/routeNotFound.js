module.exports = function (req, res, next) {
  
    res.format({
      json: () => {
        res.status(404).json({
          message: "la rotta ricercata non esiste"
        });
      },
      default: () => {
        res.status(404).send("<h1>la rotta ricercata non esiste</h1>");
      },
    })
  }