const API = require("../api_interface/api_flights");

exports.getLogos = (req, res, next) => {
  const iata = req.query.iata;
  API.getLogo(iata)
    .then(data => {
      res.status(200).json({data: data.data});
    })
    .catch(err => console.log);
};
