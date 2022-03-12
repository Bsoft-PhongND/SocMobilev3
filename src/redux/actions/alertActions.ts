import { actionTypesAlert } from "../constants";

class AlertActions {
    getRuleSeverity(dataSeverity: Array<any>){
        return {
            type: actionTypesAlert.ruleSeverity,
            payload: dataSeverity
        }
    }
}
export default new AlertActions;