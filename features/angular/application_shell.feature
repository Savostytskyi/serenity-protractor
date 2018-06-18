Feature: Application shell commands for Angular start

  In order to create new Angular project
  As the Developer
  I want navigates to tutorial to get needed commands

  Scenario: Get 'Install the Angular CLI' command from the 'The Application Shell' tutorial                 # scenario 1
    Given Developer opens Angular Home page  
    When Developer navigates to 'QuickStart' page
    And Open 'The Application Shell' tutorial item
    Then Developer sees 'Install the Angular CLI' command 'npm install -g @angular/cli'

  Scenario: Get 'Create a new application' command from the 'The Application Shell' tutorial                # scenario 2
    Given Developer opens Angular Home page
    When Developer navigates to 'QuickStart' page
    And Open 'The Application Shell' tutorial item
    Then Developer sees 'Create a new application' command 'ng new angular-tour-of-heroes'