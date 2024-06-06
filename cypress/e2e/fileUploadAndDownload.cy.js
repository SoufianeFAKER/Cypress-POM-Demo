
/// <reference types="cypress-downloadfile"/>

it('File Upload Demo', () => {
    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
})

it('Download File Demo', () =>{
    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
})  