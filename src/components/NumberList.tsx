import React from "react";

interface NumberListProps {
  number: number | undefined;
}

const NumberList: React.FC<NumberListProps> = ({ number }) => {
  if (number === undefined || number <= 0) return null;
  const numbers = Array.from({ length: number }, (_, i) => i + 1);
  return <div>{numbers.join(", ")}</div>;
};

export default NumberList;
