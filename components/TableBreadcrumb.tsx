"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";

const TableBreadcrumb = () => {
  const { breadcrumb } = useBreadcrumb();
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, index) => {
          const isLastItem = index === breadcrumb.length - 1;

          return isLastItem ? (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink className="text-xl">{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink
                  className="text-xl hover:text-black cursor-pointer"
                  onClick={item.onClick}
                >
                  {item.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default TableBreadcrumb;
