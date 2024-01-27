import ReactQuill from 'react-quill';
import React, { useRef } from 'react';
import EditorToolbar, { formats, modules } from '@/components/molecules/TextEditor/Toolbar';
import { TextEditorWrapper } from '@/components/molecules/TextEditor/styled';

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

  return (
    <TextEditorWrapper>
      <EditorToolbar quillRef={quillRef} />
      <ReactQuill
        theme={theme}
        value={value || ''}
        onChange={onChange}
        ref={quillRef}
        onBlur={onBlur}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
    </TextEditorWrapper>
  );
};

export default TextEditor;
TextEditor.defaultProps = {
  theme: 'snow',
  placeholder: 'Write something awesome...',
};


