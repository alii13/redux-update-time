// import reduxTime from "../index";
const reduxTime = require('../index');
const assert = require('assert');

describe("redux-update-time middleware test", () => {
  let store = {};
  let next = (action) => {};
  let action = { payload: { data: "I am data" } };

  it("If action don't have a type, then throw a error!", () => {
    assert.throws(()=>{reduxTime(store)(next)(action)}, Error, "Specify a type for action!");
  });
});
