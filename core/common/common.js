class Common {
  static errorModel(err) {
    return {
      message: err.msg,
      field: err.path,
    };
  }
}
module.exports = Common;
