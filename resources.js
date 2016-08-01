module.exports = {
  constants: {
    getURL: 'https://angular.io'
  },


  xpath: {
    // FEATURES PAGE
    features: {
      featuresLink: '//a[contains(@href, "/features.html")]',
      crossPlatformText: '//*[@class="text-headline" and text()="Cross Platform"]',
      speedPerfText: '//h2[contains(., "Speed & Performance") and (@class="text-headline")]'
    },

    // SEARCH DOCS PAGE
    docs: {
      docTab: '//a[contains(@href, "/docs/ts/latest/") and @class="main-nav-button md-button md-ink-ripple"]/span[text()="Docs"]',
      searchBar: '//input[@type="search" and @id="search-io"]',
      directiveText: '//*[contains(@class, "section")]/em[text()="Directive"]/../em[text()="DirectiveMetadataFactory"]',
      directiveDataFactoryText: '//h1[contains(., "Directive: DirectiveMetadataFactory") and (@class="hero-title text-display-1 is-standard-case")]'
    },

    // SEARCH TUTORIAL
    tutorial: {
      tutorialTab: '//div[contains(@class, "nav-blocks")]/a[contains(@href, "/docs/ts/latest/tutorial/")]',
      contentHeaderTitle: '//div[contains(@class, "inner-header")]/h1[contains(@class, "hero-title text-display-1")]',
      heroLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt1.html") and @title="We build a simple hero editor"]',
      masterLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt2.html") and @title="We build a master/detail page with a list of heroes"]',
      compLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt3.html") and @title="We refactor the master/detail view into separate components"]',
      serviceLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt4.html") and @title="We create a reusable service to manage our hero data calls"]',
      routingLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt5.html") and @title="We add the Angular Component Router and learn to navigate among the views"]',
      httpLink: '//a[contains(@href, "/docs/ts/latest/tutorial/toh-pt6.html") and @title="We convert our service and components to use Http"]',
      linkTutorial: '//div[contains(@class, "nav-ordered-lists")]/ul/li/a[contains(@href, "tutorial")]'
    }
  }
};
