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
  defaultSortColumnId = null,
  defaultSortDirection = { direction: "asc" },
  ...props
}: ExpandableTableProps<T>) => {
  const { setBreadcrumb, setBreadcrumbNamePath } = useBreadcrumb();
  const [sortColumnId, setSortColumnId] = useState<number | null>(
    defaultSortColumnId
  );
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(defaultSortDirection);
  useEffect(() => {
    const handleBreadcrumbClick = () => {
      setBreadcrumb((prev) => [prev[0]]);
    };

    setBreadcrumbNamePath(breadcrumbNamePath);
    setBreadcrumb([
      { id: rootName, label: rootName, onClick: () => handleBreadcrumbClick() },
    ]);
  }, [setBreadcrumb, setBreadcrumbNamePath, breadcrumbNamePath, rootName]);

  const toggleSortDirection = () => {
    sortDirection.direction === "asc"
      ? setSortDirection({ direction: "desc" })
      : setSortDirection({ direction: "asc" });
  };

  const updateSortDirection = (id: number) => {
    if (id === sortColumnId) {
      if (sortDirection.direction === "desc") setSortColumnId(null);
      toggleSortDirection();
    } else {
      setSortColumnId(id);
      setSortDirection({ direction: "asc" });
    }
  };

  const categorizedItems: { [key: string]: T[] } = useMemo(() => {
    const categoryItems: { [key: string]: T[] } = {};
    const otherItems: T[] = [];

    listOfCategories?.forEach((category) => {
      categoryItems[category.name] = [];
    });

    const sortedItems =
      sortColumnId !== null
        ? [...items].sort((itemA, itemB) => {
            const titleA =
              columns[sortColumnId].accessorValue(itemA)?.toLowerCase() ?? "";
            const titleB =
              columns[sortColumnId].accessorValue(itemB)?.toLowerCase() ?? "";
            return sortDirection.direction === "asc"
              ? titleA.localeCompare(titleB)
              : titleB.localeCompare(titleA);
          })
        : items;

    sortedItems?.forEach((item) => {
      const categories = getPropertyByPath(
        item,
        itemCategoryPath
      ) as Array<any>;

      if (!Array.isArray(categories)) return;

      let categorized = false;

      categories.forEach((categoryName) => {
        const matchingCategory = listOfCategories.find(
          (category) => category.name === categoryName
        );

        if (matchingCategory) {
          categoryItems[matchingCategory.name].push(item);
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
  }, [
    items,
    itemCategoryPath,
    listOfCategories,
    columns,
    sortColumnId,
    sortDirection,
  ]);

  if (items === undefined) throw Error("No items to render.");

  const renderItem = (item: T, parentName: string, color: string) => (
    <TableItemCollapsible
      DetailsComponent={DetailsComponent}
      key={item!.id}
      item={item}
      columns={columns as Column<T>[]}
      parentName={parentName}
      className={`border-0 border-l-4 border-${color}`}
      {...props}
    />
  );

  return (
    <div className="relative w-full min-h-60 h-calc-lvh-5rem max-h-calc-lvh-5rem md:max-h-calc-100vh-10rem hsx:max-h-screen hsx:min-h-72 overflow-x-auto">
      <Table>
        <TableHeader
          sortColumnId={sortColumnId}
          setSortColumnId={(id: number) => updateSortDirection(id)}
          sortDirection={sortDirection}
          columns={columns}
        />
        <TableBody>
          {listOfCategories.map((category) => (
            <ExpandableRow
              key={category.name}
              id={category.name}
              colSpan={columns.length}
              parentName={rootName}
              itemsCount={categorizedItems[category.name].length}
              className={`border-0 border-t-0 border-l-4 border-${category.color}`}
            >
              <>
                {categorizedItems[category.name]?.map((item) =>
                  renderItem(item, category.name, category.color)
                )}
              </>
            </ExpandableRow>
          ))}
          {categorizedItems.otherItems.map((item) =>
            renderItem(item, rootName, "#808080")
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ExpandableTable;
