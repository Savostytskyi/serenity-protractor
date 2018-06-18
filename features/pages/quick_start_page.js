var QuickStartPage = function() {

    //this.tutorial_menu_item = by.xpath('//button[contains(@title, "The Tour")]')
    //this.app_shell_sub_menu = by.xpath('//a[contains(@title, "Part 2")]')

    this.navigateToAppShell = function() {
      browser.get('https://angular.io/tutorial/toh-pt0');
    }
};
  
module.exports = QuickStartPage;