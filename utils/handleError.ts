// /* eslint-disable no-console */
// import debug from './debug';
//
// // Libraries
// import StackTrace from 'stacktrace-js';
// import get from 'lodash/get';
//
// // Types
// import { TConfigErrorInfo } from './types';
//
// // Utils
// import { getCookie } from 'app/utils/cookie';
// import { checkJSON } from './common';
//
// // Constants
// import { APP_CONFIG } from 'constants/appConfig';
//
// // Services
// import { sendNotify } from 'app/services/Notify';
// import * as thirdInfoServices from 'app/services/3rd/info';
// import * as networkInfoServices from 'app/services/Network';
//
// export const handleError = async (error: any = {}, configInfo: TConfigErrorInfo = {}, isShowMessageError = false) => {
//   const { response, message } = error;
//   const { name: functionName, path, from, priority = 'low', ...restOfConfigInfo } = configInfo;
//
//   let userInfo: Record<string, any> = {};
//
//   if (checkJSON(getCookie(APP_CONFIG.U_OGS) || '')) {
//     userInfo = JSON.parse(getCookie(APP_CONFIG.U_OGS) || '');
//   }
//
//   // Get user info
//   const { data: userData } = await thirdInfoServices.getList({
//     type: 'user-info',
//     userId: userInfo.user_id,
//     networkId: APP_CONFIG.NETWORK_ID,
//   });
//
//   // Get network info
//   const { data: networkData } = await networkInfoServices.getList({ app_id: APP_CONFIG.NETWORK_ID });
//
//   const networkInfo = get(networkData, 'data.networkInfo', {});
//   const user = get(userData, 'data', {});
//
//   const stackTrace = await StackTrace.fromError(error);
//   const stackFrame = stackTrace[0] || {};
//
//   const errorInfo = {
//     functionName: functionName || stackFrame.functionName || '',
//     fileName: path || stackFrame.fileName || '',
//     input: {
//       portal: `${networkInfo.networkName} - ${APP_CONFIG.NETWORK_ID}` || '',
//       user: `${user.email} - ${user.user_id}` || '',
//       token: userInfo.token || '',
//       language: userInfo.language || '',
//       location: window.location.href,
//       userAgent: window.navigator.userAgent,
//     },
//     error: {
//       path: path || stackFrame.fileName || '',
//       name: functionName || stackFrame.functionName || '',
//       line: stackFrame.lineNumber || 0,
//       column: stackFrame.columnNumber || 0,
//       message: message || '',
//       error: error.toString() || '',
//       from: from || 'try-catch',
//       priority,
//       ...restOfConfigInfo,
//     },
//   };
//
//   if (APP_CONFIG.APPLICATION_ENV === 'development') {
//     console.log(errorInfo);
//   } else {
//     await sendNotify(errorInfo);
//   }
//
//   if (response) {
//     debug.error('API', response);
//   }
// };
