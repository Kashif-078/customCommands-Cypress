/// <reference types="cypress" />

import '../support/commands'

describe('To understand How to use Cypress Custom Commands', () => 
{

    before(() => 
    {   
        cy.intercept('/').as('Google')
        cy.visit('/')
        cy.wait('@Google')

        // cy.visit('https://www.google.com/')
        cy.get('.SDkEP').type('Snapchat signup {enter}')
        cy.get('#result-stats')
        .should('exist')
        .then(() =>
        {
            cy.get('.LC20lb')
            .contains('Sign Up')
            .click()
        })
    })

    after(() => 
    {
        cy.go('back')
    })

    // Now start writing your test cases from here 
    // You can also add context blocks to group relevant test cases
    it('Using Custom Commands', ()=>
    {
        cy.get('.accountsTitle')
        .contains('Sign Up')
        .should('be.visible')
        .then(() =>
        {
            cy.getByName('firstName').type('Muhammad')
            cy.getByName('lastName').type('Usama')
            cy.getByName('username').type('Usama02')
            cy.getByName('password').type('Admin321')
            cy.getByName('email').type('dummyEmail@gmail.com')
            cy.selectOptionByName('birthdayMonth', 'June')
            cy.selectOptionByName
            cy.getByName('birthdayDay').type('7')
            cy.getByName('birthdayYear').type('2012')
            cy.getByTypeAndValue('button', 'Sign Up & Accept')
            // .click()  // If you want to click on the "Signup" button, you should uncomment this line of code 

            /**
             * Both of these lines of code given below aim to select an input field specifically for the "First Name" 
             * input. However, it is generally not recommended to rely on complex DOM traversal or specific CSS 
             * selectors for element selection in Cypress tests. Such approaches can make the tests more fragile and 
             * prone to breaking if there are any changes in the DOM structure.

             * Instead, it is advisable to use more meaningful attributes or labels associated with the elements 
             * to improve the reliability and readability of the tests.
             */

            cy.get('form').children().first().children().children().children().eq(1) //Avoid this approach to select an element
            cy.get('form div.col-xs-6:eq(0) div.form-group input.form-control')      //Avoid this approach to select an element
        })
    })
})