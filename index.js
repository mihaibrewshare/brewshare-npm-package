const { srmHex } = require("./colors");

// Color Conversions
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

// Gravity Conversions
function sgToPlato(sg) {
  return Math.round(
    -616.868 +
      1111.14 * sg -
      630.272 * Math.pow(sg, 2) +
      135.997 * Math.pow(sg, 3)
  );
}

function platoToSg(plato) {
  return Math.round(
    (258.6 - (plato / (258.2 + plato)) * 227.1) /
      (258.6 - (plato / (258.2 + plato)) * 351.02)
  );
}

// Temperature Conversions
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

function fahrenheitToCelsius(fahrenheit) {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

// Calculators
function calculateAbv(og, fg) {
  return Math.round((og - fg) * 131.25 * 10) / 10;
}

module.exports = {
  ebcToSrm,
  srmToEbc,
  srmToHex,
  ebcToHex,
  sgToPlato,
  platoToSg,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  calculateAbv,
};
