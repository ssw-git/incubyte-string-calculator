import React from "react";
import {add} from "../app/components/Calculator/helper";

import {render, fireEvent, waitFor} from "@testing-library/react-native";
import Calculator from "../app/components/Calculator";

test("returns 0 for an empty string", () => {
  expect(add("")).toBe(0);
});

test("returns the number itself for a single number", () => {
  expect(add("1")).toBe(1);
});

test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});

test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("supports different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("throws an exception for negative numbers", () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

test("calculates sum correctly when button is pressed", async () => {
  const {getByTestId} = render(<Calculator />);

  const input = getByTestId("input");
  const button = getByTestId("button");
  const result = getByTestId("result");

  fireEvent.changeText(input, "1,2,3");
  fireEvent.press(button);

  await waitFor(() => {
    expect(result.props.children).toContain(6);
  });
});
