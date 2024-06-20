"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Table, TableBody, TableCell } from "@/components/ui/table";

import TableHeader from "./TableHeader";
import TableItemCollapsible from "./TableItemCollapsible";
import { useBreadcrumb } from "@/providers/BreadcrumbProvider";
import ExpandableRow from "./ExpandableRow";
import { getPropertyByPath } from "@/lib/utils";

const ExpandableTable = <T extends { id: string } | undefined>({
  DetailsComponent,
  items,
  columns,
  rootName,
  breadcrumbNamePath,
  itemCategoryPath,
  listOfCategories,
  ...props
}: ExpandableTableProps<T>) => {
  const { setBreadcrumb, setBreadcrumbNamePath } = useBreadcrumb();

  useEffect(() => {
    const handleBreadcrumbClick = () => {
      setBreadcrumb((prev) => [prev[0]]);
    };

    setBreadcrumbNamePath(breadcrumbNamePath);
    setBreadcrumb([
      { id: rootName, label: rootName, onClick: () => handleBreadcrumbClick() },
    ]);
  }, [setBreadcrumb, setBreadcrumbNamePath, breadcrumbNamePath, rootName]);

  const categorizedItems: { [key: string]: T[] } = useMemo(() => {
    const categoryItems: { [key: string]: T[] } = {};
    const otherItems: T[] = [];

    listOfCategories?.forEach((category) => {
      categoryItems[category] = [];
    });

    items?.forEach((item) => {
      const categories = getPropertyByPath(
        item,
        itemCategoryPath
      ) as Array<any>;

      if (!Array.isArray(categories)) return;

      let categorized = false;

      categories.forEach((category) => {
        if (listOfCategories.includes(category)) {
          categoryItems[category].push(item);
          categorized = true;
        }
      });

      if (!categorized) {
        otherItems.push(item);
      }
    });

    return {
      ...categoryItems,
      otherItems,
    };
  }, [items, itemCategoryPath, listOfCategories]);

  if (items === undefined) return null;

  const renderItem = (item: T, parentName: string) => (
    <TableItemCollapsible
      DetailsComponent={DetailsComponent}
      key={item!.id}
      item={item}
      columns={columns as Column<T>[]}
      parentName={parentName}
      {...props}
    />
  );

  return (
    <Table>
      <TableHeader columns={columns} />
      <TableBody>
        {listOfCategories.map((category) => (
          <ExpandableRow
            key={category}
            id={category}
            colSpan={columns.length}
            parentName={rootName}
          >
            <>
              {categorizedItems[category]?.map((item) =>
                renderItem(item, category)
              )}
            </>
          </ExpandableRow>
        ))}
        {categorizedItems.otherItems.map((item) => renderItem(item, rootName))}
      </TableBody>
    </Table>
  );
};

export default ExpandableTable;
