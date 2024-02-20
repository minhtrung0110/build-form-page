'use client';

import { Button } from '@/components/ui/button';
import React from 'react';

interface HistoryProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const Redo: React.FC<HistoryProps> = props => {
  // Hooks
  //const { t } = useTranslation();

  return (
    <Button
      className="at-ql-redo"
      //title={t(translations.textEditor.toolbar.redo.tooltip)} onClick={props.onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          className={'ql-fill'}
          d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"
        />
      </svg>
    </Button>
  );
};