Template.cycleBrands.onRendered(() => {
  createNewAlertify('brand');
});

Template.cycleBrands.helpers({
  brands() {
    return Cycle.Collection.Brands.find();
  }
})

Template.cycleBrands.events({
  'click .edit-brand' () {
    let doc = this;
    alertify.brand(fa('pencil', 'Edit Brand'), renderTemplate(Template.editBrand, doc));
  },
  'click .add-new'(){
    alertify.brand(fa('plus', 'New Brand'), renderTemplate(Template.newBrand));
  },
  'click .remove'(){
    Meteor.call('removeBrand', this._id);
  }
})
