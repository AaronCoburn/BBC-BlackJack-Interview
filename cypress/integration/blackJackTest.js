/// <reference types="Cypress" />
const { iteratee } = require("lodash")
const { hasUncaughtExceptionCaptureCallback } = require("process")



describe('first test', function(){
    it('Put the lotion in the baasket', function(){
        cy.visit("http://127.0.0.1:5500/index.html")
    })
})
//// When player clicks start button the player is dealt two cards
    it('Cards Test', () => {
        cy.visit("http://127.0.0.1:5500/index.html")

        cy.get('[data-cy=startGameCy]').click()
                let cards = cy.get('#card-el')
                
                .then(() => {
                // make sure it's what we expected

                cy.get('[data-cy="cardsCy"]').should('include.text', 'Cards: ')
                cy.get('[data-cy="cardsCy"]').find('')



        })
})



                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
