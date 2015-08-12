var ajax = require('ajax');

this.exports.addCrime = function(crime, callback) {
  ajax(
    {
      method: 'POST',
      url : 'https://dispatch-danielchristopher1.c9.io/addCrime',
      data : crime,
      contentType: "application/json; charset=utf-8"
    },
    
    function(data) {
      console.log('ajax: '  + data);
      callback.success();
    },
    
    function(error) {
      callback.error(error);
    }
  );
};

