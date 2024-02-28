import React from 'react';
import { Quill } from 'react-quill';
import { Undo } from '@/components/molecules/TextEditor/ToolBar/History/Undo';
import { Redo } from '@/components/molecules/TextEditor/ToolBar/History/Redo';
import { DEFAULT_FONT_CONFIGS, DEFAULT_FONT_SIZE_CONFIGS } from '@/components/molecules/TextEditor/config';
import { FontWrapper, QuillFormatWrapper } from '@/components/molecules/TextEditor/styled';

// Add sizes to whitelist and register them
const Size = Quill.import('formats/size');
Size.whitelist = [...DEFAULT_FONT_SIZE_CONFIGS.map(i => i.value)];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import('formats/font');
Font.whitelist = [
  'arial',
  'comic-sans',
  'courier-new',
  'georgia',
  'helvetica',
  'lucida',
  'times-new-roman',
  'verdana',
  'roboto',
  'calibri',
  'impact',
  'palatino',
  'tahoma',
  'garamond',
  'bookman',
  'cursive',
  'fantasy',
  'monospace',
  'serif',
  'sans-serif',
];
Quill.register(Font, true);

interface QuillToolBar {
  quillRef: any;
}

const DEFAULT_FONT_WEIGHT = 400;

// Quill Toolbar component
export const ToolbarQuill: React.FC<QuillToolBar> = props => {
  const { quillRef } = props;
  // Default Value ToolBar
  const fontFamilies = DEFAULT_FONT_CONFIGS;
  const fontSizes = DEFAULT_FONT_SIZE_CONFIGS;

  // handle
  const myUndo = () => {
    let myEditor = quillRef.current.getEditor();
    //console.log('Check ref:', myEditor);
    return myEditor.history.undo();
  };
  const myRedo = () => {
    let myEditor = quillRef.current.getEditor();
    //console.log('Check ref:', myEditor);
    return myEditor.history.redo();
  };

  return (
    <div id="bfp-rq-toolbar">
      <QuillFormatWrapper>
        <FontWrapper width={160} className="ql-font" defaultValue="arial">
          {fontFamilies.map(font => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </FontWrapper>
        <FontWrapper width={70} className="ql-size" defaultValue="14">
          {fontSizes.map(font => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </FontWrapper>
      </QuillFormatWrapper>
      <QuillFormatWrapper className={'ql-format'}>
        <FontWrapper width={80} className="ql-header" defaultValue="3">
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Normal</option>
          <option value="4">Subtitle</option>
          <option value="5">Small</option>
        </FontWrapper>
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        <button className="ql-script" value="super" />
        <button className="ql-script" value="sub" />
      </QuillFormatWrapper>
      <QuillFormatWrapper className={'ql-format'}>
        <select className="ql-color" />
        <select className="ql-background" />
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
        <button className="ql-indent" value="-1" />
        <button className="ql-indent" value="+1" />
        <select className="ql-align" />
      </QuillFormatWrapper>
      <QuillFormatWrapper className={'ql-format'}>
        <button className="ql-blockquote" />
        <button className="ql-direction" />
        <button className="ql-link" />
        <button className="ql-formula" />
        <button className="ql-code-block" />
        <button className="ql-clean" />
      </QuillFormatWrapper>
      <QuillFormatWrapper justifyContent={'left'} className={'ql-format'}>
        <button className="ql-undo">
          <Undo key={12} disabled={!quillRef?.current?.length} onClick={myUndo} />
        </button>
        <button className="ql-redo">
          <Redo key={182} disabled={!quillRef?.current?.length} onClick={myRedo} />
        </button>
      </QuillFormatWrapper>
    </div>
  );
};

export default ToolbarQuill;

