import {actionTypesAlert} from '../constants';
type PropsTypes = {
  ruleSeverity: Array<any> | null;
};
type PropsAction = {
    type: string | null,
    payload: Array<any> | string | null,
}
const initialState: PropsTypes = {
  ruleSeverity: null
};
const alertReducer = (state = initialState, action: PropsAction) => {
  switch (action.type) {
    case actionTypesAlert.ruleSeverity:
      return {
        ...state,
        ruleSeverity: action.payload,
      };
    default:
      return {...state};
  }
};

export default alertReducer;
