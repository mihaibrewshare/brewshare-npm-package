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

module.exports = { sgToPlato, platoToSg };
