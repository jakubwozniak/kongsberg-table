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
  DetailsComponent: React.ComponentType<any>;
  items: T[];
  columns: Column<T>[];
  rootName: string;
  breadcrumbNamePath: string;
  itemCategoryPath: string;
  listOfCategories: Category[];
  [key: string]: any;
}

interface Category {
  name: string;
  color: string;
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

interface TableItemCollapsibleProps<T> {
  DetailsComponent: React.ComponentType<any>;
  item: T;
  columns: Column<T>[];
  [key: string]: any;
}
interface ExpandableRowProps {
  id: string;
  colSpan: number;
  parentName: string;
  children?: React.ReactNode;
  [key: string]: any;
}

interface BreadcrumbContextType {
  breadcrumbIds: string[];
  breadcrumbNamePath: string;
  setBreadcrumbNamePath: React.Dispatch<React.SetStateAction<string>>;
  breadcrumb: BreadcrumbItem[];
  setBreadcrumb: React.Dispatch<React.SetStateAction<BreadcrumbItem[]>>;
  addBreadcrumbItem: (item: BreadcrumbItem) => void;
  removeAllBreadcrumbItemChilds: (label: string) => void;
}

interface BreadcrumbProviderProps {
  children: ReactNode;
}

interface BreadcrumbItem {
  id: string;
  label: string;
  onClick: () => void;
}
