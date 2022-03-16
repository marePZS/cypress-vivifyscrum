/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"
import { myOrganizations } from "../pageObject/my-organizations";

describe('board', ()=>{

    before('login', ()=>{
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    it('chose organization', ()=>{
        cy.url().should('contain', '/my-organizations');
        cy.get('h2').should('be.visible');
        cy.get('.organization-list-item').eq(0).click();
        myOrganizations.modalConfirmBtn.click();        
    })

    it('add new board', ()=>{
        
        newBoard.createBoard('novi Board');
        
    })
})