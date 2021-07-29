const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return an error if "fullName" arg is not a string or is not passed', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname(function(){})).to.equal('Error');
    });

    it('should return an error if "fullName" arg is in different format than <firstName> <lastName>', () => {
        expect(formatFullname('John Doe Test')).to.equal('Error');
        expect(formatFullname('John')).to.equal('Error');
    });

    it('should conwert "fullName" correctly', () => {
        expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
        expect(formatFullname('JOHN DOE')).to.equal('John Doe');
        expect(formatFullname('aManDa dOe')).to.equal('Amanda Doe');
    });
});