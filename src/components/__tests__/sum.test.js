import { sum } from "../sum";

test("Sum is giving sum of two numbers", () => {
  expect(sum(2, 6)).toBe(8);
})