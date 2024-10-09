const { Given, When, Then } = require("@wdio/cucumber-framework");
const page = require("../pages/page");
const { loginPage } = require("../pages/login.page");
const inventoryPage = require("../pages/inventory.page");


//  scenario 1
Given(/^ I open Saucedemo Website$/, async() => {
    await page.open();
})

When (/^I Login with valid credentials$/, async() =>{
    await loginPage.login('standard_user', 'secret_sauce');
})

Then (/^I should be on the inventory page$/, async() =>{
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
})

//Scenario 2

Given(/^ I open Saucedemo Website$/, async() => {
    await page.open();
})

When (/^I login with invalid username$/, async() =>{
    await LoginPage.login('invalid_user', 'secret_sauce');
})

Then (/^I should see an error message$/, async() =>{
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
})

//Scenario 3

Given(/^ I open Saucedemo Website$/, async() => {
    await page.open();
})

When (/^I login with invalid password$/, async() =>{
    await LoginPage.login('standard_user', 'invalid_password');
})

Then (/^I should see an error message$/, async() =>{
    await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');
})