let rowsLength;

import loginPage from '../pageObjects/loginPage'

before(() => {
  cy.task('readXlsx', { file: 'cypress/fixtures/testData.xlsx', sheet: "ValidLoginData" }).then((rows) => {
    rowsLength = rows.length;
    cy.writeFile("cypress/fixtures/xlsxData.json", { rows })
  })
})

describe('Mytheresa Automation Task', () => {

  it('Check user should login successfully by filling all the required fields', () => {

    //ignore all uncaught JS exceptions.
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    const loginPageObj = new loginPage()
    cy.fixture('xlsxData').then((data) => {
      for (let i = 0; i < rowsLength; i++) {
        loginPageObj.openURL()
        loginPageObj.clickMyAccount()
        loginPageObj.emailTextBox().type(data.rows[i].email)
        loginPageObj.passwordTextBox().type(data.rows[i].userPassword);
        loginPageObj.clickLoginButton()
        loginPageObj.successMsg()
      }
    })
  })
})
