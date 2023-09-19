import caesarCipher from "./caeserCipher";

test("shifts characters by a given factor", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("xyz", 1)).toBe("yza");
});

test("wraps from z to a", () => {
  expect(caesarCipher("z", 1)).toBe("a");
});

test("keeps the same case", () => {
  expect(caesarCipher("AbC", 1)).toBe("BcD");
});

test("handles punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("handles negative shifts", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});
