import { jsx as o } from "react/jsx-runtime";
import { forwardRef as e } from "react";
import { ButtonGroup as f } from "@nextui-org/react";
import { Button as u } from "../../Button/button/Button.es.js";
const s = e(
  ({ buttons: r, ...t }, m) => /* @__PURE__ */ o(f, { ref: m, ...t, children: r.map(({ key: n, label: p, buttonProps: i }) => /* @__PURE__ */ o(u, { ...i, children: p }, n)) })
);
s.displayName = "Buttons";
export {
  s as Buttons
};
