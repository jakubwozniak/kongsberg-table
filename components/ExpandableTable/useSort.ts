import { useMemo, useState } from "react";

const useSort = <T>(
  items: T[],
  columns: Column<T>[],
  defaultSortColumnId: number | null,
  defaultSortDirection: SortDirection
) => {
  const [sortColumnId, setSortColumnId] = useState<number | null>(
    defaultSortColumnId
  );
  const [sortDirection, setSortDirection] =
    useState<SortDirection>(defaultSortDirection);

  const sortedItems = useMemo(() => {
    if (sortColumnId === null) return items;

    return [...items].sort((itemA, itemB) => {
      const titleA =
        columns[sortColumnId].accessorValue(itemA)?.toLowerCase() ?? "";
      const titleB =
        columns[sortColumnId].accessorValue(itemB)?.toLowerCase() ?? "";
      return sortDirection.direction === "asc"
        ? titleA.localeCompare(titleB)
        : titleB.localeCompare(titleA);
    });
  }, [items, sortColumnId, sortDirection, columns]);

  const updateSortDirection = (id: number) => {
    if (id === sortColumnId) {
      setSortDirection({
        direction: sortDirection.direction === "asc" ? "desc" : "asc",
      });
      if (sortDirection.direction === "desc") setSortColumnId(null);
    } else {
      setSortColumnId(id);
      setSortDirection({ direction: "asc" });
    }
  };

  return { sortedItems, sortColumnId, sortDirection, updateSortDirection };
};

export default useSort;
