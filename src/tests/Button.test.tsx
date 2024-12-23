import { Button } from "@/button";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import type { JSX } from "react";

describe("Button", () => {
  it("should match the snapshot with default props", () => {
    const { asFragment } = render(<Button>Click me</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with start content", () => {
    const { asFragment } = render(
      <Button startContent={<i>icon</i>}>Click me</Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with end content", () => {
    const { asFragment } = render(
      <Button endContent={<i>icon</i>}>Click me</Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with link props", () => {
    const MockLinkComponent = (
      props: React.AnchorHTMLAttributes<HTMLAnchorElement>,
    ): JSX.Element => <a {...props} />;
    const { asFragment } = render(
      <Button href="/test" LinkComponent={MockLinkComponent} target="_blank">
        Click me
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with different variants", () => {
    const { asFragment } = render(
      <Button variant="bordered" fullWidth isDisabled>
        Click me
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should match the snapshot with custom styles", () => {
    const { asFragment } = render(
      <Button
        customStyles={{
          base: "custom-base",
          content: "custom-content",
        }}
      >
        Click me
      </Button>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
