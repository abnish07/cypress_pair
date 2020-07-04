describe("Check for form",()=>{
    beforeEach(()=>{
        cy.visit("/")
    })

    it("it's home page",()=>{
        // cy.visit("http://localhost:3000/")
        cy.focused()
            .should("have.class","task-input")
    })

    it("it's input check",()=>{
        const itemName = "Rice"
        cy.get(".task-input")
        .type(itemName)     
        .should("have.value",itemName)
    })

    it("it's delete button check",()=>{
        const itemName = "button"
        cy.get('.btn')
        .type(itemName)  
        .should("have.value",itemName)
    })


})