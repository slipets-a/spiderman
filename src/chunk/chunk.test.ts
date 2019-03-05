import chunk from "./chunk";

test("Should return empty array if first parameter is not an array", () => {
  expect(chunk("string")).toEqual([]);
});

test("Should return empty array if `size` is not a number", () => {
  expect(chunk([0, 1, 2, 3, 4, 5], "string")).toEqual([]);
});

test("Should return empty array if first parameter is an empty array", () => {
  expect(chunk([])).toEqual([]);
});

test("Should `size` value must be equal to 1", () => {
  expect(chunk([1, 2, 3, 4, 5])).toEqual([[1], [2], [3], [4], [5]]);
});

test("Should return chunked array", () => {
  expect(chunk([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);
});

test("Should return the last chunk as remaining elements", () => {
  expect(chunk([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]]);
});
