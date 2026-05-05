// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber
test('valid phone number', () => {
  expect(isPhoneNumber("(619) 617-2978")).toBe(true);
});

test('valid phone number', () => {
  expect(isPhoneNumber("617-2978")).toBe(true);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("09-08-3004")).toBe(false);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("0909 728 801")).toBe(false);
});

//isEmail
test('valid email', () => {
    expect(isEmail("lit014@gmail.com")).toBe(true);
});

test('valid email', () => {
  expect(isEmail("Iguniesa7483@ucsd.edu")).toBe(true);
});

test('invalid email', () => {
  expect(isEmail("1839895@uc")).toBe(false);
});

test('invalid email', () => {
  expect(isEmail("lit0234gmal.com")).toBe(false);
});

//isStrongPassword
test('strong password', () => {
  expect(isStrongPassword("Lisa_cute1704")).toBe(true);
});

test('strong password', () => {
  expect(isStrongPassword("hel0world")).toBe(true);
});

test('weak password', () => {
  expect(isStrongPassword("1703!jfdd")).toBe(false);
});

test('weak password', () => {
  expect(isStrongPassword("fljdsafj;dlisureoiufje")).toBe(false);
});

//isDate
test('valid Date', () => {
  expect(isDate("13/12/0006")).toBe(true);
});

test('valid Date', () => {
  expect(isDate("08/09/2004")).toBe(true);
});

test('invalid Date', () => {
  expect(isDate("09083432")).toBe(false);
});

test('invalid Date', () => {
  expect(isDate("2006-09-19")).toBe(false);
});

//isHexColor
test('valid HexColor', () => {
  expect(isHexColor("ffffff")).toBe(true);
});

test('valid HexColor', () => {
  expect(isHexColor("0ac")).toBe(true);
});

test('invalid HexColor', () => {
  expect(isHexColor("hieu83")).toBe(false);
});

test('valid HexColor', () => {
  expect(isHexColor("80238403480")).toBe(false);
});
