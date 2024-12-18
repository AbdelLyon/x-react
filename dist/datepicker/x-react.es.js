/* empty css                */
import { j as $ } from "../jsx-runtime-Dx-03ztt.js";
import { forwardRef as b } from "react";
import { DatePicker as g } from "@nextui-org/react";
const h = b(
  ({
    // Values
    value: e,
    defaultValue: r,
    minValue: a,
    maxValue: t,
    // Labels
    label: s,
    description: f,
    errorMessage: i,
    labelPlacement: m = "inside",
    // Appearance
    variant: o = "flat",
    color: l = "default",
    size: p = "md",
    radius: d = "md",
    // States
    isDisabled: c = !1,
    isReadOnly: k = !1,
    isInvalid: n = !1,
    isRequired: x = !1,
    autoFocus: D = !1,
    // Calendar
    isDateUnavailable: P,
    // Events
    onOpenChange: j,
    onFocus: u,
    onBlur: R,
    // Styling
    className: w,
    classNames: y,
    ...E
  }, N) => /* @__PURE__ */ $.jsx(
    g,
    {
      ref: N,
      value: e,
      defaultValue: r,
      minValue: a,
      maxValue: t,
      label: s,
      description: f,
      errorMessage: i,
      labelPlacement: m,
      variant: o,
      color: l,
      size: p,
      radius: d,
      isDisabled: c,
      isReadOnly: k,
      isInvalid: n,
      isRequired: x,
      autoFocus: D,
      isDateUnavailable: P,
      onOpenChange: j,
      onFocus: u,
      onBlur: R,
      className: w,
      classNames: y,
      ...E
    }
  )
);
h.displayName = "DatePicker";
export {
  h as DatePicker
};
