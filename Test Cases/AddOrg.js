var AdminObj = require('../PageObjects/Organisationobj');
var KeyActions = require('../commom/KeyActions');
//const EC = protractor.ExpectedConditions;


//var RoleObjs = ('../PageObjects/roleobj.js');
//var properties = require('../Properties/Elmslocators.json');
var InputData = require('../InputData/elmsdata.json');
//var login = require('../Test Cases/login.js');

describe("Navigate to Admin", function () {
    require('../Test Cases/Adminlogin.js');

    it("Open Admin Page", function () {

        KeyActions.clickWhenClickable(AdminObj.Profilebtn);
        KeyActions.selectDropdownWhenVisible(AdminObj.Admin);
        KeyActions.clickWhenClickable(AdminObj.ClickOrg);
        KeyActions.clickWhenClickable(AdminObj.AddOrg);
        KeyActions.TypeTextWhenElementVisible(AdminObj.Organization, InputData.AppInputData.Organization.name);
        KeyActions.TypeTextWhenElementVisible(AdminObj.Code, InputData.AppInputData.Organization.code);
        KeyActions.clickWhenClickable(AdminObj.selectOrg);
        KeyActions.selectDropdownWhenVisible(AdminObj.ParentOrg);
        KeyActions.TypeTextWhenElementVisible(AdminObj.Phonenumber, InputData.AppInputData.Organization.Mobilenumber);
        KeyActions.TypeTextWhenElementVisible(AdminObj.Email, InputData.AppInputData.Organization.emailid);
        KeyActions.performAutoCompleteWhenElementVisible(AdminObj.SearchAddress, InputData.AppInputData.Organization.searchaddress, InputData.AppInputData.Organization.address_indexvalue);
        KeyActions.TypeTextWhenElementVisible(AdminObj.Domainnme, InputData.AppInputData.Organization.domain_name );
        //element (by.xpath("//button[@class='primary-btn btn-white mat-raised-button']")).click();
       // expect(AdminObj.UploadBanner.isDisplayed()).toBeTruthy();
       browser.sleep(2000);
        KeyActions.clickWhenClickable(AdminObj.UploadBanner);
       //element (by.xpath("//input[@id='inputGroupFile04']")).click();
       browser.sleep(2000);
        
    })

})