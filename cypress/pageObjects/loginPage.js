class loginPage {

    openURL() {
        return cy.visit("https://www.mytheresa.com/en-de/men.html")
    }

    clickMyAccount() {
        return cy.get('#myaccount').should('be.visible').click()
    }

    emailTextBox() {
        return cy.xpath('//div[@id="qa-login-email"]//input[@id="email"]').should('be.visible')
    }

    passwordTextBox() {
        return cy.xpath('//div[@id="qa-login-password"]//input[@id="pass"]').should('be.visible')
    }

    clickLoginButton() {
        return cy.xpath('//span[text()="Login"]').should('be.visible').click()
    }

    successMsg() {
        return cy.xpath('//p[@class="hello hs1"]').should('be.visible').should('contain','HELLO,')
    }
}

export default loginPage