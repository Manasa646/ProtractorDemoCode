var properties = require('../Properties/Elmslocators.json')
var Userobj = function(){
};
Userobj.prototype = Object.create({},{
    
    clickuser:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.User.clickuser));

        }
    },
    Adduser:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.adduser));
        }
    },
    Uname:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.name));
        
        }
    },
    Userpswd:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.pswd));
        }
    },
    Fname:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.fname));
        }
    },
    Lname:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.lname));
        }
    },
    Email:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.email));
        }
    },
    Searchadds:{
        get:function(){
            return element(by.id(properties.ElmsLocators.User.searchaddress));

        }
    },
    Contactnum:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.mobilenum));
        }
    },
    Desc:{
        get:function(){
            return element(by.xpath(properties.ElmsLocators.User.description));
        }
    }
});
module.exports = new Userobj();
