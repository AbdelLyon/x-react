import { forwardRef } from "react";
import type { PaginationProps as PaginationRootProps } from "@nextui-org/react";
import { Pagination as PaginationRoot } from "@nextui-org/react";
import { cn } from "@/utils";

export interface PaginationProps extends PaginationRootProps {
  containerClasses?: string;
}

export const Pagination = forwardRef<HTMLUListElement, PaginationProps>(
  ({ containerClasses, classNames, ...props }, ref) => {
    return (
      <div className={cn("w-full flex justify-center", containerClasses)}>
        <PaginationRoot
          ref={ref}
          classNames={{
            ...classNames,
            base: cn("gap-2", classNames?.base),
            item: cn("data-[hover=true]:bg-default-100", classNames?.item),
            prev: cn("data-[hover=true]:bg-default-100", classNames?.prev),
            next: cn("data-[hover=true]:bg-default-100", classNames?.next),
          }}
          {...props}
        />
      </div>
    );
  },
);

Pagination.displayName = "Pagination";
