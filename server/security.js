Security.permit(['insert', 'update', 'remove']).collections([
  Cycle.Collection.Brands,
  Cycle.Collection.Products
]).apply();
