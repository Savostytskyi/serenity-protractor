var AppShellPage = function() {

    this.getAngularCliCommand = function() {
        browser.driver.sleep(1000);
      return element(by.xpath("(//code[@class='animated fadeIn'])[1]")).getText();
    };

    this.getCreateProjectCommand = function() {
        browser.driver.sleep(1000);
        return element(by.xpath("(//code[@class='animated fadeIn'])[2]")).getText();
    }
};
  
module.exports = AppShellPage;