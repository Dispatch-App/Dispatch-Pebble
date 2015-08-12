var UI = require('ui');

this.exports.show = function() {
  var card = new UI.Card({
    title: 'Help is on the way!',
    body: 'We have called 911 and notified those near...'
  });

  card.show();
};