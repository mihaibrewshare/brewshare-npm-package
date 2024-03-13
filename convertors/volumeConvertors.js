function litersToGallons(liters) {
  return parseFloat((liters * 0.264172).toFixed(2));
}

function gallonsToLiters(gallons) {
  return parseFloat((gallons * 3.78541).toFixed(2));
}

module.exports = { litersToGallons, gallonsToLiters };
