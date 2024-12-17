import { describe, it, expect } from "vitest";

import {
  capitalizeFirstLetter,
  cn,
  concatenateWithSpace,
  endsWith,
  startsWith,
  toLowerCase,
  toUpperCase,
  trim,
  reverse,
} from "@/utils";

describe("cn", () => {
  it("should merge class names", () => {
    const result = cn("class1", "class2");

    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("should handle arrays", () => {
    const result = cn(["class1", "class2"]);

    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("should handle objects", () => {
    const result = cn({ class1: true, class2: false });

    expect(result).toContain("class1");
    expect(result).not.toContain("class2");
  });
});

describe("String utilities", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("should concatenate strings with space", () => {
    expect(concatenateWithSpace("Hello", "World")).toBe("Hello World");
    expect(concatenateWithSpace("Hello", undefined)).toBe("Hello");
    expect(concatenateWithSpace()).toBe("");
  });

  it("should return true if string starts with prefix", () => {
    expect(startsWith("Hello World", "Hello")).toBeTruthy();
    expect(startsWith("", "")).toBeTruthy();
    expect(startsWith("Hello", "World")).toBeFalsy();
  });

  it("should return true if string ends with suffix", () => {
    expect(endsWith("Hello World", "World")).toBeTruthy();
    expect(endsWith("", "")).toBeTruthy();
    expect(endsWith("Hello", "World")).toBeFalsy();
  });

  it("should convert string to lower case", () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
    expect(toLowerCase("")).toBe("");
  });

  it("should convert string to upper case", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
    expect(toUpperCase("")).toBe("");
  });

  it("should trim whitespace from string", () => {
    expect(trim(" hello world ")).toBe("hello world");
    expect(trim("")).toBe("");
  });

  it("should reverse a string", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
    expect(reverse("")).toBe("");
  });
});
