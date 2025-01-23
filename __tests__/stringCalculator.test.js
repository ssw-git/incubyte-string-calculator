import {add} from "../app/components/Calculator/helper";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});
