const EC = protractor.ExpectedConditions;
const TIMEOUT_MS = 30000;

const clickWhenClickable = function(pageelement){
    browser.sleep(1000);
    browser.wait(EC.elementToBeClickable(pageelement),TIMEOUT_MS);
    pageelement.click();
};
 const TypeTextWhenElementVisible = function(pageelement,textToEnter){
     browser.wait(EC.visibilityOf(pageelement),TIMEOUT_MS);
     pageelement.clear().sendKeys(textToEnter);
};
const selectDropdownWhenVisible = function(pageelement,indexvalue){
    browser.sleep(1000);
    pageelement.click();
   
   // element(by.xpath(pageelement + '/button[' + indexvalue + ']')).click();
};
const performAutoCompleteWhenElementVisible = function (pageelement, textToEnter, indexValue) {
    browser.wait(EC.visibilityOf(pageelement), TIMEOUT_MS);
    pageelement.sendKeys(textToEnter);
   // browser.sleep(2000);
    for (i = 0; i < indexValue; i++) {

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
    }
   browser.sleep(500);
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //browser.sleep(2000);

};
/*const DoubleClickWhenClickable = function (pageelement) {
    browser.wait(EC.elementToBeClickable(pageelement), TIMEOUT_MS);
    browser.actions().doubleClick(pageelement).perform();
};*/

const getTextValueElementVisible = function (pageelement) {
    browser.wait(EC.visibilityOf(pageelement), TIMEOUT_MS);
    return pageelement.getText();

};


module.exports = {
    clickWhenClickable,
    TypeTextWhenElementVisible,
    selectDropdownWhenVisible,
    performAutoCompleteWhenElementVisible,
    getTextValueElementVisible
    

};