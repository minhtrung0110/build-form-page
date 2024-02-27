// Libraries
import React from 'react';

interface SelectAllProps {}

export const SelectAll: React.FC<SelectAllProps> = props => {
  return (
    <button className='ql-select-all'>
      <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'>
        <path d='M0 0h24v24H0z' fill='none' />
        <path
          className='ql-fill'
          d='M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z'
        />
      </svg>
    </button>
  );
};

export function handleSelectAll(this: any) {
  let length = this.quill.getLength();
  this.quill.setSelection(0, length, 'user');
}