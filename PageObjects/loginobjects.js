var properties = require('../Properties/Elmslocators.json')

var Loginobj = function(){

};
Loginobj.prototype = Object.create({},{

    UserName:{
        get:function(){
           return element(by.id(properties.ElmsLocators.LoginDetails.username));
        }
        },

    Password:{
        get:function(){
           return element(by.id(properties.ElmsLocators.LoginDetails.password));
        }
        },
        
    Login:{
        get:function(){
          return  element(by.css(properties.ElmsLocators.LoginDetails.Login));
        }
        
    },
    Invalid:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Invaliduser.emailerrormsg));
        }
    },
    Invalidpswd:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Invalidpswd.pswderrormsg));
        }
    },
    Emptypwsd:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.EmptyPswd.Pswdreq));
        }
    },
    Invaliduserpswd:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.Invaliduserpswd.Errormsg));
        }

    }

});
module.exports = new Loginobj();