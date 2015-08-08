var ajax = require('ajax');
    
ajax({
  url: URL,
  type: 'json'
  },
         
  function(data) {
    console.log('Success');
  },
         
  function(error) {
    console.log(error);
  }
);