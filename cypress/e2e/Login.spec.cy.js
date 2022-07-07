/// <reference types="cypress" />

describe('Login', () => {

    it('<Login /> - Validaciones, Alertas y Login', () => {

        cy.visit('/')

        // Alerta de error
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Todos los campos son obligatorios')
    });

});