
import React from 'react';
const Highlight = ({ text, query }) => {
  if (!query) return <>{text}</>; 
  const regex = new RegExp(`(${query})`, 'gi');
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) => (
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> 
        ) : (
          part
        )
      ))}
    </>
  );
};

export default Highlight;
