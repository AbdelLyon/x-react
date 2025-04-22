import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { mergeTailwindClasses } from "../../utils/index.es.js";
import { Button, Link } from "@heroui/react";
import { IconPlus } from "@tabler/icons-react";
import { useResponsive } from "../../hooks/useResponsive/index.es.js";
import { Tooltip } from "../../tooltip/Tooltip/index.es.js";
const Sidebar = ({
  items = [],
  classNames,
  bgImage,
  onItemClick,
  ref,
  actionLabel,
  actionIcon = /* @__PURE__ */ jsx(IconPlus, { className: "text-white" }),
  actionColor = "primary",
  actionClick,
  showDivider = true
}) => {
  const { isDesktop, isTablet } = useResponsive();
  if (!isDesktop && !isTablet) {
    return null;
  }
  const renderLink = (item) => {
    const linkContent = /* @__PURE__ */ jsxs(
      Link,
      {
        className: mergeTailwindClasses(
          "flex items-center p-3 text-[#ECEDEE] hover:text-foreground hover:bg-content1 rounded-md cursor-pointer text-sm transition-all duration-200",
          {
            "border-l-2 border-primary bg-content1 text-primary": item.isActive,
            "border-l-0 border-l-primary justify-center": isTablet && item.isActive,
            "gap-3 px-3": isDesktop,
            "w-full flex justify-center": isTablet
          },
          classNames == null ? void 0 : classNames.item
        ),
        onPress: () => onItemClick == null ? void 0 : onItemClick(item),
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: mergeTailwindClasses({
                "": isDesktop,
                "flex items-center justify-center w-9 h-9": isTablet && !item.isActive,
                "flex items-center justify-center w-9 h-9 bg-primary/10": isTablet && item.isActive
              }),
              children: item.startContent
            }
          ),
          isDesktop ? /* @__PURE__ */ jsx("span", { children: item.label }) : null,
          item.endContent && /* @__PURE__ */ jsx(
            "div",
            {
              className: mergeTailwindClasses({
                "": isDesktop,
                "absolute right-1 top-1": isTablet
              }),
              children: item.endContent
            }
          )
        ]
      },
      item.key
    );
    if (isTablet) {
      return /* @__PURE__ */ jsx(
        Tooltip,
        {
          trigger: linkContent,
          content: item.label,
          placement: "right",
          delay: 0,
          closeDelay: 0,
          className: "border border-border px-2 py-1 shadow-lg"
        },
        item.key
      );
    }
    return linkContent;
  };
  const actionButton = actionClick && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center py-3", children: [
      " ",
      /* @__PURE__ */ jsx(
        Button,
        {
          color: actionColor,
          radius: "none",
          className: mergeTailwindClasses(
            "transition-all",
            {
              "w-[85%] justify-start px-3": isDesktop,
              "w-[62px] h-[38px] p-0 flex items-center justify-center": isTablet
              // Dimensions précises
            },
            classNames == null ? void 0 : classNames.action
          ),
          startContent: isDesktop ? /* @__PURE__ */ jsx("div", { className: "mr-2 bg-white p-1", children: actionIcon }) : null,
          onPress: actionClick,
          children: isDesktop ? actionLabel : /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: actionIcon })
        }
      )
    ] }),
    showDivider && /* @__PURE__ */ jsx(
      "hr",
      {
        className: mergeTailwindClasses("border border-border", {
          "mx-4 my-3": isDesktop,
          "mx-auto my-4 w-10": isTablet
          // Espacement parfait avant les éléments
        })
      }
    )
  ] });
  return /* @__PURE__ */ jsxs(
    "aside",
    {
      ref,
      className: mergeTailwindClasses(
        "fixed left-0 h-screen flex flex-col bg-[#212324] border-r border-border",
        {
          "w-[270px]": isDesktop,
          "w-[70px]": isTablet
        },
        classNames == null ? void 0 : classNames.base
      ),
      children: [
        actionButton,
        /* @__PURE__ */ jsx(
          "nav",
          {
            className: mergeTailwindClasses("flex-1", {
              "p-4": isDesktop,
              "pt-2 px-2": isTablet
              // Ajustement du padding top pour un meilleur espacement après le divider
            }),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: mergeTailwindClasses("flex flex-col", {
                  "gap-2": isDesktop,
                  "gap-4 items-center": isTablet
                  // Espacement parfait entre les éléments
                }),
                children: items.map(renderLink)
              }
            )
          }
        ),
        bgImage
      ]
    }
  );
};
export {
  Sidebar
};
