describe('template spec', () => {
  it('agregar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("vender ropa{enter}")
  
    })
    })
  
  
  
  
    it('seleccionar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
    })
  
  
  
    it('des-seleccionar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("comer lentejas{enter}")
      cy.get('[data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="todo-item-toggle"]').click()
    })
  
  
  
  it('editar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("acariciar un perro{enter}").click().click()
    cy.get('[data-testid="text-input"]').type("acariciar un gato{enter}")
    
  })



  it('borrar tarea', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    cy.get('[data-testid="text-input"]').type("acariciar un perro{enter}")
    cy.get('.destroy').click({force:true})
  
    
  })







  describe('template spec', () => {
    it('filtrar tarea', () => {
      cy.visit('https://todomvc.com/examples/react/dist/')
      cy.get('[data-testid="text-input"]').type("salir de casa{enter}")
      cy.get('[data-testid="text-input"]').type("acariciar un perro{enter}")
      cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="text-input"]').type("comprar el pan{enter}")
      cy.get('[data-testid="text-input"]').type("entrar en casa{enter}")
      cy.get(':nth-child(1) > .view > [data-testid="todo-item-toggle"]').click()
      cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
  
  
    })
    })