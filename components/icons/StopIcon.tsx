import React from 'react';
export interface StopIconPayload {
  className?: string;
  color?: string;
}

const StopIcon = (props: StopIconPayload) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={props.color || 'currentColor'}
      className={props.className}
    >
      <rect fill="none" height="24" width="24" />
      <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M16,16H8V8h8V16z" />
    </svg>
  );
};

export default StopIcon;
