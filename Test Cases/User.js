var KeyActions = require('../commom/KeyActions');
var AdminObj = require('../PageObjects/Organisationobj');
var Userobj = require('../PageObjects/Userobj.js');
var InputData = require('../InputData/elmsdata.json');

describe("Navigate to User",function()
{
    require('../Test Cases/Adminlogin.js');

    it("Open User Page",function()
    {
        KeyActions.clickWhenClickable(AdminObj.Profilebtn); 
        KeyActions.selectDropdownWhenVisible(AdminObj.Admin);
        //browser.sleep(2000);
        KeyActions.clickWhenClickable(Userobj.clickuser);
        KeyActions.clickWhenClickable(Userobj.Adduser);
        KeyActions.TypeTextWhenElementVisible(Userobj.Uname,InputData.AppInputData.Users.name);
        KeyActions.TypeTextWhenElementVisible(Userobj.Userpswd,InputData.AppInputData.Users.upswd);
        KeyActions.TypeTextWhenElementVisible(Userobj.Fname,InputData.AppInputData.Users.fname);
        KeyActions.TypeTextWhenElementVisible(Userobj.Email,InputData.AppInputData.Users.emailadd);
        KeyActions.performAutoCompleteWhenElementVisible(Userobj.Searchadds,InputData.AppInputData.Users.searchaddress,InputData.AppInputData.Users.address_indexvalue);
        KeyActions.TypeTextWhenElementVisible(Userobj.Contactnum,InputData.AppInputData.Users.contact);
        KeyActions.TypeTextWhenElementVisible(Userobj.Desc,InputData.AppInputData.Users.descr);
    })

})