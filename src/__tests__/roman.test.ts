import { ROMAN_LETTERS, toRoman } from "../roman";
import * as fc from 'fast-check';

const isValidRomanNumber = roman => roman.split('').every(letter => {
    ROMAN_LETTERS[]
    return ROMAN_LETTERS.includes(letter);
});
const assertRandomNumber = callback => fc.assert(fc.property(fc.integer(0, 3999), callback));

describe('roman number should', () => {
    it('return empty value if zero is received ', () => {
        expect(toRoman(0)).toBe('');
    });

    it('return I if 1 is received ', () => {
        expect(toRoman(1)).toBe('I');
    });

    it('return II if 2 is received ', () => {
        expect(toRoman(2)).toBe('II');
    });

    it('return III if 3 is received ', () => {
        expect(toRoman(3)).toBe('III');
    });

    it('return IV if 4 is received ', () => {
        expect(toRoman(4)).toBe('IV');
    });

    it('return V if 5 is received ', () => {
        expect(toRoman(5)).toBe('V');
    });

    it('return VI if 6 is received ', () => {
        expect(toRoman(6)).toBe('VI');
    });

    it('return IX if 9 is received ', () => {
        expect(toRoman(9)).toBe('IX');
    });

    it('return XIII if 13 is received ', () => {
        expect(toRoman(13)).toBe('XIII');
    });

    it('return XIX if 19 is received ', () => {
        expect(toRoman(19)).toBe('XIX');
    });

    it('return XL if 40 is received ', () => {
        expect(toRoman(40)).toBe('XL');
    });

    it('return LIII if 53 is received ', () => {
        expect(toRoman(53)).toBe('LIII');
    });

    it('return LIX if 59 is received ', () => {
        expect(toRoman(59)).toBe('LIX');
    });

    it('return MCCXI if 1211 is received ', () => {
        expect(toRoman(1211)).toBe('MCCXI');
    });

    it('return CD if 400 is received ', () => {
        expect(toRoman(400)).toBe('CD');
    });

    it('given known number returns an interpreted letter', () => {
        assertRandomNumber(randomNumber => isValidRomanNumber(toRoman(randomNumber)));
    });

    it('return throw an exception when the number can not be represented by roman numbers', () => {
        expect(() => toRoman(4000)).toThrowError('Unexpected number');
    });
});




