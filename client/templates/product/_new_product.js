AutoForm.hooks({
  newProduct: {
    onSuccess(formType, result) {
      alertify.success('Added!');
    },
    onError(formType, error){
      alertify.error(error.message);
    }
  }
})
