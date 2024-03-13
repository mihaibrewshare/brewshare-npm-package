const colorConvertors = require("./convertors/colorConvertors");
const gravityConvertors = require("./convertors/gravityConvertors");
const temperatureConvertors = require("./convertors/temperatureConvertors");
const volumeConvertors = require("./convertors/volumeConvertors");
const abvCalculator = require("./calculators/abvCalculator");

module.exports = {
  ...colorConvertors,
  ...gravityConvertors,
  ...temperatureConvertors,
  ...volumeConvertors,
  ...abvCalculator,
};
