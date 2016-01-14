Router.configure({
    layoutTemplate: 'main',
});

Router.route('/', {
    name: 'home',
    template: 'home'
});

Router.route('/assets/:thing', {
    data: function(){
        return fs
    }
});
