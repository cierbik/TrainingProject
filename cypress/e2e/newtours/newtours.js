import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given("start ", () => {
  cy.visit("http://www.webdriveruniversity.com/Login-Portal/index.html?");
});

When("action", () => {
  cy.url().should("contain", "Login-Portal");
});
