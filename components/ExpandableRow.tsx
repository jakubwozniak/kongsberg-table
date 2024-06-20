import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { TableCell, TableRow } from "./ui/table";

const ExpandableRow = ({
  id,
  expandedId,
  setExpandedIndex,
  children,
}: {
  id: string;
  expandedId: string | null;
  setExpandedIndex: (id: string | null) => void;
  children?: React.ReactNode;
}) => {
  const handleTriggerClick = (id: string) => {
    if (id === expandedId) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(id);
    }
  };
  return (
    <Collapsible key={id} asChild open={id === expandedId}>
      <>
        <CollapsibleTrigger asChild onClick={() => handleTriggerClick(id)}>
          <TableRow>
            <TableCell colSpan={8}>{id}</TableCell>
          </TableRow>
        </CollapsibleTrigger>
        <CollapsibleContent asChild>{children}</CollapsibleContent>
      </>
    </Collapsible>
  );
};

export default ExpandableRow;
