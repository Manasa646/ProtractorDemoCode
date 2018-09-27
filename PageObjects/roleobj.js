var properties = require('../Properties/Elmslocators.json')
var RoleObj = function () {
};
RoleObj.prototype = Object.create({}, {

    Role: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Roles.clickrole));
        }
    },
    AddRole:{
        get: function (){
            return element(by.xpath(properties.ElmsLocators.Roles.addrole));
        }
    },
    Rolename:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Roles.rolename));
        }
    },
    Description:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Roles.desc));
        }

    }
});
module.exports = new RoleObj();