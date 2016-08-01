var resources = require('../resources');

//This code checks for the following under Tutorial Tab - Hero Editor, Master/Detail, Multiple Components, Services, Routing and Http
describe('Tutorial Tab', function() {

  beforeEach(function() {
    browser.get(resources.constants.getURL);
    element(
      by.xpath(resources.xpath.docs.docTab)
    ).click();
    element(
      by.xpath(resources.xpath.tutorial.tutorialTab)
    ).click();
 });

 //Asked to click Hero Editor and verify Hero Editor is being Dislayed on page
    it('should click Hero Editor', function() {

    //Finding Hero Editor and clicking on it
    element(
      by.xpath(resources.xpath.tutorial.heroLink)
    ).click();

    //validating string HERO EDITOR is displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function (hero) {
      expect(hero).toEqual('THE HERO EDITOR');
    });
  });

  //Asked to click on Master/Detail and validate Master/Detail is being displayed on page
  it('should check for Master/Detail', function() {

    //Finding Master/Detail and clicking on it
    element(
      by.xpath(resources.xpath.tutorial.masterLink)
    ).click();

    //Validating string MASTER/DETAIL is being displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function(master) {
      expect(master).toEqual('MASTER/DETAIL');
    });
  });

  //Asked to click on Multiple Components and validating Multiple Components is being Displayed
  it('should check for Multiple Components', function() {

    //Finding Multiple Components and clicking it
    element(
      by.xpath(resources.xpath.tutorial.compLink)
    ).click();

    //Validating string MULTIPLE COMPONENTS are being displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function(components) {
      expect(components).toEqual('MULTIPLE COMPONENTS');
    });
  });

  //Asked to click on Services and validate Services is being displayed on page
  it('should check for Services', function() {

    //Finding Services and clicking it
    element(
      by.xpath(resources.xpath.tutorial.serviceLink)
    ).click();

    //Validating string SERVICES is being displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function(service) {
      expect(service).toEqual('SERVICES');
    });
  });

  //Asked to click on Routing and validate ROUTING is being displayed
  it('should check for Routing', function() {

    //Finding Routing and clicking on it
    element(
      by.xpath(resources.xpath.tutorial.routingLink)
    ).click();

    //Validating the string ROUTING is being displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function(routing) {
      expect(routing).toEqual('ROUTING');
    });
  });

  //Asked to click on Http and validate HTTP is being displayed on page after clicking
  it('should check for Http', function() {

    //Finding Htpp and clicking it
    element(
      by.xpath(resources.xpath.tutorial.httpLink)
    ).click();

    //Validating string HTTP is displayed on page after clicking
    element(
      by.xpath(resources.xpath.tutorial.contentHeaderTitle)
    ).getText().then(function(http) {
      expect(http).toEqual('HTTP');
    });
  });

  //Should look for tutorial links in a for loop
  //DUPLICATE test, wanted to LEARN/EXPERIMENT
  it('should look for tutorial link in for loop', function() {
    // Look for All Tutorial Links 1-7 by xpath
    element.all(
      by.xpath(resources.xpath.tutorial.linkTutorial)
    ).map(function(currentElement) {
      // Once we get them, we just extract the text
      return currentElement.getText();
    }).then(function(allLinkText) {
      console.log('All Link Texts Extracted: ', allLinkText);
      // 7 elements including 1. Introduction
      allLinkText.forEach(function(now, index) {
        console.log('Processing text', now);
        // Split because Title in the Element DOM is without "[index]. "
        var topic = now.split('. ');
        topic = topic[1];
        // After split check if topic is Introduction
        if (topic === 'Introduction') {
          //ignore introduction link
          // Do nothing
          console.log('introduction detected');
        } else {
          //This will check for links 2-7
          console.log('non introduction link detected')
          // Clicking the element 2-7 using the variable now OR a combination of index and topic
          element(by.linkText((index + 1) + '. ' + topic)).click();
          // After clicking, match string to be validated or displayed
          element(
            // Extract text from xpath
            by.xpath(resources.xpath.tutorial.contentHeaderTitle)
          ).getText().then(function(dynTitle) {
            // String on page is upper case
            // Convert topic to uppercase and check
            expect(dynTitle).toEqual(topic.toUpperCase());
            console.log('I finished expecting', dynTitle, topic.toUpperCase());
          });
        }
      });
    });
  });
});
