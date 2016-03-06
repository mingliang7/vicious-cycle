TabularTables = {};
TabularTables.Products = new Tabular.Table({
  name: "Products",
  collection: Cycle.Collection.Products,
  pagingType: "full_numbers",
  autoWidth: false,
  columnDefs: [{
    "width": "12px",
    "targets": 0
  }],
  order: [
    ['1', 'desc']
  ],
  columns: [{
      title: '<i class="fa fa-bars"></i>',
      tmpl: Meteor.isClient && Template.productAction
    }, {
      data: "_id",
      title: "ID"
    }, {
      data: "name",
      title: "Name"
    }, {
      data: "_brand",
      title: "Brand",
      render(val) {
        return val.name;
      }
    }, {
      data: "type",
      title: "Type",
      render(val) {
        return val.capitalize()
      }
    }, {
      data: "color",
      title: "Color",
      render(val) {
        return val.capitalize();
      }
    }, {
      data: "price",
      title: "Price"
    }, {
      data: "qty",
      title: "Quantity"
    }, {
      data: "descritpion",
      title: "Descritpion"
    }
    // //{data: "email", title: "Email"}
  ]
});


String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}
