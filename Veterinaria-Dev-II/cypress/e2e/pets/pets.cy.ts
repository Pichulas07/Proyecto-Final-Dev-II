describe("Pets Details Page", () =>{
    it("should display the home", () => {
        cy.visit("");
        cy.location("pathname").should("eq", "/");
    });

    it("should display the corrct total cards", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.getBySel("header").contains("Pets").click();
        cy.location("pathname").should("eq", "/pets");
        cy.getBySel("pet-card").should("have.length", 2);
    });
    
    it("should press logo to back home", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.getBySel("header").contains("Pets").click();
        cy.location("pathname").should("eq", "/pets");
        cy.getBySel("img").click();
    });

    it("should display the card details", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.getBySel("header").contains("Pets").click();
        cy.location("pathname").should("eq", "/pets");
        cy.getBySel("pet-name").first().should("be.visible").should("contain.text", "Luna");
    });

    it("should display edit profile", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.getBySel("header").contains("Profile").click();
        cy.location("pathname").should("eq", "/profile");
        cy.getBySel("edit-profile").click();
    });

    it("should display the pets details", () => {
        cy.visit("/");
        cy.location("pathname").should("eq", "/");
        cy.getBySel("header").contains("Pets").click();
        cy.location("pathname").should("eq", "/pets");
        cy.getBySel("pet-name").first().should("be.visible").should("contain.text", "Luna").click();
    });
});