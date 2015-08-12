var UI = require('ui');
var crimeFactory = require('crimefactory');
var helpSentCard = require('helpsent');

this.exports = {
  
  show: function() {
    var crimes = [
      {
        title: 'Robbery'
      },
      
      {
        title: 'Shooting'
      },
      
      {
        title: 'Stabbing'
      }
  ];
    
    var crimeMenu = new UI.Menu({
      sections: [{
        title: 'Crimes',
        items: crimes
      }]
    });
      
    crimeMenu.on('select', function(event) {
      crimeFactory.create(crimes[event.itemIndex].title, {
        success: function() {
          console.log("success... help sent...."); 
          helpSentCard.show();
        },
        
        error: function(e) {
          console.log(e);
        }
      });
    });
    
    crimeMenu.show();  
  }
}