var UI = require('ui');
var crimes = require('crimes');

var card = new UI.Card({
  title: 'Dispatch',
  subtitle: 'Send Help!'
});

card.on('click', function(e) {
  crimes.show();
});


card.show();