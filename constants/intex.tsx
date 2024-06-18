export const booksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
  },
  {
    header: "Authors",
    accessor: (item) =>
      item.volumeInfo.authors && item.volumeInfo.authors.join(", "),
    className: "hidden xl:table-cell",
  },
  {
    header: "Title",
    accessor: (item) => item.volumeInfo.title,
  },
  {
    header: "Description",
    accessor: (item) => item.volumeInfo.description,
  },
  {
    header: "Publisher",
    accessor: (item) => item.volumeInfo.publisher,
    className: "hidden lg:table-cell",
  },
  {
    header: "Published Date",
    accessor: (item) => item.volumeInfo.publishedDate,
    className: "hidden 2xl:table-cell",
  },
  {
    header: "Page Count",
    accessor: (item) => item.volumeInfo.pageCount,
    className: "hidden lg:table-cell",
  },
  {
    header: "Categories",
    accessor: (item) =>
      item.volumeInfo.categories && item.volumeInfo.categories.join(", "),
    className: "hidden xl:table-cell",
  },
  {
    header: "Language",
    accessor: (item) => item.volumeInfo.language,
    className: "hidden xl:table-cell",
  },
];

export const basicBooksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
  },
  {
    header: "Authors",
    accessor: (item) =>
      item.volumeInfo.authors && item.volumeInfo.authors.join(", "),
    className: "hidden xl:table-cell",
  },
  {
    header: "Title",
    accessor: (item) => item.volumeInfo.title,
  },
];
