// Libraries
import React, { useState } from 'react';
import {
  FontSizeConfig,
  TextEditorConfig,
  TextEditorDefaultConfig,
  Toolbar,
  ToolbarModuleName,
  ToolbarProps,
} from '@/components/molecules/TextEditor/types';
import styled from 'styled-components';
import { FontFamily } from '@/components/molecules/TextEditor/ToolBar/FontFamily';
import {
  DEFAULT_FONT_CONFIGS,
  DEFAULT_FONT_SIZE_CONFIGS,
  DEFAULT_LETTER_SPACING_CONFIGS,
} from '@/components/molecules/TextEditor/config';

// Component

// Style

// Types

const DEFAULT_FONT_FAMILY = { name: 'Montserrat' };
const DEFAULT_FONT_SIZE: FontSizeConfig = { value: '16px', label: '16' };
const DEFAULT_FONT_WEIGHT = 400;

// const DEFAULT_LETTER_SPACING: LetterSpacingConfig = { value: '0px' };
// const DEFAULT_LINE_HEIGHT: LineHeightConfig = { value: 'normal' };
//
// const DEFAULT_TEXT_ALIGN: TextAlignConfig = 'left';
// const DEFAULT_TEXT_TRANSFORM: TextTransformConfig = 'none';
//
// const DEFAULT_HISTORY_DELAY = 500;
// const DEFAULT_HISTORY_MAX_TACK = 1000;

interface ToolBarProps {
  className?: string;
  style?: React.CSSProperties;

  config?: TextEditorConfig;
  defaultFormat?: TextEditorDefaultConfig;
  id: string;
  handlers?: { [key in ToolbarModuleName]?: (...params: any) => void };
  toolbar: Toolbar;
}


// eslint-disable-next-line react/display-name
const ToolBar = React.forwardRef<React.MutableRefObject<any>, ToolbarProps>((props, ref) => {
  const { config = {}, defaultFormat = {}, handlers = {}, id, toolbar } = props;
  const { style } = props;
  const { font = DEFAULT_FONT_CONFIGS } = config;
  const { fontSize = DEFAULT_FONT_SIZE_CONFIGS } = config;
  const { letterSpacing = DEFAULT_LETTER_SPACING_CONFIGS } = config;
  // Refs
  const { historyRef, quillRef } = (ref as React.MutableRefObject<any>).current;
  const { redoRef, undoRef } = (historyRef as React.MutableRefObject<any>).current;

  const { fontFamily: defaultFontFamily = DEFAULT_FONT_FAMILY } = defaultFormat;
  const { fontSize: defaultFontSize = DEFAULT_FONT_SIZE } = defaultFormat;
  const { fontWeight: defaultFontWeight = DEFAULT_FONT_WEIGHT } = defaultFormat;

  // States
  const [selectedFontFamily, setSelectedFontFamily] = useState<{ label?: string; name: string }>(defaultFontFamily);
  const [selectedFontSize, setSelectedFontSize] = useState<FontSizeConfig>(defaultFontSize);
  const [selectedFontWeight, setSelectedFontWeight] = useState<number>(defaultFontWeight);


  // Handle
  const handleOnClick = (event: any) => {
    let ele = event.target;

    if (ele?.classList?.contains('__toolbar-section') || ele?.parentNode?.classList?.contains('__toolbar-section')) {
      const listQuillPickerLabels = document?.querySelectorAll(`#${id} .ql-picker .ql-picker-label`);

      for (let i = 0; i < listQuillPickerLabels.length; i++) {
        let ele = listQuillPickerLabels[i];

        ele?.parentElement?.classList.remove('ql-expanded');
        ele.setAttribute('aria-expanded', 'false');
        ele?.nextElementSibling?.setAttribute('aria-hidden', 'true');
      }
    }
  };

  const handleOnBlur = (event: any) => {
    if (quillRef?.current) {
      if (event?.relatedTarget) {
        quillRef?.current?.getEditor()?.theme?.tooltip.root.setAttribute('aria-keep', 'true');
      } else {
        quillRef?.current?.getEditor()?.theme?.tooltip.root.setAttribute('aria-keep', 'false');
      }
    }
  };

  // Handle Click Toolbar
  const handleSelectFontFamily = (fontFamily: {
    label?: string;
    name: string;
  }) => {
    const fontConfig = font.find(f => f.fontFamily.name === fontFamily.name);

    if (selectedFontFamily.name !== fontFamily.name) {
      setSelectedFontFamily(fontFamily);
    }
    console.log('selected font', fontFamily);
    if (quillRef?.current) {
      const quill = quillRef.current.getEditor();
      const format = quill.getFormat();

      quill.format('font', fontFamily.name, 'user');

      if (
        format?.hasOwnProperty('font-weight') &&
        fontConfig &&
        !fontConfig.fontWeight.includes(+format['font-weight'])
      ) {
        setSelectedFontWeight(fontConfig.fontWeight[0]);
        quill.format('font-weight', `${fontConfig.fontWeight[0]}`, 'user');
      }
    }
  };
  const renderToolbar = () => {
    if (toolbar && Object.keys(toolbar).length) {
      return Object.keys(toolbar)
        .sort()
        .map(toolbarIndex => {
          const toolbarSection = toolbar[toolbarIndex];

          if (toolbarSection && Object.keys(toolbarSection).length) {
            return (
              <div key={toolbarIndex} className='__toolbar-section'>
                {Object.keys(toolbarSection)
                  .sort()
                  .map(sectionIndex => {
                    const toolbarGroup = toolbarSection[sectionIndex];

                    if (toolbarGroup?.length) {
                      return (
                        <span key={sectionIndex} className='ql-formats'>
                          {toolbarGroup.map((module, index) => {
                            switch (module) {

                              case ToolbarModuleName.FONT_FAMILY:
                                return (
                                  <FontFamily
                                    key={index}
                                    preselectedFont={selectedFontFamily}
                                    whitelist={font.map(config => config.fontFamily)}
                                    onChange={handleSelectFontFamily}
                                  />
                                );
                              // case ToolbarModuleName.FONT_SIZE:
                              //   return (
                              //     <FontSize
                              //       key={index}
                              //       preselectedFontSize={selectedFontSize}
                              //       whitelist={fontSize}
                              //       onChange={handleSelectFontSize}
                              //     />
                              //   );

                            }

                            return null;
                          })}
                        </span>
                      );
                    }

                    return null;
                  })}
              </div>
            );
          }

          return null;
        })
        .filter(Boolean);
    }

    return null;
  };


  return (
    <ToolbarWrapper id={id}
      //style={style}
                    className={'flex flex-col justify-evenly min-w-20  min-h-48'}
                    onBlur={handleOnBlur}
                    onClick={handleOnClick}>
      {renderToolbar()}
    </ToolbarWrapper>
  );
});
export const ToolbarWrapper = styled.div`
  ${props => props.className}


`;


export default ToolBar;