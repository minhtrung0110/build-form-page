import ReactQuill, { Quill } from 'react-quill';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextEditorWrapper } from '@/components/molecules/TextEditor/styled';
import { DEFAULT_TOOLBAR, RQ_FORMATS } from '@/components/molecules/TextEditor/config';
import { Delta, RangeStatic, Sources } from 'quill';
import { random } from '@/utils/common';
import { handleSelectAll } from '@/components/molecules/TextEditor/ToolBar/SelectAll';
import ToolBar from '@/components/molecules/TextEditor/ToolBar';
import {
  TextEditorConfig,
  TextEditorDefaultConfig,
  Toolbar,
} from '@/components/molecules/TextEditor/types';
import isEqual from 'react-fast-compare';

interface TextEditorProps {
  value: string;
  theme?: string;
  onBlur: () => void;
  ref: React.RefCallback<any>;
  className?: {
    editor?: string;
    toolbar?: string;
  };
  style?: {
    editor?: React.CSSProperties;
    toolbar?: React.CSSProperties;
  };
  boundSelector?: string;
  config?: TextEditorConfig;
  defaultFormat?: TextEditorDefaultConfig;
  defaultValue?: string;
  disabled?: boolean;
  placeholder?: string;
  toolbar?: Toolbar;
  toolbarMode?: 'sticky' | 'tooltip';
  onChange?: (content: string) => void;
  //onChangeSelection?: (range: Quill.RangeStatic, source: Quill.Sources, editor) => void;
}

export const TextEditor: React.FC<TextEditorProps> = props => {
  const {
    onChange,
    onBlur,
    theme,
    placeholder,
    config = {},
    toolbar = DEFAULT_TOOLBAR,
    disabled = false,
    defaultValue = '',
  } = props;
  //const quillRef = useRef<ReactQuill>(null);

  // States
  const [value, setValue] = useState(defaultValue);

  // Ref
  const redoRef = useRef<any[]>([]);
  const undoRef = useRef<any[]>([]);

  const quillRef = useRef<any>();
  const historyRef = useRef<any>({ redoRef, undoRef });

  const ref = useRef<any>({ historyRef, quillRef });

  const textEditorId = useRef<string>('editor-' + random(8));
  const toolbarId = useRef<string>('toolbar-' + random(8));

  // Toolbar Handlers
  const handleSoftBreak = useCallback(function (this: any, range: RangeStatic) {
    this.quill.insertEmbed(range.index, 'softbreak', true, 'user');
    this.quill.setSelection(range.index + 1, 'silent');
  }, []);
  const handleOnChange = (content: string, _delta: Delta, source: Sources) => {
    if (quillRef?.current) {
      const quill = quillRef.current.getEditor();

      const deltaDefault = quill.clipboard.convert(defaultValue);
      const deltaContent = quill.clipboard.convert(content);

      if (!isEqual(deltaDefault, deltaContent) && source === 'user') {
        setValue(content);

        if (onChange) {
          console.log('Change: ', content);
          onChange(content);
        }
      }
    }
  };
  useEffect(() => {
    if (quillRef?.current) {
      const quill = quillRef.current.getEditor();

      quill.clipboard.addMatcher('BR', function (node, delta) {
        let Delta = Quill.import('delta');
        let newDelta = new Delta();

        if (node?.parentElement?.childElementCount > 1) {
          newDelta.insert({ softbreak: true });
        }

        return newDelta;
      });

      quill.root.setAttribute('spellcheck', !disabled + '');
    }
  }, [quillRef, disabled]);
  return (
    <TextEditorWrapper>
      <ToolBar
        config={config}
        // handlers={{
        //   [ToolbarModuleName.REDO]: handleRedo,
        //   [ToolbarModuleName.UNDO]: handleUndo,
        // }}
        id={toolbarId.current}
        ref={ref}
        style={{ height: 117.5, width: 212 }}
        toolbar={toolbar}
      />
      {/*<EditorToolbar quillRef={quillRef} />*/}
      <ReactQuill
        theme={theme}
        value={value || ''}
        onChange={handleOnChange}
        ref={quillRef}
        onBlur={onBlur}
        placeholder={placeholder}
        formats={RQ_FORMATS}
        modules={{
          toolbar: {
            //container: '#bfp-rq-toolbar',
            container: `#${toolbarId.current}`,
            handlers: {
              'select-all': handleSelectAll,
            },
          },
          keyboard: {
            bindings: {
              'shift enter': {
                key: 13,
                shiftKey: true,
                handler: handleSoftBreak,
              },
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


