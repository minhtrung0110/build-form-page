import ReactQuill from 'react-quill';
import React, { useRef } from 'react';
import { TextEditorWrapper } from '@/components/molecules/TextEditor/styled';
import { RQ_FORMATS } from '@/components/molecules/TextEditor/config';
import { handleSelectAll } from '@/components/molecules/TextEditor/ToolBar/SelectAll';
import ToolbarQuill from '@/components/molecules/TextEditor/ToolbarQuill';

interface TextEditorProps {
  value: string;
  theme?: string;
  onChange: () => void;
  onBlur: () => void;
  ref: React.RefCallback<any>;
  placeholder?: string;
}

export const TextEditor: React.FC<TextEditorProps> = props => {
  const { value, onChange, onBlur, ref, theme, placeholder } = props;
  const quillRef = useRef<ReactQuill>(null);
  console.log('Value: ', value);
  return (
    <TextEditorWrapper>
      <ToolbarQuill quillRef={quillRef} />
      <ReactQuill
        theme={theme}
        value={value || ''}
        onChange={onChange}
        ref={quillRef}
        onBlur={onBlur}
        placeholder={placeholder}
        formats={RQ_FORMATS}
        modules={{
          toolbar: {
            container: `#bfp-rq-toolbar`,
            handlers: {
              'select-all': handleSelectAll,
            },
          },
        }}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
TextEditor.defaultProps = {
  theme: 'snow',
  placeholder: 'Write something awesome...',
};


