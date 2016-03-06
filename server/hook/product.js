Cycle.Collection.Products.before.insert((userId, doc)=>{
  doc._id = idGenerator.gen(Cycle.Collection.Products, 4);
})
