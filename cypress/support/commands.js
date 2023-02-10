Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Andre')
    cy.get('#lastName').type('Gabriele')
    cy.get('#email').type('andreluiz.gabriele@gmail.com')
    cy.get('#open-text-area').type('Teste')    
    cy.contains('button', 'Enviar').click()
})

