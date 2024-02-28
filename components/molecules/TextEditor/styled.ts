import styled from 'styled-components';
import { THEME } from '@/constants/theme';

export const TextEditorWrapper = styled.div`
  margin: 0 auto;

  .ql-toolbar {
    border-top-right-radius: ${THEME.token.borderRadius};
    border-top-left-radius: ${THEME.token.borderRadius};
  }

  .quill {
    .ql-container {
      border-bottom-right-radius: ${THEME.token.borderRadius};
      border-bottom-left-radius: ${THEME.token.borderRadius};

      .ql-editor {
        min-height: 380px;
      }
    }
  }
`;

interface FontStyleWrapperProps {
  width?: number;
}

export const FontWrapper = styled.select<FontStyleWrapperProps>`
  margin-bottom: 2px;
  width: ${props => props.width}px !important;

  .ql-picker-label {
    font-weight: bold;
    border-radius: 2px;
    width: ${props => props.width}px !important;
    height: 28px;
    display: flex;
    justify-content: left;
    align-items: center;

    &:hover {
      border: 1px solid ${THEME.token.bsFocusInput};
      color: ${THEME.token.bsFocusInput} !important;
    }
  }
`;

interface QuillFormatWrapperProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'left'
    | 'right';
}

export const QuillFormatWrapper = styled.span<QuillFormatWrapperProps>`
  margin: 4px 0;
  display: flex !important;
  justify-content: ${props => props?.justifyContent || 'space-between'};
`;
