// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// Cypress.Commands.add('doesExist', { prevSubject: true }, ($subject) => {
//     return Cypress.Promise.resolve($subject.length > 0)
//   })



// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

// To Find Element BY Name
Cypress.Commands.add('getByName', (name) => 
{ 
    Cypress.log(
    {
        displayName: 'getByName',
        message: name,
        consoleProps()
        {
            return{
                selector: name
            }
        }
    })

    cy.get(`[name="${name}"]`, {log: false})
})

// To Find Element BY Placeholder
Cypress.Commands.add('getByPlaceHolder', (name) => 
{ 
    Cypress.log(
    {
        displayName: 'getByPlaceHolder',
        message: name,
        consoleProps()
        {
            return{
                selector: name
            }
        }
    })

    cy.get(`[placeholder="${name}"]`, {log: false})
})

Cypress.Commands.add('selectOptionByName', (selector, month) => 
{
    Cypress.log(
    {
        displayName: 'selectOptionByName',
        message: selector + '\t' + month,
        consoleProps()
        {
            return{
                selector: selector + '\t' + month
            }
        }
    })

    cy.getByName(selector, {log:false})
    .then(() => 
    {
        cy.getByName(selector, {log:false})
        .select(month, {log:false})
    })
})
  

// To Find Element By Password
Cypress.Commands.add('getByTypeAndValue', (type, value) => 
{
    Cypress.log(
    {
        displayName: 'getByTypeAndValue',
        message: type + '\t' + value,
        consoleProps()
        {
            return{
                selector: type + '\t' + value
            }
        }
    })
    cy.get(`[type="${type}"]`).contains(`${value}`, {log:false})
})



