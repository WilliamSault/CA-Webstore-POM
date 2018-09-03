Feature: Order Products

 
    Scenario: Positive Scenario 


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "Wales" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "MasterCard" as the card type
        When I enter the card number "1234123412341234"
        When I click complete purchase
        Then I will be on the finalise page
 
    Scenario: Negative Scenario 


        Given I go to the homepage
        When I click order product
        Then I will be on the index page
 
    Scenario: Negative Scenario (1)


        Given I go to the homepage
        When I select the product "Desk"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "AMEX" as the card type
        When I enter the card number "notnumbers"
        When I click complete purchase
        Then I will be on the payment details page
 
    Scenario: Negative Scenario (2)


        Given I go to the homepage
        When I select the product "Doombar"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "<<<EMPTY>>>" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (3)


        Given I go to the homepage
        When I select the product "Water"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "Scotland" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "<<<EMPTY>>>" as the card type
        When I enter the card number "1234"
        When I click complete purchase
        Then I will be on the payment details page
 
    Scenario: Positive Scenario (1)


        Given I go to the homepage
        When I select the product "Writing Pad"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "Wales" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "MasterCard" as the card type
        When I enter the card number "1234123412341234"
        When I click complete purchase
        Then I will be on the finalise page
 
    Scenario: Negative Scenario (4)


        Given I go to the homepage
        When I select the product "Testers Pocketbook"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "VISA" as the card type
        When I enter the card number "1234"
        When I click complete purchase
        Then I will be on the payment details page
 
    Scenario: Positive Scenario (2)


        Given I go to the homepage
        When I select the product "Stationary"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "Wales" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "MasterCard" as the card type
        When I enter the card number "1234123412341234"
        When I click complete purchase
        Then I will be on the finalise page
 
    Scenario: Negative Scenario (5)


        Given I go to the homepage
        When I select the product "Headphones"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "<<<EMPTY>>>" as the card type
        When I enter the card number "1234123412341234"
        When I click complete purchase
        Then I will be on the payment details page
 
    Scenario: Negative Scenario (6)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "<<<EMPTY>>>" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (7)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the delivery page
        When I click continue on the delivery page
        Then I will be on the payment details page
        When I select "<<<EMPTY>>>" as the card type
        When I enter the card number "notnumbers"
        When I click complete purchase
        Then I will be on the payment details page
 
    Scenario: Negative Scenario (8)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "2341234" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (9)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "1234.com" in the email field
        When I enter "1234.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "!2341234%$" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "<<<EMPTY>>>" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (10)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "<<<EMPTY>>>" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (11)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "11234123fA@D" in the confirm email field
        When I enter "<<<EMPTY>>>" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "<<<EMPTY>>>" in the county field
        When I enter "2341234" in the postcode field
        When I select "Scotland" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (12)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "<<<EMPTY>>>" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (13)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "<<<EMPTY>>>" in the name field
        When I enter "<<<EMPTY>>>" in the address field
        When I enter "<<<EMPTY>>>" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "<<<EMPTY>>>" in the postcode field
        When I select "Wales" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (14)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "!2341234%$" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (15)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "<<<EMPTY>>>" in the email field
        When I enter "11234123fA@D" in the confirm email field
        When I enter "will" in the name field
        When I enter "1 main Street" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "<<<EMPTY>>>" in the country field
        When I click submit
        Then I will be on the shipping page
 
    Scenario: Negative Scenario (16)


        Given I go to the homepage
        When I select the product "Premium Laptop"
        When I click order product
        Then I will be on the shipping page
        When I enter "will@ca.com" in the email field
        When I enter "will@ca.com" in the confirm email field
        When I enter "will" in the name field
        When I enter "<<<EMPTY>>>" in the address field
        When I enter "Oxford" in the address 2 field
        When I enter "Oxfordshire" in the county field
        When I enter "OX294TP" in the postcode field
        When I select "England" in the country field
        When I click submit
        Then I will be on the shipping page