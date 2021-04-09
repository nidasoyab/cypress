/// <reference types="Cypress"/>
import Login from '../../support/pageObjects/login'

describe('90 POE', ()=>{
  beforeEach( ()=>{
    cy.Signin()
  })

  it('Approach', ()=>{
    
    cy.get('#comp-kfgv120i1label').click()
    cy.wait(3000)
    
    cy.scrollTo('bottom')
    cy.get('#comp-kfgv120i0label').click()
    
   
   cy.wait(5000)
  })

   it('How We Help', ()=>{
    cy.get('#comp-kfgv120i0label').click()
    cy.get('#comp-kfgv120i2label').click()
    cy.scrollTo('bottom')
    cy.wait(5000)
     
   })
  
   it('Platform', ()=>{
    cy.get('#comp-kfgv120i0label').click()
    cy.get('#comp-kfgv120i3label').click()
    cy.scrollTo('bottom')
   })
  
   it('People', ()=>{
    cy.get('#comp-kfgv120i0label').click()
     cy.get('#comp-kfgv120i4label').click()
     cy.scrollTo('bottom')
   })

  it('Media', ()=>{
   cy.get('#comp-kfgv120i0label').click()
   cy.get('#comp-kfgv120i5label').click()
   cy.scrollTo('bottom')
   cy.wait(5000)
   })

   it('Partners', ()=>{
    cy.get('#comp-kfgv120i0label').click()
    cy.get('#comp-kfgv120i6label').click()
    cy.scrollTo('bottom')
    cy.wait(5000)
   })

  it('Contacts', ()=>{
    cy.get('#comp-kfgv120i0label').click()
    cy.get('#comp-kfgv120i7label').click()
    cy.scrollTo('bottom')
    cy.wait(5000)
    cy.get('#comp-kfgv120i0label').click()
  })

})