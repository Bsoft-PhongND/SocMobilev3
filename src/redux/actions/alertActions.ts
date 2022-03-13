import { actionTypesAlert } from "../constants";

class AlertActions {
    getRuleSeverity(dataSeverity: Array<any>){
        return {
            type: actionTypesAlert.ruleSeverity,
            payload: dataSeverity
        }
    }
    getAlertOverTime(dataAlertOverTime: Array<any>){
        return {
            type: actionTypesAlert.alertOverTime,
            payload: dataAlertOverTime
        }
    }
}
export default new AlertActions;