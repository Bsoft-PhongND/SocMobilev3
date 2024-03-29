import {actionTypesAlert} from '../constants';
type PropsTypes = {
  ruleSeverity: Array<any> | null;
  alertOverTime: Array<any> | null;
  ruleNameQuality: Array<any> | null;
  logsBySensor: Array<any> | null;
  ruleCategory: Array<any> | null;
  alertsSent: Array<any> | null;
};
type PropsAction = {
  type: string | null;
  payload: Array<any> | string | null;
};
const initialState: PropsTypes = {
  ruleSeverity: null,
  alertOverTime: null,
  ruleNameQuality: null,
  logsBySensor: null,
  ruleCategory: null,
  alertsSent: null,
};
const alertReducer = (state = initialState, action: PropsAction) => {
  switch (action.type) {
    case actionTypesAlert.ruleSeverity:
      return {
        ...state,
        ruleSeverity: action.payload,
      };
    case actionTypesAlert.alertOverTime:
      return {
        ...state,
        alertOverTime: action.payload,
      };
    case actionTypesAlert.ruleName:
      return {
        ...state,
        ruleNameQuality: action.payload,
      };
    case actionTypesAlert.logsBySensor:
      return {
        ...state,
        logsBySensor: action.payload,
      };
    case actionTypesAlert.ruleCategory:
      return {
        ...state,
        ruleCategory: action.payload,
      };
    case actionTypesAlert.alertsSent:
      return {
        ...state,
        alertsSent: action.payload,
      };
      case actionTypesAlert.loadMore:
        console.log(action.payload);
        
      return {
        ...state,
        alertsSent: action.payload?state.alertsSent?.push(...action.payload):state.alertsSent,
      };
    default:
      return {...state};
  }
};

export default alertReducer;
