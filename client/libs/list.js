Cycle.List = {
  type() {
    let list = [{
      label: 'New',
      value: 'new'
    }, {
      label: 'Second Hand',
      value: 'secondHand'
    }];
    return list;
  },
  color() {
      let list = [{
        label: 'Red',
        value: 'red'
      }, {
        label: 'Black',
        value: 'black'
      }, {
        label: 'Blue',
        value: 'blue'
      }, {
        label: 'White',
        value: 'white'
      }, {
        label: 'Orange',
        value: 'orange'
      }];
      return list;
  },
  brands() {
    let list = [];
    let brands = Cycle.Collection.Brands.find();
    if (brands.count() > 0) {
      brands.forEach(function(brand) {
        list.push({
          label: brand.name,
          value: brand._id
        });
      });
      return list;
    }
  }
}
