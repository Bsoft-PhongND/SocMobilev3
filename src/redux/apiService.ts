import axios, {Method} from 'axios';
import { AppSettings } from '../config';
const request = (
  endpoint: string,
  method?: Method,
  body?: any,
  params?: any,

) => {
  const promise = axios({
    url: AppSettings.domainServer+endpoint,
    method: method,
    headers: {
      'Content-Type': 'application/json',
      "authorization":`Bear ${AppSettings.token}`
    },
    data: body,
    params: params,
    timeout: 20000,
    validateStatus: function (status) {
      return status >= 200 && status < 404; // default
    },
  });
  console.log(AppSettings.domainServer+endpoint);
  return promise;
};
export default request;
export const api = {
  alert:{
    ruleSeverity:'/data-sharing/alerts/ruleseverity',
    alertOverTime:'/data-sharing/alerts/alertsovertime',
    ruleNameQuality:'/data-sharing/alerts/rulename',
    logsBySensor:'/data-sharing/alerts/logsbysensor',
    ruleCategory:'/data-sharing/alerts/rulecategory',
    alertSent:'/data-sharing/alerts/queryAll'
  },
  user:{
    login:'/data-sharing/users/login'
  }
}