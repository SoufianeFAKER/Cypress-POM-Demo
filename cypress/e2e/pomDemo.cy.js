import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

beforeEach(() => {
  cy.visit("https://admin-demo.nopcommerce.com/");
  // cy.visit('https://opensource-demo.orangehrmlive.com/')
});

describe("All Login Tests", () => {
  it("Login with valid credentials", () => {
    loginPage.enterUserName("admin@yourstore.com");
    loginPage.enterPassword("admin");
    loginPage.clickLogin();
    cy.get(".content-header > h1");
  });

  it("Login with invalid email", () => {
    loginPage.enterUserName("admin123@yourstore.fr");
    loginPage.enterPassword("admin");
    loginPage.clickLogin();
    cy.get(".content-header > h1");
  });
});

it("Login with invalid password", () => {
  loginPage.enterUserName("admin@yourstore.com");
  loginPage.enterPassword("admin123");
  loginPage.clickLogin();
  cy.get(".content-header > h1");
});
