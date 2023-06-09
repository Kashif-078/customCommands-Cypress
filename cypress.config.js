const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
  	// pageLoadTimeout: 6000,
  	e2e: 
	{
		baseUrl: 'https://www.google.com/', // Set the base URL 
    	setupNodeEvents(on, config) 	
		{
      		// Implement node event listeners here
    	},
		testIsolation: false,
		chromeWebSecurity: false,
  	},
});

