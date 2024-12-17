import { Accordion } from "@/accordion";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Accordion", () => {
  const defaultItems = [
    {
      key: "1",
      title: "First Item",
      content: "Content for first item",
    },
    {
      key: "2",
      title: "Second Item",
      content: "Content for second item",
    },
  ];

  it("renders all accordion items", () => {
    const { getAllByRole } = render(<Accordion items={defaultItems} />);
    const accordionButtons = getAllByRole("button");
    expect(accordionButtons).toHaveLength(defaultItems.length);
  });

  it("displays correct titles", () => {
    const { getByText } = render(<Accordion items={defaultItems} />);
    defaultItems.forEach((item) => {
      expect(getByText(item.title)).toBeTruthy();
    });
  });

  it("applies default classes", () => {
    const { container } = render(<Accordion items={defaultItems} />);
    const accordionItems = container.querySelectorAll('[class*="text-lg"]');
    expect(accordionItems.length).toBeGreaterThan(0);
  });

  it("applies custom item classes", () => {
    const { container } = render(
      <Accordion
        items={defaultItems}
        itemClasses={{
          base: "custom-base-class",
          title: "custom-title-class",
        }}
      />,
    );

    const baseClasses = container.querySelectorAll(".custom-base-class");
    const titleClasses = container.querySelectorAll(".custom-title-class");
    expect(baseClasses.length).toBeGreaterThan(0);
    expect(titleClasses.length).toBeGreaterThan(0);
  });

  it("handles splitted variant", () => {
    const { container } = render(
      <Accordion items={defaultItems} variant="splitted" />,
    );

    const splittedItems = container.querySelectorAll(
      '[class*="border-1"][class*="rounded-md"]',
    );
    expect(splittedItems.length).toBeGreaterThan(0);
  });

  it("renders with minimal props", () => {
    const minimalItems = [{ key: "1", title: "Minimal Item" }];
    const { getByText } = render(<Accordion items={minimalItems} />);
    expect(getByText("Minimal Item")).toBeTruthy();
  });

  it("handles empty items array", () => {
    const { container } = render(<Accordion items={[]} />);
    expect(container.firstChild?.childNodes.length).toBe(0);
  });

  it("passes through accordion props", () => {
    const { container } = render(
      <Accordion
        items={defaultItems}
        selectionMode="multiple"
        data-selection-mode="multiple"
      />,
    );

    const accordionRoot = container.firstChild;
    expect(accordionRoot).toHaveAttribute("data-selection-mode", "multiple");
  });
});
