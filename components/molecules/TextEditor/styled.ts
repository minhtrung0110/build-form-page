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