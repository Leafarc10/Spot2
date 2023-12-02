/// <reference types="cypress"/>
import Login from '../../Pages/Login'
import Home from '../../Pages/Home'
import Admin from '../../Pages/Admin'


describe('SET DE PRUEBAS CHALLENGE SPOT2',()=>{



    beforeEach('Nombre de la funcion', function(){ 
        
        cy.visit('admin.staging.spot2.mx')
    })



    it('Login Cliente successful',()=>{
        
        Login.clickEmail('tech+qa@spot2.mx')
        Login.clickPassword('4gZahqdifFLFeGT')
        Login.clickButtonLogin()

   
    })



    it('Login Cliente invalido',()=>{
        
        Login.clickEmail('Chocolatin.Bariloche@spot2.mx')
        Login.clickPassword('pepe1234')
        Login.clickButtonLogin()
        Login.ValidateAlertMessage()


   
    })




})
