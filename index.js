'use strict';

const zero = 'zero';
const zero_to_nineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const units = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'];

class NumbersWrittenForm {

    static get zero() {
        return zero;
    }

    static get zero_to_nineteen() {
        return zero_to_nineteen;
    }

    static get tens() {
        return tens;
    }

    static get units() {
        return units;
    }

    /**
     * Convert number part to written form.
     * @param number (20-99)
     * @return {string}
     */
    static getTens(number) {
        return NumbersWrittenForm.tens[Math.floor(number/10)];
    }

    /**
     * Convert number part to written form.
     * @param number (0-99)
     * @return {string}
     */
    static getWrittenUntilHundred(number) {
        if (number >=20 && number <=99) {
            let tens_written = NumbersWrittenForm.getTens(number);
            if (number%10 !== 0) {
                tens_written += '-' + NumbersWrittenForm.zero_to_nineteen[number%10];
            }
            return tens_written;
        } else {
            return NumbersWrittenForm.zero_to_nineteen[number];
        }
    }

    /**
     * Convert number part to written form.
     * @param number (0-999)
     * @return {string}
     */
    static getWrittenHundred(number) {
        let string = '';
        if (number>99) {
            string += NumbersWrittenForm.zero_to_nineteen[Math.floor(number/100)] + ' hundred';
            if (number%100 === 0) {
                return string;
            } else {
                string += ' ';
            }
        }
        let tilHundred = NumbersWrittenForm.getWrittenUntilHundred(number%100);
        return string+tilHundred;
    }

    /**
     * Integer to written form
     * @param {number} number
     * @return {string} number in written form
     */
    static toString(number) {
        //validate input
        if (typeof number !== 'number') throw new Error('Input is not a number');
        if (number%1 !== 0) throw new Error('Input is not an integer');
        //handle special case when zero is written out
        if (number === 0) return NumbersWrittenForm.zero;
        let written_form = '';
        //create a reversed array of the digits. Eg: 12345 -> ['5','4','3','2','1']
        let digits = number.toString().split('').reverse();
        let number_of_digits = digits.length;
        //count how many max 3 digit blocks exists in the number
        let thousands_blocks_count = Math.ceil(number_of_digits/3);
        //loop for each 3 digit blocks
        for (let i = 0; i<thousands_blocks_count; i++) {
            //get the next max 3 digit long number, also remove the processed digits
            let hundreds_block_number = parseInt(digits.splice(0, 3).reverse().join(''));
            //if the current block is 0, skip this iteration, because that would be an empty string
            if (hundreds_block_number===0) continue;
            //get written representation of the current hundreds (0-999)
            let hundreds_block_string = NumbersWrittenForm.getWrittenHundred(hundreds_block_number);
            //if the written form already contains any character add space separator
            if (written_form.length>0) written_form = ' ' + written_form;
            //get the current block postfix unit
            let unit = NumbersWrittenForm.units[i];
            //if the unit is not empty, concatenate with the current block
            if (unit.length>0) hundreds_block_string = hundreds_block_string + ' ' + unit;
            //concatenate the current block and the previous
            written_form = hundreds_block_string + written_form;
        }
        return written_form;
    }
}

module.exports = NumbersWrittenForm;