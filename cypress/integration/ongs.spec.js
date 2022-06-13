/// <reference types="cypress" />

describe('Ongs', () => {
    it('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3001/register')
        //cy.get busca um elemento
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@gmail.com');
        cy.get('[data-cy=whatsapp]').type('48999999999');
        cy.get('[data-cy=city]').type('Florianópolis');
        cy.get('[data-cy=uf]').type('SC');

        //sempre antes da ação que despara a chamada HTTP
        //routing
        //start server com cy.server()
        // criar uma rota com cy.route()
        //atribuir rota a um alias
        //esperar com cy.wait e fazer uma validação

        // cy.server();
        cy.route('POST', '**/ongs').as('postOng');

        cy.get('[data-cy=submit]').click();

        cy.wait('@postOng').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('id');
            expect(xhr.response.body.id).is.not.null;
        });
    });

    it('devem poder realizar um login no sistema', () => {

        const createOngId = Cypress.env('createdOngId');
        cy.log(createOngId)

        cy.visit('http://localhost:3001')
        cy.get('input').type(createOngId);
        cy.get('.button').click()
    });
})