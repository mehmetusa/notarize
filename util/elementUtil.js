class ElementUtil{

    doClick(element){
        element.waitForDisplayed(2000)
        element.click()
    }

    doSetValue(element, value){
        element.waitForDisplayed(2000)
        element.setValue(value)
    }

    doGetText(element){
        element.waitForDisplayed(2000)
        return element.getText()
    }

    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }

}

module.exports = new ElementUtil()