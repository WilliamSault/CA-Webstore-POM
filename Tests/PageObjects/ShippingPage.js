
var properties = require('./Properties.js');
var {Button} = require('./Fields.js');
var {TextField} = require('./Fields.js');
var {CombBoxField} = require('./Fields.js');
// Convert a csv file with csvtojson

var ShippingPage = function() {

    this.URL = properties.URL+ '/shipping.php';

    //Object locators
    var emailField = new TextField(element(by.id('Email')));
    var confirmEmailField = new TextField(element(by.id('ConfirmEmail')));
    var nameField = new TextField(element(by.id('name')));
    var addressLine1Field = new TextField(element(by.id('line1')));
    var addressLine2Field = new TextField(element(by.id('line2')));
    var countyField = new TextField(element(by.id('county')));
    var postcodeField = new TextField(element(by.id('post_code')));
    var countryComboBox = new CombBoxField(element(by.id('country')));
    var saveShippingButton = new Button(element(by.buttonText('Save Shipping')));


    //Individual functions
    this.enterEmailField = function(text) {
        emailField.sendKeys(text);
    };
    this.enterConfirmEmailField = function(text) {
        confirmEmailField.sendKeys(text);
    };
    this.enterNameField = function(text) {
        nameField.sendKeys(text);
    };
    this.enterAddressLine1Field = function(text) {
        addressLine1Field.sendKeys(text);
    };
    this.enterAddressLine2Field = function(text) {
        addressLine2Field.sendKeys(text);
    };
    this.enterCountyField = function(text) {
        countyField.sendKeys(text);
    };
    this.enterPostcodeField = function(text) {
        postcodeField.sendKeys(text);
    };
    this.selectCountry = function(country){
        countryComboBox.select(country);
    };
    this.clickSubmit = function () {
        saveShippingButton.click();
    };



    //Filling in the form
    this.get =  function(callback) {
       browser.get('http://grid-tools-downloads.com/Training/shipping.php');
       callback();
    };


    

    this.fillInFormFromJSON = function(data,callback){
        fillInForm(data,callback);

        saveShippingButton.click();
        callback();
    };





    function fillInForm(data) {

        enterEmailField(data.Email);
        enterConfirmEmailField(data.ConfirmEmail);
        enterNameField(data.Name);
        enterAddressLine1Field(data.AddressLine1);
        enterAddressLine2Field(data.AddressLine2);
        enterCountyField(data.County);
        enterPostcodeField(data.PostCode);
        selectCountry(data.Country);
    }

  };
  module.exports = new ShippingPage();