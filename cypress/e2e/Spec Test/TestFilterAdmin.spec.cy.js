/// <reference types="cypress"/>
import Login from '../../Pages/Login'
import Home from '../../Pages/Home'
import Admin from '../../Pages/Admin'
import Validate from '../../Validations/Validate'


describe('SET DE PRUEBAS CHALLENGE SPOT2',()=>{



    beforeEach('Nombre de la funcion', function(){ 
        
        cy.visit('admin.staging.spot2.mx')
        Login.clickEmail('tech+qa@spot2.mx')
        Login.clickPassword('4gZahqdifFLFeGT')
        Login.clickButtonLogin()
        Home.clickAdmin()
    })


    it('Filtro por Nombre y validacion',()=>{
        
        Admin.searchName('Roma Norte 196')
        cy.wait(1000)
        Validate.validateNameTable('Roma Norte 196')

    })


    it('Filtro por Id y validacion',()=>{
        
        Admin.searchId('20271')
        cy.wait(1000)
        Validate.validateIdTable('20271')

    })


    it('Filtro por Precio en MXN y validacion',()=>{
        
        Admin.selectPriceRangeMxn(10,100)
        Validate.validateTablePrice(10,100)

    })


    it('Filtro por Precio en U$D y validacion',()=>{
        
        Admin.selectPriceRangeUsd(10,100)
        Validate.validateTablePrice(10,100)

    })

})
