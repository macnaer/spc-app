const dependable = require("dependable");
const path = require("path");

const container = dependable.container();

const testDep = [["_", "lodash"]];
testDep.forEach(function (val) {
  container.register(val[0], function () {
    return require(val[1]);
  });
});

const _ = require("lodash");
