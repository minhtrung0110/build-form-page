import {
  FontConfig,
  FontSizeConfig,
  LetterSpacingConfig,
  Toolbar,
  ToolbarModuleName,
} from '@/components/molecules/TextEditor/types';

export const DEFAULT_TOOLBAR: Toolbar = {
  section1: {
    group1: [
      ToolbarModuleName.FONT_FAMILY,
      ToolbarModuleName.FONT_SIZE,
      ToolbarModuleName.BOLD,
      ToolbarModuleName.ITALIC,
      ToolbarModuleName.UNDERLINE,
      ToolbarModuleName.HYPERLINK,
    ],
    group2: [
      ToolbarModuleName.STRIKE_THROUGH,
      ToolbarModuleName.SUB_SCRIPT,
      ToolbarModuleName.SUPER_SCRIPT,
    ],
    group3: [
      ToolbarModuleName.FONT_WEIGHT,
      ToolbarModuleName.TEXT_TRANSFORM,
      ToolbarModuleName.TEXT_COLOR,
      ToolbarModuleName.BACKGROUND_COLOR,
      ToolbarModuleName.MERGE_TAG,
    ],
  },
  section2: {
    group1: [
      ToolbarModuleName.LIST_ORDERED,
      ToolbarModuleName.LIST_BULLET,
      ToolbarModuleName.TEXT_ALIGN,
      ToolbarModuleName.LINE_HEIGHT,
      ToolbarModuleName.LETTER_SPACING,
      ToolbarModuleName.INDENT_INCREASE,
      ToolbarModuleName.INDENT_DECREASE,
    ],
    group2: [
      ToolbarModuleName.UNDO,
      ToolbarModuleName.REDO,
      ToolbarModuleName.SELECT_ALL,
      ToolbarModuleName.CLEAR_FORMATTING,
    ],
  },
};
export const DEFAULT_FONT_CONFIGS: FontConfig[] = [
  {
    fontFamily: { name: 'Arial' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Georgia' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Helvetica' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Helvetica Neue' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Lucida Grande' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Tahoma' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Times New Roman' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Verdana' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Abril Fatface' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Aleo' },
    fontWeight: [300, 400, 700],
  },
  {
    fontFamily: { name: 'Arvo' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Bitter' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Bree Serif' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Cabin' },
    fontWeight: [400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'Cookie' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Delius Swash Caps' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Dosis' },
    fontWeight: [200, 300, 400, 500, 600, 700, 800],
  },
  {
    fontFamily: { name: 'Droid Sans' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Droid Serif' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'EB Garamond' },
    fontWeight: [400, 500, 600, 700, 800],
  },
  {
    fontFamily: { name: 'Josefin Slab' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'Just Another Hand' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Lakki Reddy' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Lato' },
    fontWeight: [100, 300, 400, 700, 900],
  },
  {
    fontFamily: { name: 'Libre Baskerville' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Lobster' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Lora' },
    fontWeight: [400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'Mali' },
    fontWeight: [200, 300, 400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'Merriweather' },
    fontWeight: [300, 400, 700, 900],
  },
  {
    fontFamily: { name: 'Montserrat' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Noto Sans' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Noto Serif' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Nunito' },
    fontWeight: [200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Open Sans' },
    fontWeight: [300, 400, 500, 600, 700, 800],
  },
  {
    fontFamily: { name: 'Oswald' },
    fontWeight: [200, 300, 400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'PT Sans' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'PT Serif' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Pinyon Script' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Playfair Display' },
    fontWeight: [400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Poppins' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Quicksand' },
    fontWeight: [300, 400, 500, 600, 700],
  },
  {
    fontFamily: { name: 'Raleway' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Righteous' },
    fontWeight: [400],
  },
  {
    fontFamily: { name: 'Roboto' },
    fontWeight: [100, 300, 400, 500, 700, 900],
  },
  {
    fontFamily: { name: 'Roboto Slab' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Rubik' },
    fontWeight: [300, 400, 500, 600, 700, 800, 900],
  },
  {
    fontFamily: { name: 'Sacramento' },
    fontWeight: [400, 700],
  },
  {
    fontFamily: { name: 'Sarabun' },
    fontWeight: [100, 200, 300, 400, 500, 600, 700, 800],
  },
  {
    fontFamily: { name: 'Source Sans Pro' },
    fontWeight: [200, 300, 400, 600, 700, 900],
  },
  {
    fontFamily: { name: 'Ubuntu' },
    fontWeight: [200, 300, 400, 600, 700, 900],
  },
  {
    fontFamily: { name: 'Vollkorn' },
    fontWeight: [400, 500, 600, 700, 800, 900],
  },
];
export const DEFAULT_FONT_SIZE_CONFIGS: FontSizeConfig[] = [
  { value: '8px', label: '8' },
  { value: '9px', label: '9' },
  { value: '10px', label: '10' },
  { value: '11px', label: '11' },
  { value: '12px', label: '12' },
  { value: '13px', label: '13' },
  { value: '14px', label: '14' },
  { value: '15px', label: '15' },
  { value: '16px', label: '16' },
  { value: '17px', label: '17' },
  { value: '18px', label: '18' },
  { value: '19px', label: '19' },
  { value: '20px', label: '20' },
  { value: '21px', label: '21' },
  { value: '22px', label: '22' },
  { value: '23px', label: '23' },
  { value: '24px', label: '24' },
  { value: '25px', label: '25' },
  { value: '26px', label: '26' },
  { value: '27px', label: '27' },
  { value: '28px', label: '28' },
  { value: '29px', label: '29' },
  { value: '30px', label: '30' },
  { value: '31px', label: '31' },
  { value: '32px', label: '32' },
  { value: '33px', label: '33' },
  { value: '34px', label: '34' },
  { value: '35px', label: '35' },
  { value: '36px', label: '36' },
  { value: '38px', label: '38' },
  { value: '40px', label: '40' },
  { value: '42px', label: '42' },
  { value: '44px', label: '44' },
  { value: '46px', label: '46' },
  { value: '48px', label: '48' },
  { value: '50px', label: '50' },
  { value: '52px', label: '52' },
  { value: '54px', label: '54' },
  { value: '56px', label: '56' },
  { value: '58px', label: '58' },
  { value: '60px', label: '60' },
  { value: '64px', label: '64' },
  { value: '68px', label: '68' },
  { value: '72px', label: '72' },
  { value: '76px', label: '76' },
  { value: '80px', label: '80' },
  { value: '84px', label: '84' },
  { value: '88px', label: '88' },
  { value: '92px', label: '92' },
  { value: '96px', label: '96' },
];
export const DEFAULT_LETTER_SPACING_CONFIGS: LetterSpacingConfig[] = [
  { value: '-10px', label: '-10' },
  { value: '-9px', label: '-9' },
  { value: '-8px', label: '-8' },
  { value: '-7px', label: '-7' },
  { value: '-6px', label: '-6' },
  { value: '-5px', label: '-5' },
  { value: '-4px', label: '-4' },
  { value: '-3px', label: '-3' },
  { value: '-2px', label: '-2' },
  { value: '-1px', label: '-1' },
  { value: '0px', label: '0' },
  { value: '1px', label: '1' },
  { value: '2px', label: '2' },
  { value: '3px', label: '3' },
  { value: '4px', label: '4' },
  { value: '5px', label: '5' },
  { value: '6px', label: '6' },
  { value: '7px', label: '7' },
  { value: '8px', label: '8' },
  { value: '9px', label: '9' },
  { value: '10px', label: '10' },
];

export const RQ_FORMATS = [
  'font',
];

