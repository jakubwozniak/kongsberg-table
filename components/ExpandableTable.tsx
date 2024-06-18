"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableBreadcrumb from "./TableBreadcrumb";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const ExpandableTable = () => {
  const links = [
    { id: 0, name: "item 1", viewCount: 0 },
    { id: 1, name: "item 2", viewCount: 1 },
  ];
  return (
    <Card className="w-full">
      <CardHeader>
        <TableBreadcrumb />
        <CardTitle>Table Title</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Id</TableHead>
              <TableHead className="font-medium">View Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {links
              ? links.map((link) => (
                  <Collapsible key={link.id} asChild>
                    <>
                      <CollapsibleTrigger asChild>
                        <TableRow>
                          <TableCell>{link.name}</TableCell>
                          <TableCell>{link.id}</TableCell>
                          <TableCell>{link.viewCount}</TableCell>
                        </TableRow>
                      </CollapsibleTrigger>
                      <CollapsibleContent asChild>
                        <TableRow className="bg-red-500" key={link.id}>
                          <TableCell>{link.name}</TableCell>
                          <TableCell>{link.name}</TableCell>
                          <TableCell>{link.name}</TableCell>
                        </TableRow>
                      </CollapsibleContent>
                    </>
                  </Collapsible>
                ))
              : null}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ExpandableTable;
