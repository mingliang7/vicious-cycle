Cycle.Collection.Products = new Mongo.Collection('cycle_products');
Cycle.Schema.Products = new SimpleSchema({
  name: {
    type: String,
  },
  brandId: {
    type: String,
    autoform: {
      type: 'select',
      options() {
        return Cycle.List.brands();
      }
    }
  },
  type: {
    type: String,
    autoform: {
      type: 'select',
      options() {
        return Cycle.List.type();
      }
    }
  },
  color: {
    type: String,
    autoform:{
      type: 'select',
      options(){
        return Cycle.List.color();
      }
    }
  },
  price: {
    type: Number,
    decimal: true
  },
  discount: {
    type: Number,
    decimal: true,
    optional: true
  },
  qty: {
    type: Number
  },
  descritpion: {
    type: String,
    optional: true
  },
  _brand: {
    type: Object,
    optional: true,
    blackbox: true
  }
})

Cycle.Collection.Products.attachSchema(Cycle.Schema.Products)
