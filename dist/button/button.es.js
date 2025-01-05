import "../image/image.es.js";
import { B as e } from "../Button-Bwji-dCD.js";
import { jsx as o } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import { ButtonGroup as s } from "@nextui-org/react";
const u = f(
  ({ buttons: r, ...t }, m) => /* @__PURE__ */ o(s, { ref: m, ...t, children: r.map(({ key: p, label: i, buttonProps: n }) => /* @__PURE__ */ o(e, { ...n, children: i }, p)) })
);
u.displayName = "Buttons";
export {
  e as Button,
  u as Buttons
};
