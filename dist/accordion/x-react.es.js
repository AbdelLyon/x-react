/* empty css                */
import { j as c } from "../jsx-runtime-Dx-03ztt.js";
import { createElement as m } from "react";
import { Accordion as i, AccordionItem as p } from "@nextui-org/react";
const f = ({
  items: o,
  ...t
}) => /* @__PURE__ */ c.jsx(i, { ...t, children: o.map((e) => {
  const { content: n, ...r } = e;
  return /* @__PURE__ */ m(
    p,
    {
      ...r,
      key: r.key,
      children: n
    }
  );
}) });
export {
  f as AccordionWrapper
};
