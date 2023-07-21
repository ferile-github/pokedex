const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.fontSize = {
  'h1' : pxToRem(40),
  'h1-sm' : pxToRem(60),
  'h2' : pxToRem(40),
  'h3' : pxToRem(28),
  'h4' : pxToRem(22),
  'h5' : pxToRem(20),
  'h6' : pxToRem(16),
};

exports.fontWeight = {
  light: '400',
  normal: '400',
  medium: '400',
  semibold: '400',
  bold: '700',
  black: '700',
};

exports.lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.3,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

exports.letterSpacing = {
  normal: '0',
  wide: '0.01em',
  wider: '0.05em',
};

