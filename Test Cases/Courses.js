var AdminObj = require('../PageObjects/Organisationobj');
var courseobj = require('../PageObjects/courseobj.js');
var KeyActions = require('../commom/KeyActions');
var InputData = require('../InputData/elmsdata.json');

describe ("Navigate to courses",function()
{
    require('../Test Cases/Adminlogin.js');

    it("Open course page",function()
    {
        KeyActions.clickWhenClickable(AdminObj.Profilebtn); 
        KeyActions.selectDropdownWhenVisible(AdminObj.Admin);
        KeyActions.clickWhenClickable(courseobj.clickcourse);
        KeyActions.clickWhenClickable(courseobj.addcourse);
        KeyActions.clickWhenClickable(courseobj.parentcourse);
        KeyActions.selectDropdownWhenVisible(courseobj.selectcourse);
        KeyActions.TypeTextWhenElementVisible(courseobj.coursename,InputData.AppInputData.Courses.coursename);
        KeyActions.TypeTextWhenElementVisible(courseobj.Coursedesc,InputData.AppInputData.Courses.description);
    })
})