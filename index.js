const { srmHex } = require("./colors");

function calculateAbv(og, fg) {
  return Math.round((og - fg) * 131.25 * 10) / 10;
}

function calculateSrm(ebc) {
  return Math.round((ebc / 1.97) * 10) / 10;
}

function calculateHex(srm) {
  return srmHex[Math.round(srm)];
}

module.exports = { calculateAbv, calculateSrm, calculateHex };
