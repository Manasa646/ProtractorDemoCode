var properties = require('../Properties/Elmslocators.json');
var courseobj = function(){

};
courseobj.prototype = Object.create({},{

    clickcourse:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Courses.clickcourse));
            
        }
    },
    addcourse:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Courses.addcour));
        }
    },
    parentcourse:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Courses.parntcours));
        }
    },
    selectcourse:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Courses.selectcours));
        }
    },
    coursename:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Courses.coursename));
        }
    },
    Coursedesc:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Courses.descr));
        }
    }
});
module.exports = new courseobj();