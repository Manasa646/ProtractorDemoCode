var RoleObj =require ('../PageObjects/roleobj.js');
var KeyActions = require('../commom/KeyActions');
var AdminObj = require('../PageObjects/Organisationobj');
var InputData = require('../InputData/elmsdata.json');
let properties = require('../Properties/Elmslocators.json');


describe("Navigate to Roles",function()
{
    require('../Test Cases/Adminlogin.js');
    
    it("Open Roles Page",function()
    {
        KeyActions.clickWhenClickable(AdminObj.Profilebtn); 
        KeyActions.selectDropdownWhenVisible(AdminObj.Admin);
        KeyActions.clickWhenClickable(RoleObj.Role);
        KeyActions.clickWhenClickable(RoleObj.AddRole);
        KeyActions.TypeTextWhenElementVisible(RoleObj.Rolename, InputData.AppInputData.Roles.rolename);
        KeyActions.TypeTextWhenElementVisible(RoleObj.Description, InputData.AppInputData.Roles.description);
    })
})