Feature: Amazon Application
As a user I should be able to to interact with the Amazon Application
    
    
    Scenario: A user should be able to Get the lowest Price of Computer accessories and Log the price
        Given I launch the app
        When I click on hamburger menu
        And I click on Computers
        And I click on Table Accessories
        Then I filter the results by Brand “JETech”
       # When I click on filter field
        And I sort the JETech results with “Newest Arrivals”
        And I Click on the lowest priced item.
        Then I Switch the Window, Assert that About this item section is present and section text to console
        

