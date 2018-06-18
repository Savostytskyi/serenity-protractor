var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;

var TutorialSteps = function() {

  var AngularHomePage = require("../pages/angular_home_page.js");
  var ApplicationShellPage = require("../pages/application_shel_page.js");
  var QuickStartPage = require("../pages/quick_start_page.js");

  this.World = function MyWorld() {
    this.angularHomePage = new AngularHomePage();
    this.applicationShellPage = new ApplicationShellPage();
    this.quickStartPage = new QuickStartPage();
  };

  this.Given(/^.*opens Angular Home page$/, function (callback) {
    this.angularHomePage.get();
    callback();
  });


  this.When(/^.*navigates to 'QuickStart' page$/, function (callback) {
    this.angularHomePage.navigateToQuickStart();
    callback();
  });

  this.When(/^Open 'The Application Shell' tutorial item$/, function (callback) {
    this.quickStartPage.navigateToAppShell();
    callback();
  });

  this.Then(/^.*sees 'Install the Angular CLI' command '(.*)'$/, function (command, callback) {
    expect(this.applicationShellPage.getAngularCliCommand()).to.eventually.equal(command).and.notify(callback);
  });

  this.Then(/^.*sees 'Create a new application' command '(.*)'$/, function (command, callback) {
    expect(this.applicationShellPage.getCreateProjectCommand()).to.eventually.equal(command).and.notify(callback);
  });
};

module.exports = TutorialSteps;

