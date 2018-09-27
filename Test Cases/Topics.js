var AdminObj = require('../PageObjects/Organisationobj');
var KeyActions = require('../commom/KeyActions');
var TopicObj = require('../PageObjects/topicobj.js');
var InputData = require('../InputData/elmsdata.json');

describe("Navigate to Topics",function()
{
    require('../Test Cases/Adminlogin.js');

    it("Open Topic Page",function()
    {
        KeyActions.clickWhenClickable(AdminObj.Profilebtn); 
        KeyActions.selectDropdownWhenVisible(AdminObj.Admin);
        KeyActions.clickWhenClickable(TopicObj.clicktopic);
        KeyActions.clickWhenClickable(TopicObj.addtopic);
        KeyActions.TypeTextWhenElementVisible(TopicObj.topicname,InputData.AppInputData.Courses.topicname);
        KeyActions.TypeTextWhenElementVisible(TopicObj.topiccode,InputData.AppInputData.Courses.topiccode);
        KeyActions.TypeTextWhenElementVisible(TopicObj.Tpcdesc,InputData.AppInputData.Courses.desc);
 
    })

})