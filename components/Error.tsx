import React from "react";

const Error = ({ error }: { error: string }) => {
  return <div className="text-center pt-6 text-red-500">{error}</div>;
};

export default Error;
