module.exports = {
  multiMongooseToObj: function (arrays) {
    return arrays.map((array) => array.toObject());
  },
  singleMOngooseToObj: function (simple) {
    return simple ? simple.toObject() : simple;
  },
};
