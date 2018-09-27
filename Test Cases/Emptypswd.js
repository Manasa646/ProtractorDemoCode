var Loginobj = require ('../PageObjects/loginobjects');
var KeyActions = require('../commom/KeyActions');
let properties = require('../Properties/Elmslocators.json');
var InputData = require('../InputData/elmsdata.json');

describe("Navigate to elms",function()
{
it("Validate with Valid username and empty pswd",function(){
    browser.get(properties.ElmsLocators.URL);
    browser.driver.manage().window().maximize();
    browser.sleep(3000);

    KeyActions.TypeTextWhenElementVisible(Loginobj.UserName,InputData.AppInputData.Emptypswd.username);
    KeyActions.clickWhenClickable(Loginobj.Password);
    //browser.sleep(1000);
   KeyActions.clickWhenClickable(Loginobj.Login);
  //browser.sleep(2000);
    //console.log(KeyActions.getTextValueElementVisible(Loginobj.Invalid));
    expect(KeyActions.getTextValueElementVisible(Loginobj.Emptypwsd)).toEqual("Password is required.");
})
})