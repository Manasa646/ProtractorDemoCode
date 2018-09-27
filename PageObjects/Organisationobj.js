var properties = require('../Properties/Elmslocators.json')
var AdminObj = function () {
};
AdminObj.prototype = Object.create({}, {

    Profilebtn: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Admin.profile));
        }
    },
    Admin: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Admin.AdminPanel));

        }
    },
    ClickOrg: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Organization.clicklink));
        }
    },
    AddOrg: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Organization.addOrganization));
        }
    },
    Organization: {
        get: function () {
            return element(by.id(properties.ElmsLocators.Organization.Organizationname));

        }
    },
    Code: {
        get: function () {
            return element(by.name(properties.ElmsLocators.Organization.OrgCode));
        }

    },
    selectOrg: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Organization.selectOrg));
        }
    },
    ParentOrg: {
        get: function () {
            return element(by.xpath(properties.ElmsLocators.Organization.parentorg));
        }
    },
    Phonenumber: {
        get: function () {
            return element(by.id(properties.ElmsLocators.Organization.phonenumber));
        }
    },
    Email: {
        get: function () {
            return element(by.id(properties.ElmsLocators.Organization.emailid));
        }
    },
    SearchAddress: {
        get: function () {
            return element(by.id(properties.ElmsLocators.Organization.searchaddress));
        }
    },
    Domainnme:{
        get: function (){
            return element(by.xpath(properties.ElmsLocators.Organization.domainname));
        }

    },
    UploadBanner: {
        get: function () {
            return element(by.xpath("//input[@id='inputGroupFile04']"));
        }
    }
});
module.exports = new AdminObj();

//element (by.xpath("//input[@id='inputGroupFile04']")).click();