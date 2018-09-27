var Loginobj = require ('../PageObjects/loginobjects');
var KeyActions = require('../commom/KeyActions');
let properties = require('../Properties/Elmslocators.json');
var InputData = require('../InputData/elmsdata.json');

describe("Navigate to ELMS", function(){
   
     it("Open Login Page", function(){
   // browser.get(properties.ElmsLocators.URL);
    browser.driver.manage().window().maximize();
    browser.get("http://pre-prod.hbfxlabs.com/");
    browser.sleep(3000);

    KeyActions.TypeTextWhenElementVisible(Loginobj.UserName,InputData.AppInputData.LoginData.username);
    KeyActions.TypeTextWhenElementVisible(Loginobj.Password,InputData.AppInputData.LoginData.password);
    KeyActions.clickWhenClickable(Loginobj.Login);
    browser.sleep(2000);
    })

    })
