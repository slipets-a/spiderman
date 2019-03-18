import concat from "./concat";

test("Should return an empty array if first parameter is not an array", () => {
  expect(concat(1)).toEqual([]);
});

test("Should return an empty array if first parameter is not an array", () => {
  expect(concat(null)).toEqual([]);
});

test("Should return an empty array if first parameter is not an array", () => {
  expect(concat(undefined)).toEqual([]);
});

test("Should return an empty array if first parameter is not an array", () => {
  expect(concat("string")).toEqual([]);
});

test("Should return an empty array if first parameter is not an array", () => {
  expect(concat({})).toEqual([]);
});

test("Should return untouched array if only one param passed", () => {
  expect(concat([1, 2, 3])).toEqual([1, 2, 3]);
});

test("Should return concatenated array with additional values", () => {
  expect(concat([1, 2, 3], 1, true, 3, 6)).toEqual([1, 2, 3, 1, true, 3, 6]);
});

test("Should return concatenated array with extracted array elements", () => {
  expect(concat([1, 2, 3], 4, 5, [1])).toEqual([1, 2, 3, 4, 5, 1]);
});

test("Lodash'es docs example should work correctly", () => {
  expect(concat([1], 2, [3], [[4]])).toEqual([1, 2, 3, [4]]);
});

