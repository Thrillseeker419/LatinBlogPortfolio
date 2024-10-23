export function MakeTitle(str: string) {
  if (!str) return "";
  
  return str
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

export function CapitalizeFirstLetter(str: string) {
  if (!str) return "";
  
  return str.charAt(0).toUpperCase() + str.slice(1);
}
