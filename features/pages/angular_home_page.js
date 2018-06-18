var AngularHomePage = function() {

    //this.get_started_button = by.css('.homepage-container > .button')

    this.get = function() {
      browser.get('https://angular.io/');
      browser.driver.manage().window().maximize();
    };
  
    this.navigateToQuickStart = function() {
      element(by.xpath('//a[text()="Get Started"]')).click();

    }
};
  
module.exports = AngularHomePage;