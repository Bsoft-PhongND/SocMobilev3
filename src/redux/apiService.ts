import axios, {Method} from 'axios';
import { AppSettings } from '../config';
const request = (
  endpoint: string,
  method?: Method,
  body?: string,
  params?: any,
) => {
  const promise = axios({
    url: AppSettings.domainServer+endpoint,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      // "authorization":`Bear ${appSettings.token}`
    },
    data: body,
    params: params,
    timeout: 10000,
  });
  console.log(AppSettings.domainServer+endpoint);
  return promise;
};
export default request;
export const api = {
  alert:{
    ruleSeverity:'/data-sharing/alerts/ruleseverity',
    alertOverTime:'/data-sharing/alerts/alertsovertime'
  }
}