var properties = require('./Properties.js');
var {Button} = require('./Fields.js');
var {TextField} = require('./Fields.js'); 
var {CombBoxField} = require('./Fields.js');

var PaymentDetailsPage = function() {

    //Object locators
    var cardSelectionCombo = new CombBoxField(element(by.cssContainingText('option', '')));
    var cardNumberField = new TextField(element(by.id('cardNo')));
    var completePurchaseButton = new Button(element(by.buttonText('Complete Purchase')));
    var aboutButton = new Button(element(by.buttonText('ABOUT')));
    var homeButton = new Button(element(by.buttonText('HOME')));

    this.url = properties.url + "/payment_details.php";

    //ObjectActions
    this.get =  function() {
       browser.get(this.url);
    };

    this.setCardSelection =  function(item){
        cardSelectionCombo.select(item);
    };
    
    this.clickCompletePurchase =  function(){
       completePurchaseButton.click();
    };

    this.enterCardDetails = function (cardNumber) {
      cardNumberField.sendKeys(cardNumber);      
    }

    this.orderProduct =  function(item,cardNumber){
       this.setProductSelection(item);
       this.enterCardDetails(cardNumber);
       this.clickCompletePurchase();
    };
    
    this.goHome = function(){
      homeButton.click();
    };

    this.goAbout = function(){
      aboutButton.click();
    };

  };
  module.exports = new PaymentDetailsPage();