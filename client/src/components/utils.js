// Regex password means password 
//must be at least 8 characters, 
// have one symbol, 1 uppercase letter, 1 lowercase and 1 digit///

export const regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/