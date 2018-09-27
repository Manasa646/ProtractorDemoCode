var Loginobj = require ('../PageObjects/loginobjects');
var KeyActions = require('../commom/KeyActions');
let properties = require('../Properties/Elmslocators.json');
var InputData = require('../InputData/elmsdata.json');

describe("Navigate to elms",function()
{
it("Validate with Invalid username",function(){
    browser.get(properties.ElmsLocators.URL);
    browser.driver.manage().window().maximize();
    //browser.get("http://pre-prod.hbfxlabs.com/");
    browser.sleep(3000);

    KeyActions.TypeTextWhenElementVisible(Loginobj.UserName,InputData.AppInputData.InvalidUser.username);
    KeyActions.TypeTextWhenElementVisible(Loginobj.Password,InputData.AppInputData.InvalidUser.password);
    //KeyActions.clickWhenClickable(Loginobj.Login);
    browser.sleep(2000);
    //console.log(KeyActions.getTextValueElementVisible(Loginobj.Invalid));
    expect(KeyActions.getTextValueElementVisible(Loginobj.Invalid)).toEqual("Invalid Email Id");
})
})