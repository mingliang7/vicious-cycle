Template.cycleProducts.created = function() {
  createNewAlertify('product');
}


Template.cycleProducts.helpers({

});

Template.cycleProducts.events({
  "click .add-new": function(event, template){
    alertify.product(fa('plus', 'Add New'), renderTemplate(Template.newProduct)).maximize()
  }
});
