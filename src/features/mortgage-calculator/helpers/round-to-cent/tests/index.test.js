import React from "react";
import roundCent from "../index";

test("should round to nearest cent", () => {
  expect(roundCent(100.021221)).toEqual(100.02);
});
