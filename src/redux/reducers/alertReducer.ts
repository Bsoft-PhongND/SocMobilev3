import {actionTypesAlert} from '../constants';
type PropsTypes = {
  ruleSeverity: Array<any> | null;
  alertOverTime: Array<any> | null;
};
type PropsAction = {
    type: string | null,
    payload: Array<any> | string | null,
}
const initialState: PropsTypes = {
  ruleSeverity: null, 
  alertOverTime: null
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
    default:
      return {...state};
  }
};

export default alertReducer;
