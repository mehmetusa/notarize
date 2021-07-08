const elementUtil = require('../util/elementUtil');
const constants = require('../constants');


class LoginPage {
   
    // get usernameInput() { return $("[name = 'email']") }
    // get passwordInput() { return $('#password') }
    // get continueButton() { return $('=Continue') }

    isSignUpLinkExist() {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }
}
module.exports = new LoginPage()