Feature: Saucedemo Login Test
    @all @positive
    Scenario: Login Successfully with valid credentials
        Given I open Saucedemo Website 
        When I Login with valid credentials
        Then I should be on the inventory page
    @all @negative
    Scenario: Verify login failed with invalid username
        Given I open Saucedemo Website 
        When I login with invalid username 
        Then I should see an error message
    @all @negative
    Scenario: Verify login failed with invalid password
        Given I open Saucedemo Website 
        When I login with invalid password 
        Then I should see an error message