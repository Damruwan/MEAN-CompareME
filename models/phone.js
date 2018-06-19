const mongoose = require('mongoose');
const schema = mongoose.Schema;

const phoneSchema = new schema({
        
	phonepicture : {type:String},
        model : {type:String,required:true},
        technology : {type:String},
        announced : {type:String},
        status : {type:String},
        dimensions : {type:String},
        weight : {type:String},
        sim : {type:String},
        displayType : {type:String},
        displaySize : {type:String},
        displayResolution : {type:String},
        multitouch : {type:String},
        os : {type:String},
        chipset : {type:String},
        cpu : {type:String},
        gpu : {type:String},
        cardslot:{type:String},
        internalMemory:{type:String},
        primaryCamera:{type:String},
        cameraFeatures:{type:String},
        video:{type:String},
        secondaryCamera:{type:String},
        alertTypes:{type:String},
        loudspeaker :{type:String},
        audiojack : {type:String},
        wlan:{type:String},
        bluetooth:{type:String},
        gps:{type:String},
        nfc:{type:String},
        radio:{type:String},
        usb:{type:String},
        sensors:{type:String},
        messaging:{type:String},
        browser:{type:String},
        battery:{type:String},
        colors:{type:String},
        price:{type:String}

});

const Phone = module.exports = mongoose.model("Phone",phoneSchema);

module.exports.savePhone = function (newPhone,callback){

	newPhone.save(callback);
		
};

module.exports.findById = function(id,callback) {
	const query = {_id:id};
	Phone.findOne(query,callback);

};




