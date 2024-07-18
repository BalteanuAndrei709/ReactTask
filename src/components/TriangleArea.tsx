import React from "react";

interface TriangleAreaProps {
  height: number | undefined;
  width: number | undefined;
}

const calculateTriangleArea = (height: number, width: number): number => {
  return (height * width) / 2;
};

const TriangleArea: React.FC<TriangleAreaProps> = ({ height, width }) => {
  if (height === undefined || width === undefined || height < 0 || width < 0) return null;
  const area = calculateTriangleArea(height, width);
  return <div>Triangle Area: {area}</div>;
};

export default TriangleArea;
export { calculateTriangleArea };
