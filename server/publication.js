Meteor.publish("brands", function() {
  let brands = Cycle.Collection.Brands.find();
  if (brands) {
    return brands;
  }
  return this.ready();
});

Meteor.publish("products", function(limit) {
  let limitAmount = limit || 10;
  let products = Cycle.Collection.Products.find({}, {
    limit: limitAmount,
    sort: {
      name: 1
    }
  })
  if (products) {
    return products;
  }
  return this.ready();
});
