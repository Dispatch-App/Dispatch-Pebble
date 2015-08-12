this.exports.getLocation = function(callback) {
  var locationOptions = {
    enableHighAccuracy: true, 
    maximumAge: 10000, 
    timeout: 10000
  };
  
  function locationSuccess(location) {
    callback.success(location.coords.latitude, location.coords.longitude);
  }
  
  function locationError(err) {
    callback.error(err);
  }
  
  navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
};
