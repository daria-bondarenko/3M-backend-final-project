const Buy = require('../../db/models/ task/index');

module.exports.getAllExpenses = (req, res) => {
  Buy.find().then(result => {
    res.send({data: result})
  });
};

module.exports.createNewBuy = (req, res) => {
  const buy = new Buy(req.body);
  buy.save().then(result => {
    Buy.find().then(result => {
      res.send({data: result});
    });
  });
};

module.exports.changeBuyInfo = (req, res) => {
  const {_id, text, price, date} = req.body;

  if (req.body.hasOwnProperty('_id') && (req.body.hasOwnProperty('text') || req.body.hasOwnProperty('price') || req.body.hasOwnProperty('date'))) {
    for (let key in req.body) {
      if ((key === 'price' || key === 'text' || key === 'date') && (req.body[key] !== null && req.body[key] !== undefined && req.body[key] !== '')) {
        Buy.updateOne({ _id }, {[key]: req.body[key]}
        ).then(result => {
          Buy.find().then(result => {
            res.send({data: result})
          })
        })
      }
    }
  }
  else {
    Buy.find().then(result => {
      res.send({data: result})
    })
  }
}

module.exports.deleteBuy = (req, res) => {
  Buy.deleteOne({_id: req.body._id}).then(result => {
    Buy.find().then(result => {
      res.send({data: result});
    })
  })
};