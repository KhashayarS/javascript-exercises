const convertToCelsius = function(temp) {
  let convertedTemp = (temp - 32 ) * 5 / 9;
  let convertedTempRounded = Number(convertedTemp.toFixed(1));
  
  return convertedTempRounded
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = temp * 9 / 5 + 32;
  let convertedTempRounded = Number(convertedTemp.toFixed(1));
  
  return convertedTempRounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
