var properties = require('./Properties.js');
var {Button} = require('./Fields.js');
var {CombBoxField} = require('./Fields.js');

var IndexPage = function() {

    //Object locators
    var productSelectionCombo = new CombBoxField(element(by.cssContainingText('option','Writing pad')));

    
    var orderProductButton = new Button(element(by.buttonText('Order Product')));
    var aboutButton = new Button(element(by.buttonText('ABOUT')));
    var homeButton = new Button(element(by.buttonText('HOME')));
    this.URL = properties.URL+ '/index.php';

    //ObjectActions
    this.get =  function() {
       browser.get(this.URL);
    };

    this.setProductSelection =  function(item){
      switch (item) {
        case properties.EMPTY:
          break;
        case "Premium Laptop":
          productSelectionCombo.select('Writing Pad');
          break;
        case "Desk":
          productSelectionCombo.select('Writing Pad');
          break;
        default:
          productSelectionCombo.select(item);
          break;
      }       
    };

    this.clickOrderProduct =  function(data){
        orderProductButton.click(data);
    };

    this.orderProduct =  function(item){
       this.setProductSelection(item);
       this.clickOrderProduct();
    };
    
    this.goHome = function(){
        homeButton.click();
    };

    this.goAbout = function(){
      aboutButton.click();
    };

  };
  module.exports = new IndexPage();