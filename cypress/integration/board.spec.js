/// <reference types='cypress'/>
import { newBoard } from "../pageObject/board";
import { loginPage } from "../pageObject/login"
import { myOrganizations } from "../pageObject/my-organizations";

describe('board', ()=>{

    before('login', ()=>{
        cy.visit('/login')
        loginPage.login('markopzs1@test.com', 'password123');
    })

    it('check organization', ()=>{
        cy.url().should('contain', '/my-organizations');
        cy.get('h2').should('be.visible');       
    })

    it('add new board', ()=>{
        
        newBoard.createBoard('novi Board');
        
    })
})