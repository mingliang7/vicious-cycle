Cycle.Collection.Brands = new Mongo.Collection('cycle_brands');

Cycle.Schema.Brands = new SimpleSchema({
  name: {
    type: String
  },
  descritpion: {
    type: String,
    optional: true
  }
})

Cycle.Collection.Brands.attachSchema(Cycle.Schema.Brands);
