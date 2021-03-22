function reduxTime(store) {
  return function (next) {
    return function (action) {
      if (action.type) {
        console.time("Store Updating Time Differnce ");
        console.log(
          `%caction - ${action.type}`,
          "color: red; font-weight: bold;"
        );
        next(action);
        console.timeEnd("Store Updating Time Differnce ");
      } else {
        throw Error("Specify a type for action!");
      }
    };
  };
}
module.exports = reduxTime;
