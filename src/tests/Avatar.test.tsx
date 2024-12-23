import { Avatar } from "@/avatar";
import { render } from "@testing-library/react";
import type { JSX } from "react";
import { describe, it, expect } from "vitest";

describe("Avatar", () => {
  it("should render default avatar icon when no props are provided", () => {
    const { getByRole } = render(<Avatar />);
    const avatarIcon = getByRole("img");
    expect(avatarIcon).toBeTruthy();
  });

  it("should render image when src is provided", () => {
    const testSrc = "https://example.com/avatar.jpg";
    const { getByRole } = render(<Avatar src={testSrc} alt="Test Avatar" />);

    const image = getByRole("img", { name: "Test Avatar" });
    expect(image).toBeTruthy();
    expect(image.getAttribute("src")).toBe(testSrc);
  });

  it("should render custom fallback component", () => {
    const CustomFallback = (): JSX.Element => <div>Custom Fallback</div>;

    const { getByText } = render(
      <Avatar fallback={<CustomFallback />} showFallback />,
    );

    const fallback = getByText("Custom Fallback");
    expect(fallback).toBeTruthy();
  });

  it("should match snapshot with default props", () => {
    const { asFragment } = render(<Avatar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot with image", () => {
    const { asFragment } = render(
      <Avatar src="https://example.com/avatar.jpg" alt="Test Avatar" />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot with name", () => {
    const { asFragment } = render(<Avatar name="John Doe" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should match snapshot with custom fallback", () => {
    const CustomFallback = (): JSX.Element => <div>Custom Fallback</div>;

    const { asFragment } = render(
      <Avatar fallback={<CustomFallback />} showFallback />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
