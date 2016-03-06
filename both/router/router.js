Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function(){
  this.route('home', {
    path: '/',
    onBeforeAction(pause){
      this.next();
    }
  })
  this.route('cycle.products', {
    path: '/products',
    onBeforeAction(pause){
      this.next();
    }
  })
  this.route('new.product', {
    path: '/products/new',
    onBeforeAction(pause){
      this.next();
    }
  })

  this.route('cycle.brands', {
    path: '/brands',
    onBeforeAction(pause){
      this.next();
    }
  })
  this.route('new.brand', {
    path: '/brands/new',
    onBeforeAction(pause){
      this.next();
    }
  })
});
