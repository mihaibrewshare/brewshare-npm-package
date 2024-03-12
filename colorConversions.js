const { srmHex } = require("./colors");

function ebcToSrm(ebc) {
  return Math.round((ebc / 1.97) * 10) / 10;
}

function srmToEbc(srm) {
  return Math.round(srm * 1.97 * 10) / 10;
}

function ebcToHex(ebc) {
  return srmHex[Math.round(ebcToSrm(ebc))];
}

function srmToHex(srm) {
  return srmHex[Math.round(srm)];
}

module.exports = { ebcToSrm, srmToEbc, ebcToHex, srmToHex };
