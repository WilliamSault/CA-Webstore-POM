var indexPage = require('./PageObjects/IndexPage');
var shippingPage = require('./PageObjects/ShippingPage');
var deliveryPage = require('./PageObjects/DeliveryPage');
var paymentDetailsPage = require('./PageObjects/PaymentDetailsPage')
var properties = require('./PageObjects/Properties.js');



browser.ignoreSynchronization = true;
describe('Test Cases 1', function() {
      it('Should find the webpage and choose a product', function(){
            indexPage.get();
            indexPage.setProductSelection('Desk');
            indexPage.clickOrderProduct();

            browser.wait(protractor.ExpectedConditions.urlContains('shipping'), properties.waitTime);

            shippingPage.enterEmailField('Will@ca.com');
            shippingPage.enterConfirmEmailField('Will@ca.com');
            shippingPage.enterNameField('Will');
            shippingPage.enterAddressLine1Field('1 drive');
            shippingPage.enterAddressLine2Field('London');
            shippingPage.enterCountyField('London');
            shippingPage.selectCountry('England');
            shippingPage.enterPostcodeField('SL3 9LL');
            shippingPage.clickSubmit();
            
            browser.wait(protractor.ExpectedConditions.urlContains('delivery'), properties.waitTime);

            deliveryPage.clickContinue();

            browser.wait(protractor.ExpectedConditions.urlContains('payment_details'),properties.waitTime);

            paymentDetailsPage.setCardSelection('AMEX');
            paymentDetailsPage.enterCardDetails('1234123412341234');
            paymentDetailsPage.clickCompletePurchase();

            browser.wait(protractor.ExpectedConditions.urlContains('finalise'),properties.waitTime);


      });
});
describe('Test Cases 2', function() {
      it('Should find the webpage and choose a product', function(){
            indexPage.get();
            indexPage.setProductSelection('Desk');
            indexPage.clickOrderProduct();

            browser.wait(protractor.ExpectedConditions.urlContains('shipping'), properties.waitTime);

            shippingPage.enterEmailField('Will@ca.com');
            shippingPage.enterConfirmEmailField('Will@ca.com');
            shippingPage.enterNameField('Will');
            shippingPage.enterAddressLine1Field('1 drive');
            shippingPage.enterAddressLine2Field('London');
            shippingPage.enterCountyField('London');
            shippingPage.selectCountry('England');
            shippingPage.enterPostcodeField('SL3 9LL');
            shippingPage.clickSubmit();
            
            browser.wait(protractor.ExpectedConditions.urlContains('delivery'), properties.waitTime);

            deliveryPage.clickContinue();

            browser.wait(protractor.ExpectedConditions.urlContains('payment_details'),properties.waitTime);

            paymentDetailsPage.setCardSelection('VISA');
            paymentDetailsPage.enterCardDetails('1234123412341234');
            paymentDetailsPage.clickCompletePurchase();

            browser.wait(protractor.ExpectedConditions.urlContains('finalise'),properties.waitTime);


      });
});

describe('Test Cases 3', function() {
      it('Should find the webpage and choose a product', function(){
            indexPage.get();
            indexPage.setProductSelection('Desk');
            indexPage.clickOrderProduct();

            browser.wait(protractor.ExpectedConditions.urlContains('shipping'), properties.waitTime);

            shippingPage.enterEmailField('Will@ca.com');
            shippingPage.enterConfirmEmailField('Will@ca.com');
            shippingPage.enterNameField('Will');
            shippingPage.enterAddressLine1Field('1 drive');
            shippingPage.enterAddressLine2Field('London');
            shippingPage.enterCountyField('London');
            shippingPage.selectCountry('England');
            shippingPage.enterPostcodeField('SL3 9LL');
            shippingPage.clickSubmit();
            
            browser.wait(protractor.ExpectedConditions.urlContains('delivery'), properties.waitTime);

            deliveryPage.clickContinue();

            browser.wait(protractor.ExpectedConditions.urlContains('payment_details'),properties.waitTime);

            paymentDetailsPage.setCardSelection('MasterCard');
            paymentDetailsPage.enterCardDetails('1234123412341234');
            paymentDetailsPage.clickCompletePurchase();

            browser.wait(protractor.ExpectedConditions.urlContains('finalise'),properties.waitTime);


      });
});

