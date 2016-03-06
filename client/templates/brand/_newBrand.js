AutoForm.hooks({
  newBrand: {
    onSuccess(formType, result) {
      alertify.success('Insert');
    },
    onError(formType, err) {
      alertify.error(err.message);
    }
  },
  editBrand:{
    onSuccess(formType, result) {
      alertify.success('Insert');
      alertify.brand().close();
    },
    onError(formType, err) {
      alertify.error(err.message);
    }
  }
})
