/* empty css                */
import { j as n } from "../jsx-runtime-Dx-03ztt.js";
import { createElement as c } from "react";
import { Accordion as i, AccordionItem as p } from "@nextui-org/react";
const f = ({
  items: o,
  ...t
}) => /* @__PURE__ */ n.jsx(i, { ...t, children: o.map((e) => {
  const { content: m, ...r } = e;
  return /* @__PURE__ */ c(p, { ...r, key: r.key }, m);
}) });
export {
  f as AccordionWrapper
};
