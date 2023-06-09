declare namespace Cypress 
{
    interface Chainable<Subject = any> 
    {
        // Add declarations for other custom commands if needed

        /**
        * Custom command to select an element by its name attribute.
        *
        * @param name - The name attribute of the element to select.
        * @example
        * cy.getByName('myNameAttribute')
        */
        getByName(name: string): Chainable<Element>;

         /**
        * Custom command to select an element by its placeHolder attribute.
        *
        * @param name - The placeHolder attribute of the element to select.
        * @example
        * cy.getByPlaceHolder('placeHolder')
        */
         getByName(name: string): Chainable<Element>;

        /**
        * Custom command to select an element by its name attribute.
        *
        * @param selector - The name attribute of the element to select.
        * @param month - The name of the month to select from options.
        * @example
        * cy.selectOptionByName('birthdayMonth', 'April')
        */
        selectOptionByName(selector: string, month: string): Chainable<Subject>;

        /**
        * Custom command to select an element by its name attribute.
        *
        * @param type - The type attribute of the element to select.
        * @param value - The text contained by an element to select.
        * @example
        * cy.getByTypeAndValue('button', 'Sign In')
        */
        getByTypeAndValue(type: string, value: string): Chainable<Subject>;

    }
}
  