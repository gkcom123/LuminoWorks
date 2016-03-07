exports.getstateList = function(req,res) {

  var countryId = req.query["countryID"];
  var result = {
    "status": "success", "error_desc": "", "error_code": "",
    "response_data": [{
      "cityEntity": null,
      "countryId": 99,
      "name": "Andhra Pradesh",
      "stateId": 1,
      "stateName": "Andhra Pradesh",
      "stateShortname": "AP"
    }, {
      "cityEntity": null,
      "countryId": 99,
      "name": "Bihar",
      "stateId": 4,
      "stateName": "Bihar",
      "stateShortname": "BR"
    },{
      "cityEntity": null,
      "countryId": 99,
      "name": "Gujarat",
      "stateId": 7,
      "stateName": "Gujarat",
      "stateShortname": "GJ"
    },{
      "cityEntity": null,
      "countryId": 99,
      "name": "Karnataka",
      "stateId": 12,
      "stateName": "Karnataka",
      "stateShortname": "KA"
    },{
      "cityEntity": null,
      "countryId": 99,
      "name": "Maharashtra",
      "stateId": 15,
      "stateName": "Maharashtra",
      "stateShortname": "MH"
    },{
      "cityEntity": null,
      "countryId": 99,
      "name": "Tamil Nadu",
      "stateId": 24,
      "stateName": "Tamil Nadu",
      "stateShortname": "TN"
    },{
      "cityEntity": null,
      "countryId": 99,
      "name": "Delhi",
      "stateId": 32,
      "stateName": "Delhi",
      "stateShortname": "DL"
    }]
  };
  res.send(result);
  //console.log(countryId);
};