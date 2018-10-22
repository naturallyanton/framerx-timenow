import * as React from 'react';
import { PropertyControls, ControlType } from 'framer';
import * as moment from 'moment';
import { locales } from './data/locales';
import { formats } from './helpers/formats';
import {
  textStyleDefaultProps,
  textStylePropertyControls,
} from './helpers/textStylePropertyControls';

export class TimeNow extends React.Component {
  static defaultProps = {
    format: 'HH:mm:ss',
    customFormat: undefined,
    locale: 'en',
    ...textStyleDefaultProps,
  };

  static propertyControls = {
    format: {
      type: ControlType.Enum,
      title: 'Format',
      options: [...formats, 'custom'],
      optionTitles: [...formats, 'Custom'],
    },
    customFormat: {
      type: ControlType.String,
      title: ' ',
      placeholder: 'bit.ly/moment_formats',
      hidden: (props) => props.format !== 'custom',
    },
    locale: {
      type: ControlType.Enum,
      title: 'Locale',
      options: locales.map((locale) => locale.code),
      optionTitles: locales.map((locale) => `${locale.country} (${locale.code})`),
    },
    ...textStylePropertyControls,
  };

  state = {
    time: moment,
  };

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState({ time: moment });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  render() {
    const {
      format,
      customFormat,
      color,
      typeface: fontFamily,
      weight: fontWeight,
      size: fontSize,
      style: fontStyle,
      align: textAlign,
      transform: textTransform,
      ...props
    } = this.props;
    const { time } = this.state;
    const _format = (format !== 'custom' && format) || customFormat;

    return (
      <div
        style={{
          color,
          fontFamily,
          fontWeight,
          fontSize,
          fontStyle,
          textAlign,
          textTransform,
          overflow: 'hidden',
          height: '100%',
        }}
        {...props}>
        {time()
          .locale(this.props.locale)
          .format(_format)}
      </div>
    );
  }
}
