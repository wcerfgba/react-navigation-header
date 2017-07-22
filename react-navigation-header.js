/*
 * @noflow - get/set properties not yet supported by flow. also `...require(x)` is broken #6560135
 */

/* eslint global-require: 0 */

module.exports = {
  // Header
  get Header() {
    return require("./Header").default;
  },
  get HeaderTitle() {
    return require("./HeaderTitle").default;
  },
  get HeaderBackButton() {
    return require("./HeaderBackButton").default;
  }
};
