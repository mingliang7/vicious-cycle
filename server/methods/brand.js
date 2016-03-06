Meteor.methods({
  removeBrand(id){
     Cycle.Collection.Brands.remove(id)
  }
});
