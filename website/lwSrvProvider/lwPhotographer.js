exports.getPhotographer = function(req,res) {
	var result = {
			"response_data":
				 [{
			  "fname": "somename",
			  "lname": "somelast",
			  "dob": "dd/mm/yyyy",
			  "orgname": "photoworldwide",
			  "desc": "Photography Tricks",
			  "phone": 9918787676,
			  "mainaddress": {
			    "street": "some street",
			    "city": "somecity",
			    "state": "SomeState",
			    "zip": 5678767
			  },
			  "website": "photo@woto.com",
			  "bankdetails": {
			    "accnum": "56787678",
			    "accname": "Bank of Someone"
			  },
			  "pancard": "PAN09890",
			  "handsonexp": 6,
			  "photostyles": [
			    "style1",
			    "style2",
			    "style3"
			  ],
			  "photogallery": "linktodir",
			  "istravel": "true"
			}
,
			{
			  "fname": "mumbainame",
			  "lname": "mumbainamelast",
			  "dob": "dd/mm/yyyy",
			  "orgname": "photoworldwide",
			  "desc": "Photography Tricks",
			  "phone": 5654543432,
			  "mainaddress": {
			    "street": "some street",
			    "city": "MUMBAI",
			    "state": "MAHA",
			    "zip": 5678767
			  },
			  "website": "photo@woto.com",
			  "bankdetails": {
			    "accnum": "56787678",
			    "accname": "Bank of Someone"
			  },
			  "pancard": "PAN09890",
			  "handsonexp": 6,
			  "photostyles": [
			    "style1",
			    "style2"
			  ],
			  "photogallery": "linktodir",
			  "istravel": "true"
			}
]}
	 res.send(result);
}

exports.getServices = function(req,res) {
	var result = {
			"response_data":
				 [
				  {"serv1": "WEDDING"},
				  {"serv2": "PORTRAIT"},
  				  {"serv3": "BIRTHDAY"},
				  {"serv4": "PRE-WEDDING"},
 				  {"serv5": "TRAVEL"},
				  {"serv6": "ARCHITECTURAL"}
 				  ]}
	 res.send(result);
}