/* eslint-disable no-console */
const debug = {
  log: (title: any, args: any) => {},
  error: (title: any, args: any) => {},
  warning: (args: any) => {},
};

debug.log = (header, args: any) => {
  console.groupCollapsed('%c[LOG] - %s ', 'color: #08979c; font-weight: bold;', header);
  console.log('%c[MESSAGE] - ', 'color: #08979c; font-weight: bold;', args);
  console.groupEnd();
};

debug.error = (header, args: any) => {
  console.groupCollapsed('%c[ERROR] - %s ', 'color: #cf1322; font-weight: bold;', header);
  console.log('%c[MESSAGE] - ', 'color: #cf1322; font-weight: bold;', args);
  console.groupEnd();
};

debug.warning = () => {};

export default debug;
