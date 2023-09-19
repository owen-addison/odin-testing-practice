test("capitalises the first character of the string 'input'", () => {
  expect(capitalise("input")).toBe("Input");
});

test("capitalises the first character of the string 'INPUT'", () => {
  expect(capitalise("INPUT")).toBe("Input");
});
