Feature: webstore
    Scenario: Order Product
    Given I go to the homepage
    Then I will be on the index page
    When I select the product "Premium Laptop"
    When I click order product
    Then I will be on the shipping page
    When I enter "Will@ca.com" in the email field
    When I enter "Will@ca.com" in the confirm email field
    When I enter "Will" in the name field
    When I enter "1 main street" in the address field
    When I enter "London" in the address 2 field
    When I enter "Greater London" in the county field
    When I enter "SL3 9LL" in the postcode field
    When I select "England" in the country field
    When I click submit
    Then I will be on the delivery page
    When I click continue on the delivery page
    Then I will be on the payment details page
    When I select "AMEX" as the card type
    When I enter the card number "1234123412341324"
    When I click complete purchase
    Then I will be on the finalise page
