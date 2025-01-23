export function add(numbers: string) {
  if (!numbers) return 0;

  let delimiter = /,|\n/; // Default delimiters: comma and newline

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); // Extract custom delimiter
    numbers = parts[1]; // Remaining numbers after the delimiter declaration
  }

  const numArray = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10) || 0);

  // Check for negative numbers
  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
}
