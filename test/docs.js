var resources = require('../resources.js');

//code which searches for word Directive and validating string Directive:DirectiveMetadataFactory
describe('Docs Tab', function() {

  beforeEach(function() {
    browser.driver.ignoreSynchronization = true;
    browser.get(resources.constants.getURL);
    element(
      by.xpath(resources.xpath.docs.docTab)
    ).click();
  });

  //Asked to search for the word directive
  it('should search for the word directive', function() {
    //Finding search bar and sending keys directive
    element(
      by.xpath(resources.xpath.docs.searchBar)
    ).sendKeys('directive');
    //implicit wait to verify autocomplete
    browser.driver.manage().timeouts().implicitlyWait(1000);

    //Clikcing on Directive:DirectiveMetadataFactory
    element(
      by.xpath(resources.xpath.docs.directiveText)
    ).click();

    //validating string Directive:DirectiveMetadataFactory is present
    expect(
      element(
        by.xpath(resources.xpath.docs.directiveDataFactoryText)
      ).isPresent()
    ).toBe(true);
  });
});
