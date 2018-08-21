var indexPage = require('./PageObjects/IndexPage');
var shippingPage = require('./PageObjects/ShippingPage');
var deliveryPage = require('./PageObjects/DeliveryPage');
var paymentDetailsPage = require('./PageObjects/PaymentDetailsPage')

browser.ignoreSynchronization = true;

describe('Positive Scenario ', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('Wales');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('MasterCard');
            paymentDetailsPage.enterCardDetails('1234123412341234');
        paymentDetailsPage.clickCompletePurchase();
        browser.wait(protractor.ExpectedConditions.urlContains('finalise'), 5000);
    });
});



describe('Negative Scenario ', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('index'), 5000);
    });
});



describe('Negative Scenario (1)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Desk');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('AMEX');
            paymentDetailsPage.enterCardDetails('notnumbers');
        paymentDetailsPage.clickCompletePurchase();
    });
});



describe('Negative Scenario (2)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Doombar');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('<<<EMPTY>>>');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (3)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Water');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('Scotland');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('<<<EMPTY>>>');
            paymentDetailsPage.enterCardDetails('1234');
        paymentDetailsPage.clickCompletePurchase();
    });
});



describe('Positive Scenario (1)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Writing Pad');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('Wales');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('MasterCard');
            paymentDetailsPage.enterCardDetails('1234123412341234');
        paymentDetailsPage.clickCompletePurchase();
        browser.wait(protractor.ExpectedConditions.urlContains('finalise'), 5000);
    });
});



describe('Negative Scenario (4)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Testers Pocketbook');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('VISA');
            paymentDetailsPage.enterCardDetails('1234');
        paymentDetailsPage.clickCompletePurchase();
    });
});



describe('Positive Scenario (2)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Stationary');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('Wales');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('MasterCard');
            paymentDetailsPage.enterCardDetails('1234123412341234');
        paymentDetailsPage.clickCompletePurchase();
        browser.wait(protractor.ExpectedConditions.urlContains('finalise'), 5000);
    });
});



describe('Negative Scenario (5)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Headphones');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('<<<EMPTY>>>');
            paymentDetailsPage.enterCardDetails('1234123412341234');
        paymentDetailsPage.clickCompletePurchase();
    });
});



describe('Negative Scenario (6)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('<<<EMPTY>>>');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (7)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('delivery'), 5000);
        deliveryPage.clickContinue();
        browser.wait(protractor.ExpectedConditions.urlContains('payment'), 5000);
        paymentDetailsPage.setCardSelection('<<<EMPTY>>>');
            paymentDetailsPage.enterCardDetails('notnumbers');
        paymentDetailsPage.clickCompletePurchase();
    });
});



describe('Negative Scenario (8)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('2341234');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (9)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('1234.com');
        shippingPage.enterConfirmEmailField('1234.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('!2341234%$');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('<<<EMPTY>>>');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (10)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('<<<EMPTY>>>');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (11)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('11234123fA@D');
        shippingPage.enterNameField('<<<EMPTY>>>');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('<<<EMPTY>>>');
        shippingPage.selectCountry('Scotland');
        shippingPage.enterPostcodeField('2341234');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (12)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('<<<EMPTY>>>');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (13)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('<<<EMPTY>>>');
        shippingPage.enterAddressLine1Field('<<<EMPTY>>>');
        shippingPage.enterAddressLine2Field('<<<EMPTY>>>');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('Wales');
        shippingPage.enterPostcodeField('<<<EMPTY>>>');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (14)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('!2341234%$');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (15)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('<<<EMPTY>>>');
        shippingPage.enterConfirmEmailField('11234123fA@D');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('1 main Street');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('<<<EMPTY>>>');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



describe('Negative Scenario (16)', function() {
    it('  21/08/2018 16:24:43', function(){
        indexPage.get();
        indexPage.setProductSelection('Premium Laptop');
        indexPage.clickOrderProduct();
        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
        shippingPage.enterEmailField('will@ca.com');
        shippingPage.enterConfirmEmailField('will@ca.com');
        shippingPage.enterNameField('will');
        shippingPage.enterAddressLine1Field('<<<EMPTY>>>');
        shippingPage.enterAddressLine2Field('Oxford');
        shippingPage.enterCountyField('Oxfordshire');
        shippingPage.selectCountry('England');
        shippingPage.enterPostcodeField('OX294TP');

        shippingPage.clickSubmit();

        browser.wait(protractor.ExpectedConditions.urlContains('shipping'), 5000);
    });
});



