describe('item added and length the todo',()=>{

    it("Add a new Item on submit form",()=>{
        cy.visit('/')
        const text = "BUY MILK"
        cy.server()

        cy.route("POST","/api/task",{
            title:text,
            id:1,
            status:false
        })

        cy.get(".task-input")
        .type(text)
        .type("{enter}")       
        cy.get(".task-list")
        .should('have.length',1)
        .and('contain',text)
    })

     it("loading the data",()=>{
        
         cy.server()
         cy.route("GET","/api/task", "fixture:task")
             cy.visit('/') 
             cy.get("#111").click()
             cy.get('.task-list li')
             .should("have.length", 2)
     })
})