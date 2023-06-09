# customCommands-Cypress
Cypress custom commands allow you to extend the functionality of Cypress by creating your own reusable commands. These commands can encapsulate complex logic or repetitive tasks, making your test code more readable, modular, and maintainable.
With custom commands, you can create abstractions for commonly used interactions or assertions, select elements based on specific attributes, interact with external APIs, handle authentication, or perform any other custom actions needed for your tests.
Custom commands can be defined in separate files and loaded into your Cypress test suite, making them available for use across multiple test cases. They provide a way to enhance the expressiveness of your test code and promote reusability, making it easier to write and maintain Cypress tests.
By leveraging custom commands, you can streamline your test code, improve test readability, and create a more efficient and effective test suite in Cypress.

**About customCommands.cy.js file**
The code provided is a test case written using Cypress, a JavaScript-based end-to-end testing framework. It demonstrates the usage of custom commands defined in the commands.js file (referenced through import '../support/commands'). The code provided is a Cypress test case that demonstrates the usage of custom commands. It tests the sign-up functionality of a website by filling out a form with user information and interacting with form fields and buttons. The test showcases how to select elements by name, placeholder, type, and value using custom commands.

**About Commands.js file**
This commands.js file contains custom Cypress commands that extend the functionality of Cypress test automation framework. These commands are used to select elements based on different attributes such as name, placeholder, type, and value.
The custom commands defined in this file are:
getByName: Selects an element by its name attribute.
getByPlaceHolder: Selects an element by its placeholder attribute.
selectOptionByName: Selects an option from a dropdown by its name attribute.
getByTypeAndValue: Selects an element by its type attribute and the text it contains.
These commands provide a more expressive and convenient way to interact with elements in Cypress tests, making the test code more readable and maintainable.
**To use these commands in Cypress tests, simply import the commands.js file in your test files or support files, and the commands will be available to use on the cy object.**

**About Commands.ts file**
The commands.ts file is a TypeScript declaration file that defines custom Cypress commands. These commands extend the Cypress test automation framework by adding additional functionality to interact with elements in tests.
The declare namespace Cypress block defines a namespace for Cypress commands, allowing you to extend the Chainable interface and add custom command declarations. Each custom command is defined within the interface Chainable<Subject> block, specifying the command name, parameter types, and return type.
The JSDoc comments above each command provide descriptions and examples of how to use the commands, including the parameter details and usage examples.
By including this commands.ts file in your Cypress project, you can leverage these custom commands in your tests, improving readability and reusability of test code.
Please note that this is a TypeScript declaration file, which provides type information for the custom commands. You will also need to include the corresponding implementation of these commands in your Cypress project for them to be executed properly during test runs.

  **How to Clone and Run a Cypress Project from a GitHub Repository**

Install Git: If you don't have Git installed on your computer, download and install it from the official Git website (https://git-scm.com/downloads).
Open a terminal or command prompt: Launch a terminal or command prompt on your computer. On Windows, you can use Command Prompt or PowerShell. On macOS or Linux, you can use the Terminal application.
Navigate to the directory where you want to clone the repository: Use the cd command to change to the desired directory. For example, if you want to clone the repository in your "Documents" folder, you can use the command cd Documents.
Clone the repository: In the terminal or command prompt, use the git clone command followed by the URL of the repository you want to clone. For example, if the repository URL is https://github.com/Kashif-078/customCommands-Cypress, you can use the command git clone https://github.com/Kashif-078/customCommands-Cypress.
Change to the cloned repository directory: After the cloning process is complete, use the cd command to change to the cloned repository's directory. For example, if the repository is named "my-cypress-project," you can use the command cd my-cypress-project.
Install dependencies: Most projects have dependencies that need to be installed. Use a package manager like npm or yarn to install the project dependencies. If you're using npm, you can run the command npm install. If you're using yarn, you can run the command yarn install.
Configure the project: Depending on the project, you might need to configure it before running it. Check if there are any configuration files or instructions provided in the project's documentation and follow them accordingly.
Run the Cypress tests: Once the dependencies are installed and the project is configured, you can run the Cypress tests. Use the Cypress command-line interface (CLI) to execute the tests. The command to run the tests is usually cypress run. Run this command in the terminal or command prompt while inside the project directory.
View the test results: After the tests finish running, Cypress will provide a detailed report of the test results in the terminal or command prompt. You can analyze the results to see if the tests passed or if there were any failures or errors.
  
That's it! You have successfully cloned a GitHub repository of a Cypress project and run it on your computer. Make sure to follow any additional instructions or documentation specific to the project you're working on to ensure a successful setup and execution.

