// Things that this is not/does not:
// * Strava for motorcyclists
// * An FM radio transmitter for motorcyclists
// * Safety measurer for motorcyclists
// * Have anything to do with motorcycles

var UI = require('ui');
var ajax = require('ajax');

var sections = [{
  title: 'Blockchain',
      items: [{
        title: 'Market Price',
        /* icon: 'images/menu_icon.png',*/
        subtitle: 'Current price of Bitcoin'
      }, {
        title: 'Create Wallet',
        subtitle: 'powered by Blockchain'
      }, {
        title: 'View Wallets',
        subtitle: 'Transactions and balance'
      }]
    }];

var main = new UI.Menu({
    sections: sections
});

main.show();

main.on('select', function(event) {
  console.log("Received event");
  var detailCard = new UI.Card({
      title: sections[0].items[event.itemIndex].title
    });
  switch(event.itemIndex) {
    case 0: 
      ajax({url: 'http://blockchain.info/ticker', type: 'json'}, 
      function(json) {
        detailCard.subtitle("Buy: $" + json.USD.buy + "\nSell: $" + json.USD.sell);
        detailCard.show();
      }, function(err) {
        console.log(err);
      });
      break;
    case 1:
      ajax({url: 'https://blockchain.info/api/v2/create_wallet', type: 'json'},
      function(data) {
        
      }, function(err) {

      });
      break;
    case 2:
        break;
  }
      
});

