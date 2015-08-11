var UI = require('ui');

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
    
    crimeMenu.show();  
  }
}