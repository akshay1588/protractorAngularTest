var resources = require('../resources');

describe('Feature Tab', function() {
  beforeEach(function() {
    //browser.driver.ignoreSynchronization = true;
    browser.get(resources.constants.getURL);
    element(
      by.xpath(resources.xpath.features.featuresLink)
    ).click();
  });

  it('should find the words Cross Platform', function() {
    // Asked to find words, Cross Platform.
    expect(
      element(
        by.xpath(resources.xpath.features.crossPlatformText)
      ).isDisplayed()
    ).toBe(true);
  });

  it('should find the words Speed and Performance', function() {
    //Asked to find words Speed and Performance
    expect(
      element(
        by.xpath(resources.xpath.features.speedPerfText)
      ).isDisplayed()
    ).toBe(true);
  });
});
