import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const booksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
  },
  {
    header: "Authors",
    accessor: (item) =>
      item.volumeInfo.authors && item.volumeInfo.authors.join(", "),
  },
  {
    header: "Title",
    accessor: (item) => item.volumeInfo.title,
  },
  {
    header: "Description",
    accessor: (item) => (
      <HoverCard>
        <HoverCardTrigger>{item.volumeInfo.description}</HoverCardTrigger>
        <HoverCardContent>{item.volumeInfo.description}</HoverCardContent>
      </HoverCard>
    ),
  },
  {
    header: "Publisher",
    accessor: (item) => item.volumeInfo.publisher,
  },
  {
    header: "Published Date",
    accessor: (item) => item.volumeInfo.publishedDate,
    className: "text-nowrap",
  },
  {
    header: "Page Count",
    accessor: (item) => item.volumeInfo.pageCount,
  },
  {
    header: "Categories",
    accessor: (item) =>
      item.volumeInfo.categories && item.volumeInfo.categories.join(", "),
  },
  {
    header: "Language",
    accessor: (item) => item.volumeInfo.language,
  },
];

export const basicBooksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
  },
  {
    header: "Title",
    accessor: (item) => item.volumeInfo.title,
  },
  {
    header: "Description",
    accessor: (item) => (
      <HoverCard>
        <HoverCardTrigger>{item.volumeInfo.description}</HoverCardTrigger>
        <HoverCardContent>{item.volumeInfo.description}</HoverCardContent>
      </HoverCard>
    ),
  },
];
