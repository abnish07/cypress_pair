describe('item added and length the todo',()=>{

    it.only("Add a new Item on submit form",()=>{
        cy.visit('/')
        // const text = "Buy Milk"
        // cy.server()
        // cy.route("POST","/api/task",{
        //     title: text,
        //     id:1,
        //     status: false
        // })
        
        const text = "BUY MILK"
        let obj = {
            title:text,
            id:1,
            status:false
        }
        cy.server()
        cy.route({
            method: 'POST',
            url: "/api/task",
            status: 500,
            response: obj
        })

        // cy.get(".task-input")
        // .type(text)
        // .type(".btns")
        
        // cy.get(".task-list li")
        // .should('have.length',1)
        // .and('contain',text)
        
    


        // cy.get('.task-input')
        // .type(text)
        // .type("{enter}") 
        // // .type('submit')
        //     cy.get(".newbtn").click()
        //     cy.get(".task-list")
        //     // .should("have.length", 1)
        //     .not('contain', text)
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