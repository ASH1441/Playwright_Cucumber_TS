@smoke
Feature: Login Feature
Background:
    Given User is on the login page
    And User click on the login link
      
      Scenario: Login should be success
        When User enters valid username "tester" and password "passwort"
        And User click on the login button
        Then Login should be success

      Scenario: Login should not be success
        When User enters valid username "non-tester" and password "passwort"
        And User click on the login button
        Then Login should fail


































  # Scenario Outline: Login validation
  #   Given User is on the login page
  #   And User click on the login link
  #   When User enters valid username "<username>" and password "<password>"
  #   And User click on the login button
  #   Then User should be redirected to the home page

  #   Examples:
  #     | username | password  |
  #     | tester   | passwort  |
  #     | usertest | passwort  |