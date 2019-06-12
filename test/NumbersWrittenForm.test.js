const assert = require('chai').assert;
const NumbersWrittenForm = require('../index');

describe('NumbersWrittenForm.toString', function () {
    it('should throw an error when the input is invalid', function () {
        assert.throws(()=>NumbersWrittenForm.toString(), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString(''), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString('a'), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString('-'), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString('?'), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString([]), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString({}), 'Input is not a number');
        assert.throws(()=>NumbersWrittenForm.toString(null), 'Input is not a number');
    });
    it('should throw an error when the input is not an integer', function () {
        assert.throws(()=>NumbersWrittenForm.toString(.1), 'Input is not an integer');
        assert.throws(()=>NumbersWrittenForm.toString(1.2), 'Input is not an integer');
    });
    it('should test 0', function () {
        assert.equal(NumbersWrittenForm.toString(0) , 'zero');
    });
    it('should test 1-19', function () {
        assert.equal(NumbersWrittenForm.toString(1) , 'one');
        assert.equal(NumbersWrittenForm.toString(2) , 'two');
        assert.equal(NumbersWrittenForm.toString(3) , 'three');
        assert.equal(NumbersWrittenForm.toString(4) , 'four');
        assert.equal(NumbersWrittenForm.toString(5) , 'five');
        assert.equal(NumbersWrittenForm.toString(6) , 'six');
        assert.equal(NumbersWrittenForm.toString(7) , 'seven');
        assert.equal(NumbersWrittenForm.toString(8) , 'eight');
        assert.equal(NumbersWrittenForm.toString(9) , 'nine');
        assert.equal(NumbersWrittenForm.toString(10) , 'ten');
        assert.equal(NumbersWrittenForm.toString(11) , 'eleven');
        assert.equal(NumbersWrittenForm.toString(12) , 'twelve');
        assert.equal(NumbersWrittenForm.toString(13) , 'thirteen');
        assert.equal(NumbersWrittenForm.toString(14) , 'fourteen');
        assert.equal(NumbersWrittenForm.toString(15) , 'fifteen');
        assert.equal(NumbersWrittenForm.toString(16) , 'sixteen');
        assert.equal(NumbersWrittenForm.toString(17) , 'seventeen');
        assert.equal(NumbersWrittenForm.toString(18) , 'eighteen');
        assert.equal(NumbersWrittenForm.toString(19) , 'nineteen');
    });
    it('should test untilHundred with 20-30-40-50-60-70-80-90', function () {
        assert.equal(NumbersWrittenForm.toString(20) , 'twenty');
        assert.equal(NumbersWrittenForm.toString(30) , 'thirty');
        assert.equal(NumbersWrittenForm.toString(40) , 'forty');
        assert.equal(NumbersWrittenForm.toString(50) , 'fifty');
        assert.equal(NumbersWrittenForm.toString(60) , 'sixty');
        assert.equal(NumbersWrittenForm.toString(70) , 'seventy');
        assert.equal(NumbersWrittenForm.toString(80) , 'eighty');
        assert.equal(NumbersWrittenForm.toString(90) , 'ninety');
    });
    it('should test untilHundred with numbers separated by dash', function () {
        assert.equal(NumbersWrittenForm.toString(21) , 'twenty-one');
        assert.equal(NumbersWrittenForm.toString(22) , 'twenty-two');
        assert.equal(NumbersWrittenForm.toString(23) , 'twenty-three');
        assert.equal(NumbersWrittenForm.toString(24) , 'twenty-four');
        assert.equal(NumbersWrittenForm.toString(25) , 'twenty-five');
        assert.equal(NumbersWrittenForm.toString(26) , 'twenty-six');
        assert.equal(NumbersWrittenForm.toString(27) , 'twenty-seven');
        assert.equal(NumbersWrittenForm.toString(28) , 'twenty-eight');
        assert.equal(NumbersWrittenForm.toString(29) , 'twenty-nine');
        assert.equal(NumbersWrittenForm.toString(99) , 'ninety-nine');
        assert.equal(NumbersWrittenForm.toString(99) , NumbersWrittenForm.toString(90) + '-' + NumbersWrittenForm.toString(9));
    });
    it('should test with larger numbers', function () {
        assert.equal(NumbersWrittenForm.toString(100) , 'one hundred');
        assert.equal(NumbersWrittenForm.toString(110) , 'one hundred ten');
        assert.equal(NumbersWrittenForm.toString(1110) , 'one thousand one hundred ten');
        assert.equal(NumbersWrittenForm.toString(10000) , 'ten thousand');
        assert.equal(NumbersWrittenForm.toString(10001) , 'ten thousand one');
        assert.equal(NumbersWrittenForm.toString(100000) , 'one hundred thousand');
        assert.equal(NumbersWrittenForm.toString(1000000) , 'one million');
        assert.equal(NumbersWrittenForm.toString(1000100) , 'one million one hundred');
        assert.equal(NumbersWrittenForm.toString(10000000) , 'ten million');
        assert.equal(NumbersWrittenForm.toString(10000001) , 'ten million one');
        assert.equal(NumbersWrittenForm.toString(999999999) , 'nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine');
        assert.equal(NumbersWrittenForm.toString(123456789) , 'one hundred twenty-three million four hundred fifty-six thousand seven hundred eighty-nine');
    });
});