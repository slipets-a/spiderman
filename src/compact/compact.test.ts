import compact from "./compact";

test("Should return an empty array if parameter is not an array", () => {
  expect(compact("string")).toEqual([]);
});

test("Should return an array with all falsey values removed", () => {
  expect(
    compact([0, 1, false, 2, "", 3, null, 4, undefined, 5, NaN, 6])
  ).toEqual([1, 2, 3, 4, 5, 6]);
});
