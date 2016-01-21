Template.service.helpers({
    'link': function(){
        var d = this.description;
        if(d.includes('<a')){
            return {d1: d.substring(0,d.indexOf('<a')), a: d.substring(d.indexOf('<a'),d.indexOf('</a>')+4), d2: d.substring(d.indexOf('</a>')+4)};
        }
        return false;
    }
});
