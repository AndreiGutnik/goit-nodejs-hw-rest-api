export const handleSaveError = (err, data, nest) => {
  err.status = 400;
  next();
};

export const preUpdate = function (next) {
  this.options.new = true;
  this.options.runValidators = true;
  next();
};
