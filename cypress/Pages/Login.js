class LoginPage{

    elements={

        //input de Email
        email: ()=> cy.get('#email'),
        //Input de password
        password: ()=> cy.get('#password'),
        //Boton crear cuenta
        newAccount: ()=> cy.get('.text-info'),
        //Boton de logeo
        buttonLogin: ()=> cy.get('.btn-outline') ,
        //Resetear contrasena
        resetPass:()=> cy.get('.text-hover-primary'),
        //Mensaje credenciales invalidas
        alertMessage: ()=> cy.get('.form-text')

        
    }
  
    clickEmail(user){
        this.elements.email().click().should('have.attr', 'placeholder', 'Correo electrónico.').type(user)
    }

    clickPassword(psw){
        this.elements.password().click().should('have.attr', 'placeholder', 'Ingresa tu contraseña.').type(psw)
    }

    clicknewAccount(){
        this.elements.newAccount().click().should('contain.text','Crea una')
    }

    clickButtonLogin(){
        this.elements.buttonLogin().click().should('contain.text','Iniciar sesión')

    }

    clickResetPass(){
        this.elements.resetPass().click().should('contain.text','¿Olvidaste tu contraseña?')
    }

    ValidateAlertMessage(){
        this.elements.alertMessage().click().should('contain.text','Las credenciales proporcionadas son inválidas.')
    }
 


}

module.exports = new LoginPage();