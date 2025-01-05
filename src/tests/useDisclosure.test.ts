import { useDisclosure } from "@/hooks";
import type { UseDisclosureReturn } from "@/hooks/useDisclosure";
import { renderHook, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("useDisclosure", (): void => {
  it("should initialize with default values", (): void => {
    const { result } = renderHook((): UseDisclosureReturn => useDisclosure());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.isControlled).toBe(false);
    expect(typeof result.current.onOpen).toBe("function");
    expect(typeof result.current.onClose).toBe("function");
    expect(typeof result.current.onOpenChange).toBe("function");
    expect(typeof result.current.getButtonProps).toBe("function");
    expect(typeof result.current.getDisclosureProps).toBe("function");
  });

  it("should initialize with defaultOpen=true", (): void => {
    const { result } = renderHook(
      (): UseDisclosureReturn => useDisclosure({ defaultOpen: true }),
    );
    expect(result.current.isOpen).toBe(true);
  });

  it("should handle controlled mode", (): void => {
    const { result } = renderHook(
      (): UseDisclosureReturn => useDisclosure({ isOpen: true }),
    );
    expect(result.current.isControlled).toBe(true);
    expect(result.current.isOpen).toBe(true);
  });

  it("should call onChange when state changes in uncontrolled mode", (): void => {
    const onChange = vi.fn();
    const { result } = renderHook(
      (): UseDisclosureReturn => useDisclosure({ onChange }),
    );

    act((): void => {
      result.current.onOpen();
    });

    expect(onChange).toHaveBeenCalledWith(true);
  });

  it("should call onOpen callback", (): void => {
    const onOpen = vi.fn();
    const { result } = renderHook(
      (): UseDisclosureReturn => useDisclosure({ onOpen }),
    );

    act((): void => {
      result.current.onOpen();
    });

    expect(onOpen).toHaveBeenCalled();
  });

  it("should call onClose callback", (): void => {
    const onClose = vi.fn();
    const { result } = renderHook(
      (): UseDisclosureReturn =>
        useDisclosure({
          defaultOpen: true,
          onClose,
        }),
    );

    act((): void => {
      result.current.onClose();
    });

    expect(onClose).toHaveBeenCalled();
  });

  it("should toggle state with onOpenChange", (): void => {
    const { result } = renderHook((): UseDisclosureReturn => useDisclosure());

    act((): void => {
      result.current.onOpenChange();
    });
    expect(result.current.isOpen).toBe(true);

    act((): void => {
      result.current.onOpenChange();
    });
    expect(result.current.isOpen).toBe(false);
  });

  describe("getButtonProps", (): void => {
    it("should return correct button props", (): void => {
      const { result } = renderHook((): UseDisclosureReturn => useDisclosure());
      const buttonProps = result.current.getButtonProps();

      expect(buttonProps).toHaveProperty("aria-expanded", false);
      expect(buttonProps).toHaveProperty("aria-controls");
      expect(buttonProps).toHaveProperty("onClick");
    });

    it("should merge custom props", (): void => {
      const { result } = renderHook((): UseDisclosureReturn => useDisclosure());
      const customProps = { className: "test", disabled: true };
      const buttonProps = result.current.getButtonProps(customProps);

      expect(buttonProps).toEqual(expect.objectContaining(customProps));
    });
  });

  describe("getDisclosureProps", (): void => {
    it("should return correct disclosure props", (): void => {
      const { result } = renderHook((): UseDisclosureReturn => useDisclosure());
      const disclosureProps = result.current.getDisclosureProps();

      expect(disclosureProps).toHaveProperty("hidden", true);
      expect(disclosureProps).toHaveProperty("id");
    });

    it("should merge custom props", (): void => {
      const { result } = renderHook((): UseDisclosureReturn => useDisclosure());
      const customProps = { className: "test" };
      const disclosureProps = result.current.getDisclosureProps(customProps);

      expect(disclosureProps).toEqual(expect.objectContaining(customProps));
    });
  });

  it("should handle custom id", (): void => {
    const customId = "custom-id";
    const { result } = renderHook(
      (): UseDisclosureReturn => useDisclosure({ id: customId }),
    );

    const buttonProps = result.current.getButtonProps();
    const disclosureProps = result.current.getDisclosureProps();

    expect(buttonProps["aria-controls"]).toBe(customId);
    expect(disclosureProps.id).toBe(customId);
  });

  it("should warn when changing from controlled to uncontrolled", (): void => {
    const consoleSpy = vi.spyOn(console, "warn");
    const { rerender } = renderHook(
      (props): UseDisclosureReturn => useDisclosure(props),
      {
        initialProps: { isOpen: true },
      },
    );

    rerender();

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("changed from controlled to uncontrolled"),
    );
  });

  it("should warn when changing from uncontrolled to controlled", (): void => {
    const consoleSpy = vi.spyOn(console, "warn");
    const { rerender } = renderHook(
      (props): UseDisclosureReturn => useDisclosure(props),
      {
        initialProps: {},
      },
    );

    rerender({ isOpen: true });

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("changed from uncontrolled to controlled"),
    );
  });
});
