export function add(numbers: string) {
  if (!numbers) return 0;

  const delimiter = /,|\n/; // Support commas and newlines as delimiters
  const numArray = numbers
    .split(delimiter)
    .map((num) => parseInt(num, 10) || 0);

  return numArray.reduce((sum, num) => sum + num, 0);
}
