var properties = require('../Properties/Elmslocators.json');

var TopicObj = function(){

};
TopicObj.prototype = Object.create({},{

    clicktopic:{
        get: function(){
            return element (by.xpath(properties.ElmsLocators.Topics.clicktopic));

        }
    },
    addtopic:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Topics.addtopic));
        }

    },
    topicname:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Topics.topicname));
        }
    },
    topiccode:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Topics.tpccode));
        }
    },
    Tpcdesc:{
        get: function(){
            return element(by.xpath(properties.ElmsLocators.Topics.tpcdesc));
        }
    }

});
module.exports = new TopicObj();