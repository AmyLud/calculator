import React from "react";
import { getAmorOptions, getTermOptions } from "../index";

describe("getTermOptions", () => {
  test("should be a function", () => {
    expect(getTermOptions).toBeInstanceOf(Function);
  });
  test("should return an array", () => {
    expect(getTermOptions()).toBeInstanceOf(Array);
  });
  test("should return an array the same length as param end", () => {
    expect(getTermOptions(1, 3)).toHaveLength(3);
  });
  test("item 5 should have prop 'selected", () => {
    const options = getTermOptions();
    expect(options[5]).toHaveProperty("selected");
    expect(options[5].selected).toEqual("selected");
  });
});

describe("getAmorOptions", () => {
  test("should be a function", () => {
    expect(getAmorOptions).toBeInstanceOf(Function);
  });
  test("should return an array", () => {
    expect(getAmorOptions()).toBeInstanceOf(Array);
  });
  test("should return an array the same length as param end", () => {
    expect(getAmorOptions(1, 3)).toHaveLength(3);
  });
  test("item 5 should have prop 'selected", () => {
    const options = getAmorOptions();
    expect(options[5]).toHaveProperty("selected");
    expect(options[5].selected).toEqual("selected");
  });
});
