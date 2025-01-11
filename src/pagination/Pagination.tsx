import type { JSX } from "react";
import { forwardRef } from "react";
import type { PaginationProps as PaginationRootProps } from "@nextui-org/pagination";
import { Pagination as PaginationRoot } from "@nextui-org/pagination";
import { mergeTailwindClasses } from "@/utils";

export interface PaginationProps extends PaginationRootProps {
  containerClasses?: string;
}

export const Pagination = forwardRef<HTMLUListElement, PaginationProps>(
  ({ containerClasses, classNames, ...props }, ref): JSX.Element => {
    return (
      <div
        className={mergeTailwindClasses(
          "w-full flex justify-center",
          containerClasses,
        )}
      >
        <PaginationRoot
          ref={ref}
          classNames={{
            ...classNames,
            base: mergeTailwindClasses("gap-2", classNames?.base),
            item: mergeTailwindClasses(
              "data-[hover=true]:bg-default-100",
              classNames?.item,
            ),
            prev: mergeTailwindClasses(
              "data-[hover=true]:bg-default-100",
              classNames?.prev,
            ),
            next: mergeTailwindClasses(
              "data-[hover=true]:bg-default-100",
              classNames?.next,
            ),
          }}
          {...props}
        />
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
