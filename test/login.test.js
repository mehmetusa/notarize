const loginPage = require("../pages/login.page");
const configData = require("../config");
const constants = require("../constants");

describe("login page feature test", async () => {
  it("verify sign up link", async () => {
    await browser.url("/");
    await browser.maximizeWindow();

    const signUp = await $("=Sign up");
    const signUp_ = await signUp.getText();

    expect(signUp_).equal(constants.SIGN_UP);
  }),

  it("verify login page title", async () => {
    await browser.url("/");
    await browser.maximizeWindow();

    const title = await $("._1JdggY66EFijRLpduB_wZG");
    const title_ = await title.getText();

    expect(title_).equal(constants.LOGIN_PAGE_TITLE);
  }),

  it("verify error text if wrong password typed", async () => {
    await browser.url("/");
    await browser.maximizeWindow();

    const email_ = await $("[name = 'email']");
    const continue_ = await $(".CoreButton-children");
    const password_ = await $("#password");

    await email_.setValue(configData.username);
    await continue_.click();
    await password_.setValue(configData.wrongPassword);
    await continue_.click();

    const errorText = await $("//form/p");
    const errorText_ = await errorText.getText();

    expect(errorText_).equal(constants.WRONG_PASSWORD_MESSAGE);
  }),
  
  it("verify logout", async () => {
    await browser.url("/");
    await browser.maximizeWindow();

    const email_ = await $("[name = 'email']");
    const continue_ = await $(".CoreButton-children");
    const password_ = await $("#password");

    await email_.setValue(configData.username);
    await continue_.click();
    await password_.setValue(configData.password);
    await continue_.click();

    const menu = await $("(//div[@class='MenusDropdown--target'])[2]");
    await menu.click();

    const logOut = await $("=Log Out");
    const logOut_ = await logOut.getText();

    expect(logOut_).equal(constants.LOGIN_PAGE_TITLE2);
  });
});
