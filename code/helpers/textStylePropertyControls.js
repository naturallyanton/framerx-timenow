import { ControlType } from 'framer';

export const textStyleDefaultProps = {
  typeface: 'sans-serif',
  weight: '400',
  size: 16,
  style: 'normal',
  color: 'black',
  align: 'left',
  transform: 'none',
};

export const textStylePropertyControls = {
  typeface: { type: ControlType.String, title: 'Typeface' },
  weight: {
    type: ControlType.Enum,
    options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    optionTitles: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    title: 'Weight',
  },
  style: {
    type: ControlType.SegmentedEnum,
    title: ' ',
    options: ['normal', 'italic'],
    optionTitles: ['Normal', 'Italic'],
  },
  size: { type: ControlType.Number, min: 1, title: 'Size' },
  color: { type: ControlType.Color, title: 'Color' },
  align: {
    type: ControlType.SegmentedEnum,
    title: 'Align',
    options: ['left', 'center', 'right', 'justify'],
    optionTitles: ['L', 'C', 'R', 'J'],
  },
  transform: {
    type: ControlType.SegmentedEnum,
    title: 'Transform',
    options: ['capitalize', 'uppercase', 'lowercase', 'none'],
    optionTitles: ['Aa', 'AA', 'aa', '✕'],
  },
};
