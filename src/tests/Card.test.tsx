import { Card } from "@/card";
import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

describe("Card", (): void => {
  const defaultProps = {
    children: "Card Content",
    header: "Card Header",
    footer: "Card Footer",
  };

  it("renders with default props", (): void => {
    const { getByText } = render(<Card {...defaultProps} />);
    expect(getByText("Card Content")).toBeTruthy();
    expect(getByText("Card Header")).toBeTruthy();
    expect(getByText("Card Footer")).toBeTruthy();
  });

  it("applies custom classNames", (): void => {
    const customClassNames = {
      header: "custom-header",
      body: "custom-body",
      footer: "custom-footer",
    };

    const { container } = render(
      <Card {...defaultProps} classNames={customClassNames} />,
    );

    expect(container.querySelector(".custom-header")).toBeTruthy();
    expect(container.querySelector(".custom-body")).toBeTruthy();
    expect(container.querySelector(".custom-footer")).toBeTruthy();
  });

  it("handles press events", (): void => {
    const onPress = vi.fn();
    const { getByText } = render(
      <Card {...defaultProps} isPressable onPress={onPress} />,
    );

    const cardElement = getByText("Card Content").parentElement;
    if (cardElement) {
      fireEvent.click(cardElement);
      expect(onPress).toHaveBeenCalled();
    } else {
      throw new Error("Card element not found");
    }
  });

  it("renders without header and footer when not provided", (): void => {
    const { queryByText } = render(<Card>Card Content Only</Card>);
    expect(queryByText("Card Content Only")).toBeTruthy();
    expect(queryByText("Card Header")).toBeFalsy();
    expect(queryByText("Card Footer")).toBeFalsy();
  });

  it("applies visual props correctly", (): void => {
    const { container } = render(
      <Card
        shadow="lg"
        radius="sm"
        fullWidth
        isHoverable
        isBlurred
        isFooterBlurred
        isDisabled
      >
        Card Content
      </Card>,
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("shadow-large");
    expect(cardElement).toHaveClass("rounded-small");
    expect(cardElement).toHaveClass("w-full");
    expect(cardElement).toHaveClass("bg-background/80");
    expect(cardElement).toHaveClass("opacity-disabled");
  });

  it("forwards ref correctly", (): void => {
    const ref = { current: null };
    render(<Card ref={ref}>Card Content</Card>);
    expect(ref.current).toBeTruthy();
  });

  it("handles interaction props", (): void => {
    const { container } = render(
      <Card
        isPressable
        disableAnimation
        disableRipple
        allowTextSelectionOnPress
      >
        Interactive Card
      </Card>,
    );

    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("cursor-pointer");
  });
});
