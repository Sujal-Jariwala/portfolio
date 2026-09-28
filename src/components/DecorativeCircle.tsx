import React from 'react';

interface Props {
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  className?: string;
}

export const DecorativeCircle: React.FC<Props> = ({ size, top, left, right, bottom, className = '' }) => {
  return (
    <div
      className={`decorative-circle ${className}`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
      }}
    />
  );
};
