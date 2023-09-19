const caesarCipher = (str, shift) => {
  const shiftChar = (char, shiftAmount) => {
    const charCode = char.charCodeAt(0);
    if (char >= "A" && char <= "Z") {
      return String.fromCharCode(
        ((charCode - 65 + shiftAmount + 26) % 26) + 65
      );
    } else if (char >= "a" && char <= "z") {
      return String.fromCharCode(
        ((charCode - 97 + shiftAmount + 26) % 26) + 97
      );
    }
    return char;
  };

  return str
    .split("")
    .map((char) => shiftChar(char, shift))
    .join("");
};

export default caesarCipher;
