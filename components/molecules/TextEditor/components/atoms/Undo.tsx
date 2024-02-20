'use client';

import { Button } from '@/components/ui/button';

interface HistoryProps {
  disabled?: boolean;
  onClick?: () => void;
}

export const Undo: React.FC<HistoryProps> = props => {
  // Hooks
  //const { t } = useTranslation();

  return (
    <Button
      className="at-ql-undo"
      onClick={props.onClick}
      //title={t(translations.textEditor.toolbar.undo.tooltip)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px">
        <path d="M0 0h24v24H0z" fill="none" />
        <path
          className="ql-fill"
          d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"
        />
      </svg>
    </Button>
  );
};