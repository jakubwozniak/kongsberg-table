import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const getAuthors = (item: Book) =>
  item.volumeInfo.authors && item.volumeInfo.authors.join(", ");

const getTitle = (item: Book) => item.volumeInfo.title;

const getPublisher = (item: Book) => item.volumeInfo.publisher;

const getPublishedDate = (item: Book) => item.volumeInfo.publishedDate;

const getPageCount = (item: Book) => item.volumeInfo.pageCount.toString();

const getCategories = (item: Book) =>
  item.volumeInfo.categories && item.volumeInfo.categories.join(", ");

const getLanguage = (item: Book) => item.volumeInfo.language;

export const booksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
    accessorValue: (item) => item.id,
  },
  {
    header: "Authors",
    accessor: (item) => getAuthors(item),
    accessorValue: (item) => getAuthors(item),
  },
  {
    header: "Title",
    accessor: (item) => getTitle(item),
    accessorValue: (item) => getTitle(item),
  },
  {
    header: "Description",
    accessor: (item) => (
      <HoverCard>
        <HoverCardTrigger>{item.volumeInfo.description}</HoverCardTrigger>
        <HoverCardContent>{item.volumeInfo.description}</HoverCardContent>
      </HoverCard>
    ),
    accessorValue: (item) => item.volumeInfo.description,
  },
  {
    header: "Publisher",
    accessor: (item) => getPublisher(item),
    accessorValue: (item) => getPublisher(item),
  },
  {
    header: "Published Date",
    accessor: (item) => getPublishedDate(item),
    accessorValue: (item) => getPublishedDate(item),
    className: "text-nowrap",
  },
  {
    header: "Pages",
    accessor: (item) => getPageCount(item),
    accessorValue: (item) => getPageCount(item),
    className: "text-nowrap",
  },
  {
    header: "Categories",
    accessor: (item) => getCategories(item),
    accessorValue: (item) => getCategories(item),
  },
  {
    header: "Language",
    accessor: (item) => item.volumeInfo.language,
    accessorValue: (item) => getLanguage(item),
  },
];

export const basicBooksColumns: Column<Book>[] = [
  {
    header: "Id",
    accessor: (item) => item.id,
    accessorValue: (item) => item.id,
  },
  {
    header: "Title",
    accessor: (item) => getTitle(item),
    accessorValue: (item) => getTitle(item),
  },
  {
    header: "Description",
    accessor: (item) => (
      <HoverCard>
        <HoverCardTrigger>{item.volumeInfo.description}</HoverCardTrigger>
        <HoverCardContent>{item.volumeInfo.description}</HoverCardContent>
      </HoverCard>
    ),
    accessorValue: (item) => item.volumeInfo.description,
  },
];
