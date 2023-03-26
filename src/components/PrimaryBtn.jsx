import React from 'react';

const PrimaryBtn = ({ title, classBtn }) => {
  return (
    <button
      className={`border-2 border-amber-400 bg-amber-400 px-6 py-2 text-white ${classBtn} hover:border-amber-400 hover:bg-white hover:text-amber-400 hover:font-bold`}
    >
      {title}
    </button>
  );
};

export default PrimaryBtn;
