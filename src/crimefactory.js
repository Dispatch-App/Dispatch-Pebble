var location = require('location');
var api = require('apiclient');

this.exports.create = function(crimeType, callback) {
  location.getLocation({
    success: function(lat, lng) {
      var crime = {
        type: crimeType,
        latitude: lat,
        longitude: lng,
        timestamp: new Date().getTime(),
      };
      
      api.addCrime(crime, {
        success: function() {
          callback.success();  
        },
        
        error: function(e) {
          callback.error(e);
        }
      });
    },
    
    error: function(e) {
      callback(e);  
    }
  });

};