/// <reference types='cypress'/>
import { loginPage } from "../pageObject/login"

describe('my-organizations', ()=>{

    before('backend login', ()=>{
        //cy.loginViaBackend();
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    it('visit page', ()=>{
        //cy.visit('/my-organizations')
        cy.get('h2').should('be.visible');
        
    })

    it('create organization', ()=>{
        cy.get('.vs-c-my-organization--add-new').click();
        cy.get('input').type('Nova Organizacija');
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click();
    })

    it('check ogranizations', ()=>{
        
    })

    it('add new board', ()=>{
        cy.get('.vs-c-organization-boards__item--add-new').click();
        cy.get('.vs-input-border > input').type('novi Board');
        cy.get('[name="next_btn"]').click();
        cy.get(':nth-child(1) > .vs-c-radio > .vs-c-radio-check').click();
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();
        cy.get('[name="next_btn"]').click();

    })

    

})