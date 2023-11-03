const convertToCelsius = function(temperature) {
  temperature = (temperature - 32) * (5/9);
  let result = temperature.toFixed(1);
  return parseFloat(result);


};

const convertToFahrenheit = function(temperature) {
  temperature = (temperature * (9/5)) + 32;
  let result = temperature.toFixed(1);
  return parseFloat(result);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
