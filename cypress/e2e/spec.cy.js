/// <reference types="cypress" />

describe('Login', () => {
    it('Verificar Login Page', () => {
        cy.visit('http://localhost:3000')

        // Probar titulo
        cy.get('[data-cy=titulo]')
            .invoke('text')
            .should('equal', 'Iniciar Sesión')
    });
});