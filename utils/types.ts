export type TConfigErrorInfo = {
  [key: string]: any;
  path?: string;
  action?: string;
  name?: string;
  args?: any;
  priority?: 'low' | 'medium' | 'high';
  from?: 'try-catch' | 'error-boundary';
};
