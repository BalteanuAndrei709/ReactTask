import { calculateTriangleArea } from "../components/TriangleArea";
import { act } from "react";
test("calculates triangle area correctly", () => {
  expect(calculateTriangleArea(10, 5)).toBe(25);
  expect(calculateTriangleArea(0, 5)).toBe(0);
  expect(calculateTriangleArea(10, 0)).toBe(0);
});
