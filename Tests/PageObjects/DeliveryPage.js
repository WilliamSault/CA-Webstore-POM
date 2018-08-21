
var properties = require('./Properties.js');
var {Button} = require('./Fields.js');

var DeliveryPage = function() {

    //Object locators
    var continueButton = new Button(element(by.buttonText('Continue')));
    var aboutButton = new Button(element(by.buttonText('ABOUT')));
    var homeButton = new Button(element(by.buttonText('HOME')));

    this.URL = properties.URL+ '/delivery.php';

    //ObjectActions
    this.get =  function() {
       browser.get(this.URL);
    };

    this.clickContinue = function(){
        continueButton.click();
      };
    
    this.goHome = function(){
        homeButton.click();
    };

    this.goAbout = function(){
        aboutButton.click();
    };

  };
  module.exports = new DeliveryPage();