// Things that this is not/does not:
// * Strava for motorcyclists
// * An FM radio transmitter for motorcyclists
// * Safety measurer for motorcyclists
// * Have anything to do with motorcycles

var UI = require('ui');

var main = new UI.Menu({
    sections: [{
      items: [{
        title: 'Show Market Price',
        /* icon: 'images/menu_icon.png',*/
        subtitle: 'Current price of Bitcoin'
      }, {
        title: 'Create Wallet',
        subtitle: 'Create new Blockchain wallet'
      }]
    }]
  });

main.show();
main.on('select', function(e) {
  
});

