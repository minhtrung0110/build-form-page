import React from 'react';

/* ----------------------- Toolbar Module ----------------------- */

export enum ToolbarModuleName {
  BACKGROUND_COLOR = 'background-color',
  BOLD = 'bold',
  CLEAR_FORMATTING = 'clear-formatting',
  FONT_FAMILY = 'font-family',
  FONT_SIZE = 'font-size',
  FONT_WEIGHT = 'font-weight',
  INDENT_DECREASE = 'indent-decrease',
  INDENT_INCREASE = 'indent-increase',
  ITALIC = 'italic',
  LETTER_SPACING = 'letter-spacing',
  LINE_HEIGHT = 'line-height',
  LIST_BULLET = 'list-bullet',
  LIST_ORDERED = 'list-ordered',
  HYPERLINK = 'hyperlink',
  MERGE_TAG = 'merge-tag',
  REDO = 'redo',
  SELECT_ALL = 'select-all',
  STRIKE_THROUGH = 'strike-through',
  SUB_SCRIPT = 'sub-script',
  SUPER_SCRIPT = 'super-script',
  TEXT_ALIGN = 'text-align',
  TEXT_COLOR = 'text-color',
  TEXT_TRANSFORM = 'text-transform',
  UNDERLINE = 'underline',
  UNDO = 'undo',
}

export type ToolbarModule = ToolbarModuleName;

/* ----------------------- Toolbar Group ----------------------- */

export type ToolbarGroup = Record<string, Array<ToolbarModule>>;

export type Toolbar = Record<string, ToolbarGroup>;

/* Config */
export interface FontConfig {
  fontFamily: {
    label?: string;
    name: string;
  };
  fontWeight: number[];
}

export interface FontSizeConfig {
  label?: string;
  value: string;
}

export interface HistoryConfig {
  delay?: number;
  maxStack?: number;
}

export interface LetterSpacingConfig {
  label?: string;
  value: string;
}

export interface LineHeightConfig {
  label?: string;
  value: string;
}

export type TextAlignConfig = 'left' | 'center' | 'right' | 'justify';
export type TextTransformConfig = 'none' | 'capitalize' | 'uppercase' | 'lowercase';

export interface TextEditorConfig {
  font?: Array<FontConfig>;
  fontSize?: Array<FontSizeConfig>;
  history?: HistoryConfig;
  letterSpacing?: Array<LetterSpacingConfig>;
  lineHeight?: Array<LineHeightConfig>;
  mergeTags?: Array<string>;
}

export interface TextEditorDefaultConfig {
  fontFamily?: { label?: string; name: string };
  fontSize?: FontSizeConfig;
  fontWeight?: number;
  letterSpacing?: LetterSpacingConfig;
  lineHeight?: LineHeightConfig;
  textAlign?: TextAlignConfig;
  textTransform?: TextTransformConfig;
}

/* ----------------------- Props ----------------------- */

export interface ToolbarProps {
  className?: string;
  style?: React.CSSProperties;

  config?: TextEditorConfig;
  defaultFormat?: TextEditorDefaultConfig;
  id: string;
  handlers?: { [key in ToolbarModuleName]?: (...params: any) => void };
  toolbar: Toolbar;
}

export interface TextEditorProps {
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
  placeholder?: '';
  toolbar?: Toolbar;
  toolbarMode?: 'sticky' | 'tooltip';

  onChange?: (content: string) => void;
  //onChangeSelection?: (range: Quill.RangeStatic, source: Quill.Sources, editor) => void;
}
