import EditorToolbar, { formats, modules } from '@/components/molecules/TextEditor/EditorToolbar';
import ReactQuill from 'react-quill';
import React from 'react';

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value: any) => {
    setState({ value });
  };
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={state.value || ''}
        onChange={handleChange}
        placeholder={'Write something awesome...'}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
