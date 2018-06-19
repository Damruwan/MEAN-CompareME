const express = require('express');
const router = express.Router();
const Phone = require('../models/phone');



router.post("/managePhone",function(req, res) {
	const newPhone = new Phone({
		phonepicture : req.body.phonepicture,
        model : req.body.model,
        technology : req.body.technology,
        announced : req.body.announced ,
        status : req.body.status,
        dimensions : req.body.dimensions,
        weight : req.body.weight,
        sim : req.body.sim,
        displayType : req.body.displayType,
        displaySize : req.body.displaySize,
        displayResolution : req.body.displayResolution,
        multitouch : req.body.multitouch,
        os : req.body.os,
        chipset : req.body.chipset,
        cpu : req.body.cpu,
        gpu : req.body.gpu,
        cardslot: req.body.cardslot,
        internalMemory: req.body.internalMemory,
        primaryCamera: req.body.primaryCamera,
        cameraFeatures: req.body.cameraFeatures,
        video: req.body.video,
        secondaryCamera: req.body.secondaryCamera,
        alertTypes: req.body.alertTypes,
        loudspeaker : req.body.loudspeaker,
        audiojack : req.body.audiojack,
        wlan: req.body.wlan,
        bluetooth: req.body.bluetooth,
        gps: req.body.gps,
        nfc: req.body.nfc,
        radio: req.body.radio,
        usb: req.body.usb,
        sensors: req.body.sensors,
        messaging: req.body.messaging,
        browser: req.body.browser,
        battery: req.body.battery,
        colors: req.body.colors,
        price: req.body.price
	});

	Phone.savePhone(newPhone,function (err,phone) {
		if(err) {
			res.json({state:false,msg:"data not inserted"});
		}
		if(phone) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

router.get('/managePhone', function(req, res) {

        Phone.find(function(err, phone){
		   res.json(phone);
	})
	
       
});

router.delete('/managePhone/:id',(req, res, next)=>{
	Phone.remove({_id: req.params.id}, function(err, result){
		if(err)
		{
			res.json(err);
		}
		else{
			res.json(result);
		}	
	});
});

router.get('/viewPhone/:id',(req, res, next)=>{

	Phone.findById({_id: req.params.id}, function(err, phone){

		if(err) throw err;

		if (phone){
			res.json(phone);
		}
    });
});    


module.exports = router;


