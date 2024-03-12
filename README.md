# brewshare

## Overview

brewshare is a Node.js package designed to assist brewers with various calculations and conversions commonly used in brewing. Whether you're a homebrewer or a professional brewer developing JavaScript projects, this package provides handy functions to streamline your brewing processes.

## Installation

You can install brewshare via npm:

```bash
npm install brewshare
```

## Usage

To use brewshare in your Node.js project, simply require it:

```javascript
const brewshare = require("brewshare");
```

Once imported, you can access its functions for color conversions, gravity conversions, temperature conversions, and various calculators:

```javascript
// Color Conversions
const srmValue = brewshare.ebcToSrm(40);
console.log(srmValue); // Output: 20.3

// Gravity Conversions
const platoValue = brewshare.sgToPlato(1.05);
console.log(platoValue); // Output: 12

// Temperature Conversions
const fahrenheitValue = brewshare.celsiusToFahrenheit(20);
console.log(fahrenheitValue); // Output: 68

// Calculators
const abvValue = brewshare.calculateAbv(1.06, 1.015);
console.log(abvValue); // Output: 5.9
```

## Functions

Color Conversions

- `ebcToSrm(ebc)`: Converts EBC (European Brewery Convention) to SRM (Standard Reference Method).
- `srmToEbc(srm)`: Converts SRM to EBC.
- `ebcToHex(ebc)`: Returns the hex color code corresponding to the closest SRM value for the given EBC.
- `srmToHex(srm)`: Returns the hex color code corresponding to the closest SRM value.

Gravity Conversions

- `sgToPlato(sg)`: Converts Specific Gravity (SG) to Plato.
- `platoToSg(plato)`: Converts Plato to Specific Gravity (SG).

Temperature Conversions

- `celsiusToFahrenheit(celsius)`: Converts Celsius to Fahrenheit.
- `fahrenheitToCelsius(fahrenheit)`: Converts Fahrenheit to Celsius.

Volume Conversions

- `litersToGallons(liters)`: Converts Liters to Gallons.
- `gallonsToLiters(gallons)`: Converts Gallons to Liters.

Calculators

- `calculateAbv(og, fg)`: Calculates Alcohol by Volume (ABV) based on Original Gravity (OG) and Final Gravity (FG).

## Contribution

Contributions to brewshare are welcome! If you have suggestions for improvements, additional functions, or bug fixes, please open an issue or submit a pull request on GitHub.
