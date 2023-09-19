const capitalise = (str) => {
  // If the string is empty, return an empty string
  if (!str) return "";

  // If the string starts with a space, preserve it and capitalize the first non-space character
  if (str.charAt(0) === " ") {
    let i = 0;
    while (str.charAt(i) === " " && i < str.length) {
      i++;
    }
    return (
      str.slice(0, i) +
      str.charAt(i).toUpperCase() +
      str.slice(i + 1).toLowerCase()
    );
  }

  // For all other cases, capitalize the first character and ensure the rest of the string is in lowercase
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export default capitalise;
