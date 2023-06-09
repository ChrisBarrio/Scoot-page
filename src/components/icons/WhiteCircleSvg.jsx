import * as React from 'react';

const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={234} height={63} {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={31} cy={31.5} r={29.5} stroke="#cecece" strokeWidth={3} />
      <circle cx={117} cy={31.5} r={29.5} stroke="#cecece" strokeWidth={3} />
      <circle cx={203} cy={31.5} r={31} fill="#cecece" />
    </g>
  </svg>
);

export default SvgComponent;
