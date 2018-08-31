const { Given, When, Then } = require('cucumber')

var indexPage = require('../../PageObjects/IndexPage');
var shippingPage = require('../../PageObjects/ShippingPage');
var deliveryPage = require('../../PageObjects/DeliveryPage');
var paymentDetailsPage = require('../../PageObjects/PaymentDetailsPage')

var EC = protractor.ExpectedConditions;

browser.ignoreSynchronization = true;


Given('I go to the homepage', function () {
    indexPage.get();
});

When('I select the product {string}',function (product) {
    indexPage.setProductSelection(product);
    indexPage.clickOrderProduct();
});

Then('I will be on the shipping page', function (next) {

    browser.driver.wait(EC.urlContains("shipping"),5000)
    .then(function () {
        next();            
    });
});

//Shipping 
When('I enter {string} in the email field',function (product) {
    shippingPage.enterEmailField(product);
});

When('I enter {string} in the confirm email field',function (text) {
    shippingPage.enterConfirmEmailField(text);
});

When('I enter {string} in the name field',function (text) {
    shippingPage.enterNameField(text);
});

When('I enter {string} in the address field',function (text) {
    shippingPage.enterAddressLine1Field(text);
});
When('I enter {string} in the address 2 field',function (text) {
    shippingPage.enterAddressLine2Field(text);
});

When('I enter {string} in the county field',function (text) {
    shippingPage.enterCountyField(text);
});

When('I enter {string} in the postcode field',function (text) {
    shippingPage.enterPostcodeField(text);
});

When('I select {string} in the country field',function (text) {
    shippingPage.selectCountry(text);
});

When('I click submit',function () {
    shippingPage.clickSubmit();
});

Then('I will be on the delivery page', function (next) {
    browser.driver.wait(EC.urlContains("delivery"),5000)
    .then(function () {
        next();            
    });
});

//Delivery

When('I click continue on the delivery page', function () {
    deliveryPage.clickContinue();
});

Then('I will be on the payment details page', function (next) {
    browser.driver.wait(EC.urlContains("payment_details"),5000)
    .then(function () {
        next();            
    });
});

//Payment Details
When('I select {string} as the card type', function (string) {
    paymentDetailsPage.setCardSelection(string);
});

When('I enter the card number {string}', function (string) {
    paymentDetailsPage.enterCardDetails(string);
});

When('I click complete purchase', function () {
    paymentDetailsPage.clickCompletePurchase()
});

Then('I will be on the finalise page', function (next) {
    browser.driver.wait(EC.urlContains("finalise"),5000)
    .then(function () {
        next();            
    });
});
