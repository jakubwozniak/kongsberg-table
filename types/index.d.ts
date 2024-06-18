interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    pageCount: number;
    categories: string[];
    language: string;
  };
}

interface BooksResponse {
  items: Book[];
  totalItems: number;
}

interface Column<T> {
  header: string;
  accessor: (item: T) => React.ReactNode;
  className?: string;
}

interface ExpandableTableProps<T> {
  items: T[];
  columns: Column<T>[];
}

interface BooksTableProps<T> {
  columns: Column<T>[];
}

interface TableHeaderProps<T> {
  columns: Column<T>[];
}

interface TableRowProps<T> {
  item: T;
  columns: Column<T>[];
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
}
