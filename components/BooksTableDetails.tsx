import { Divide } from "lucide-react";
import React from "react";

const BooksTableDetails = ({ item }: any) => {
  return (
    <div className="word-break max-w-screen flex flex-col">
      <div className="flex mb-4">
        <div className="w-1/2 min-h-12">
          <p className="text-lg font-semibold">Title</p>
          {item.volumeInfo.title}
        </div>
        <div className="w-1/2  h-12"></div>
      </div>
      <div className="flex mb-4">
        <div className="w-full min-h-12">
          <p className="text-lg font-semibold">Description</p>
          {item.volumeInfo.description}
        </div>
      </div>
    </div>
  );
};

export default BooksTableDetails;
