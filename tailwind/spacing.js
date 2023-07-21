const { pxToRem } = require('@captaincss/captaincss/helpers');

exports.spacing = {
  0 : '0',
  gutter: pxToRem(24),
  xxs: pxToRem(5),
  xs: pxToRem(10),
  ssm: pxToRem(15),
  sm: pxToRem(20),
  md: pxToRem(30),
  lg: pxToRem(40),
  llg: pxToRem(60),
  xl: pxToRem(80),
  xxl: pxToRem(120),
};
