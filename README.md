# numbers-written-form

This is a node.js module.
Currently not published to npm.

Convert integer numbers to written form.

##### Example:

`123456789` -> `one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine`

## Tests

### Install dependencies for test
 - mocha
 - chai
```bash
npm install
```

### Run tests

```bash
npm test
```

## Usage

### Install

```bash
npm install git+https://git@github.com/ujweblap/numbers-written-form.git
```

### Example
```javascript
const NumbersWrittenForm = require('numbers-written-form').toString;
console.log(NumbersWrittenForm(123456789));
//Prints: "one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine" 
```

## Explain the logic

 - Validate the number
 - Split number into digits
 - Group digits for maximum 3 digit long parts (0-999) with each groups:
    - Convert the given group to written form
    - Add postfix unit to the group if any. For example: thousand or million
    - Concatenate the groups to get the result 
