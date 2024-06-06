export class LoginPage {
  username_textbox = "#Email";
  password_textbox = "#Password";
  login_button = ".button-1";

  enterUserName(username) {
    cy.get(this.username_textbox).clear().type(username);
  }

  enterPassword(password) {
    cy.get(this.password_textbox).clear().type(password);
  }

  clickLogin() {
    cy.get(this.login_button).click();
  }
}
