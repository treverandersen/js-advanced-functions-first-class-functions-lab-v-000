// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  return arr.slice(0, 2);
};

const returnLastTwoDrivers = function(arr) {
  return arr.slice(-2);
};

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(int) {
  return function (int) {
    return int * int
  }
}

// const fareDoubler = return function (int) {
//   return int * int
// };
