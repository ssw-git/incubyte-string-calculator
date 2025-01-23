export function add(numbers: string) {
  if (numbers === "") return 0;
  return numbers.split(",").reduce((sum, num) => sum + parseInt(num, 10), 0);
}
