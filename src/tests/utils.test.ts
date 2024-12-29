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
  limitValue,
} from "@/utils";

describe("cn", () => {
  it("devrait fusionner les noms de classes", () => {
    const result = cn("class1", "class2");

    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("devrait gérer les tableaux", () => {
    const result = cn(["class1", "class2"]);

    expect(result).toContain("class1");
    expect(result).toContain("class2");
  });

  it("devrait gérer les objets", () => {
    const result = cn({ class1: true, class2: false });

    expect(result).toContain("class1");
    expect(result).not.toContain("class2");
  });
});

describe("Utilitaires de chaînes", () => {
  it("devrait mettre en majuscule la première lettre", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
    expect(capitalizeFirstLetter("")).toBe("");
  });

  it("devrait concaténer les chaînes avec un espace", () => {
    expect(concatenateWithSpace("Hello", "World")).toBe("Hello World");
    expect(concatenateWithSpace("Hello", undefined)).toBe("Hello");
    expect(concatenateWithSpace()).toBe("");
  });

  it("devrait vérifier si la chaîne commence par un préfixe", () => {
    expect(startsWith("Hello World", "Hello")).toBeTruthy();
    expect(startsWith("", "")).toBeTruthy();
    expect(startsWith("Hello", "World")).toBeFalsy();
  });

  it("devrait vérifier si la chaîne se termine par un suffixe", () => {
    expect(endsWith("Hello World", "World")).toBeTruthy();
    expect(endsWith("", "")).toBeTruthy();
    expect(endsWith("Hello", "World")).toBeFalsy();
  });

  it("devrait convertir en minuscules", () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
    expect(toLowerCase("")).toBe("");
  });

  it("devrait convertir en majuscules", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
    expect(toUpperCase("")).toBe("");
  });

  it("devrait supprimer les espaces en début et fin", () => {
    expect(trim(" hello world ")).toBe("hello world");
    expect(trim("")).toBe("");
  });

  it("devrait inverser une chaîne", () => {
    expect(reverse("hello world")).toBe("dlrow olleh");
    expect(reverse("")).toBe("");
  });
});

describe("limitValue", () => {
  it("devrait retourner la valeur quand min et max sont undefined", () => {
    expect(limitValue(5, undefined, undefined)).toBe(5);
  });

  it("devrait limiter la valeur au minimum", () => {
    expect(limitValue(5, 10, undefined)).toBe(10);
    expect(limitValue(15, 10, undefined)).toBe(15);
  });

  it("devrait limiter la valeur au maximum", () => {
    expect(limitValue(15, undefined, 10)).toBe(10);
    expect(limitValue(5, undefined, 10)).toBe(5);
  });

  it("devrait limiter la valeur entre min et max", () => {
    expect(limitValue(5, 0, 10)).toBe(5);
    expect(limitValue(15, 0, 10)).toBe(10);
    expect(limitValue(-5, 0, 10)).toBe(0);
  });
});
