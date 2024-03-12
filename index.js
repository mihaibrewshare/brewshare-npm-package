const colorConversions = require("./colorConversions");
const gravityConversions = require("./gravityConversions");
const temperatureConversions = require("./temperatureConversions");
const calculators = require("./calculators");

module.exports = {
  ...colorConversions,
  ...gravityConversions,
  ...temperatureConversions,
  ...calculators,
};
