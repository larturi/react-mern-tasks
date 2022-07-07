/// <reference types="cypress" />

describe('Login', () => {

    it('<Login /> - Validaciones, Alertas y Login', () => {

        cy.visit('/')

        // Alerta de error
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El usuario no existe')

        // Password incorrecto
        cy.get('[data-cy=email]').clear().type('lea.arturi@pepe.com')
        cy.get('[data-cy=password]').clear().type('12333322244')
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Password incorrecto')

        // El usuario no existe
        cy.get('[data-cy=email]').clear().type('lea.arturwwwi@pepe.com')
        cy.get('[data-cy=password]').clear().type('12333322244')
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=alerta]')
            .should('exist')
            .invoke('text')
            .should('eq', 'El usuario no existe')

        // Login correcto
        cy.get('[data-cy=email]').clear().type('lea.arturi@gmail.com')
        cy.get('[data-cy=password]').clear().type('123123')
        cy.get('[data-cy=submit]').click()

        cy.get('[data-cy=seleccionaProyecto]')
            .should('exist')
            .invoke('text')
            .should('eq', 'Selecciona un proyecto')
    });

});