describe("just a fun example test", ()=> {

  it("should be fun, 2+2=4", ()=>{
  expect(2+2).equal(4);    
  })


  it('should be able open google.ca', () => {
    
    cy.visit("http://www.google.ca");

    cy.get('.gLFyf').type('youtube funny cat videos {enter}', { delay: 500 });

  });


})