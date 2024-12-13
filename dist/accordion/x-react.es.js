/* empty css                */
import { j as e } from "../jsx-runtime-Dx-03ztt.js";
import { createElement as n } from "react";
import { Accordion as c, AccordionItem as m } from "@nextui-org/react";
const d = ({
  items: o,
  ...t
}) => /* @__PURE__ */ e.jsx(c, { ...t, children: o.map((r) => /* @__PURE__ */ n(m, { ...r, key: r.key }, r.content)) });
export {
  d as AccordionWrapper
};
