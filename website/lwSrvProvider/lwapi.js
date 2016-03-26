exports.emailverify=function(req,res){
res.send(200);
}


exports.getServices=function(req,res){
	var result = {
			"response_data":
				 [
				  {"service1": "WEDDING"},
				  {"service2": "PORTRAIT"},
  				  {"service3": "BIRTHDAY"},
				  {"service4": "PRE-WEDDING"},
 				  {"service5": "TRAVEL"},
				  {"service6": "ARCHITECTURAL"}
 				  ]}
	 res.send(result);
	}

// based on packaging we might need hourly charges 
exports.gettimeinfo=function(req,res){
	var result = {
	};
		res.send(result);
	}

// based on event 
exports.getEventInfo=function(req,res){
	var result = {
			
	};
		res.send(result);
	}


exports.getPriceInfo=function(req,res){
	var result = {
			"response_data":
		[{
			"id":"chgd663fnf763dnkf8",
			"eventid":"service1",
			"timeinfo":"4",
			"cost":"5000"
		}]	
	};
		res.send(result);
	}


exports.imageUpload=function(req,res){
		res.send(200);
	}

exports.login=function(req,res){
	var data = encryptPass('weblogic');
	
	//console.log(data);
	decryptPass(data);
		res.send(data);
	}




var encryptPass= function(pass){
	const crypto = require('crypto');
	const cipher = crypto.createCipher('aes192', 'a password');

	var encrypted = cipher.update(pass, 'utf8', 'hex');
	encrypted += cipher.final('hex');
	console.log(encrypted);
	return encrypted;
	
}

var decryptPass = function(pass){
	
	const crypto = require('crypto');
	const decipher = crypto.createDecipher('aes192', 'a password');

	//var encrypted = 'ca981be48e90867604588e75d04feabb63cc007a8f8ad89b10616ed84d815504';
	var decrypted = decipher.update(pass, 'hex', 'utf8');
	decrypted += decipher.final('utf8');
	
	console.log(decrypted);
}


exports.forgotpass=function(req,res){
		res.send(200);
	}

exports.registration=function(req,res){
		res.send(200);
	}

exports.getPhotographer=function(req,res){
	var result = {
			"response_data":
				 [{
					  "_id": ObjectId("56e1b0b485b5d9522cf3a223"),
					  "fname": "FirstName",
					  "lname": "LastName",
					  "dob": "dd/mm/yyyy",
					  "desc": "Photography Tricks",
					  "mainaddress": {
					    "street": "some street",
					    "city": "MUMBAI",
					    "state": "MAHA",
					    "zip": 5678767
					  },
					  "mainaddress.city": "MUMBAI",
					  "servicearea": [
					    {
					      "city": "MUMBAI",
					      "location": [
					        "area1",
					        "area2",
					        "area3",
					        "area4",
					        "area5",
					        "allareas"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "MUMBAINAME"
					    },
					    {
					      "city": "BANGALORE",
					      "location": [
					        "area1",
					        "area2",
					        "area3",
					        "area4",
					        "area5",
					        "allareas"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "BANGALORENAME"
					    }
					  ],
					  "istravel": "true"
					}]
	}
		res.send(result);
	}

exports.remove=function(req,res){
		res.send(200);
	}

exports.searchPhotographer=function(req,res){
	var result = {
			"response_data":
				 [{
					  "_id": ObjectId("56e1b0b485b5d9522cf3a223"),
					  "fname": "FirstName",
					  "lname": "LastName",
					  "dob": "dd/mm/yyyy",
					  "desc": "Photography Tricks",
					  "mainaddress": {
					    "street": "some street",
					    "city": "MUMBAI",
					    "state": "MAHA",
					    "zip": 5678767
					  },
					  "mainaddress.city": "MUMBAI",
					  "servicearea": [
					    {
					      "city": "MUMBAI",
					      "location": [
					        "area1",
					        "area2",
					        "area3",
					        "area4",
					        "area5",
					        "allareas"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "MUMBAINAME"
					    },
					    {
					      "city": "BANGALORE",
					      "location": [
					        "area1",
					        "area2",
					        "area3",
					        "area4",
					        "area5",
					        "allareas"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "BANGALORENAME"
					    }
					  ],
					  "istravel": "true"
					}
				,
					{
					  "_id": ObjectId("56e1b0b585b5d9522cf3a224"),
					  "fname": "FirstName1",
					  "lname": "LastName1",
					  "dob": "dd/mm/yyyy",
					  "desc": "Photography Tricks",
					  "mainaddress": {
					    "street": "some street",
					    "city": "KOLKATA",
					    "state": "KOL",
					    "zip": 5678767
					  },
					  "mainaddress.city": "KOLKATA",
					  "servicearea": [
					    {
					      "city": "KOLKATA",
					      "location": [
					        "area1",
					        "area2",
					        "area3"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "KOLKATANAME"
					    },
					    {
					      "city": "BANGALORE",
					      "location": [
					        "area1",
					        "area2",
					        "area3",
					        "area4",
					        "area5",
					        "allareas"
					      ],
					      "pocphone": 9989898787,
					      "pocname": "BANGALORENAME"
					    }
					  ],
					  "istravel": "true"
					}

]}
		res.send(result);
	}

exports.getBooking=function(req,res){
	var result = {
			"response_data":
			[
			  {
			  "bookingid": "dff566tgh53edfg432f43",  
			  "name": "BookerName1",
			  "email": "bookeremail1",
			  "phone": "BookerPhone1",
			  "venue": {
				  "city":"Bangalore",
				  "street":"Jayanagar",
				  "zip":"560098"
			  	},
			  "eventdate": "29/01/2017",
			  "preferredtimetocall": "Any time",
			  "spclintrns": "Special Instructions",
			  "status":"bkst1"
			  },
			  {
				  "bookingid": "bhghe6746h23nfds532h2",  
				  "name": "BookerName2",
				  "email": "bookeremail2",
				  "phone": "BookerPhone2",
				  "venue": {
					  "city":"Mysore",
					  "street":"Jayanagar",
					  "zip":"560098"
				  	},
				  "eventdate": "29/01/2017",
				  "preferredtimetocall": "Any time",
				  "spclintrns": "Special Instructions",
				  "status":"bkst2"
				  }  
			  ]
			};
		res.send(result);
	}

exports.getBookStatus=function(req,res){
	var result = {
			"response_data":
				 [
				  {"bkst1": "Acknowledged"},
				  {"bkst2": "Assigned"},
  				  {"bkst3": "Confirmed"},
				  {"bkst4": "At Point"},
 				  {"bkst5": "No Show"},
				  {"bkst6": "In Progress"},
 				  {"bkst7": "Completed"}
 				  ]}
		res.send(result);
	}




exports.imageUpload = function(req, res) {
       console.log('IN POST (/files1)');
        console.log(req.body)

        var filesUploaded = 0;

        if ( Object.keys(req.files).length === 0 ) {
            console.log('no files uploaded');
        } else {
            console.log(req.files[0].originalname)

            var files = req.files.file1;
            if (!util.isArray(req.files.file1)) {
                files = [ req.files.file1 ];
            } 

            filesUploaded = files.length;
        }

        res.json({ message: 'Finished! Uploaded ' + filesUploaded + ' files.  Route is /files1' });
};


