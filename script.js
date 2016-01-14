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

Router.route('/index.html', {
    action: function(){
        Router.go('home');
    }
});

Router.route('/(.*)', {
  action: function() {
    Router.go('home');
    //replace with page not found route in the future
  }
});
