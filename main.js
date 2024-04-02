/**
 * Sorts items based on their dimensions and mass.
 * @param {number} width - The width of the item.
 * @param {number} height - The height of the item.
 * @param {number} length - The length of the item.
 * @param {number} mass - The mass of the item.
 * @returns {string} - The sorting category: "REJECTED", "SPECIAL", or "STANDARD".
 */
function sort(width, height, length, mass) {
  // Check if the item is bulky (any dimension >= 150 or volume >= 1e6)
  let isBulky =
    width >= 150 ||
    height >= 150 ||
    length >= 150 ||
    width * height * length >= 1e6;

  // Check if the item is heavy (mass >= 20)
  let isHeavy = mass >= 20;

  // If the item is both bulky and heavy, reject it
  if (isBulky && isHeavy) return "REJECTED";

  // If the item is either bulky or heavy, mark it as special
  if (isBulky || isHeavy) return "SPECIAL";

  // If the item is neither bulky nor heavy, it's standard
  return "STANDARD";
}

console.log(sort(150, 100, 100, 10)); // SPECIAL
console.log(sort(100, 100, 100, 10)); // STANDARD
console.log(sort(120, 120, 100, 30)); // REJECTED
console.log(sort(120, 120, 120, 10)); // SPECIAL
console.log(sort(140, 10, 100, 15));  // STANDARD
