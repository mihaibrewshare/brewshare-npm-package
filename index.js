const colorConversions = require("./colorConversions");
const gravityConversions = require("./gravityConversions");
const temperatureConversions = require("./temperatureConversions");
const volumeConversions = require("./volumeConversions");
const calculators = require("./calculators");

module.exports = {
  ...colorConversions,
  ...gravityConversions,
  ...temperatureConversions,
  ...calculators,
  ...volumeConversions,
};
