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
    getRuleNameQuality(rulenames: Array<any>){
        return {
            type: actionTypesAlert.ruleName,
            payload: rulenames
        }
    }
    getLogsBySensor(logs: Array<any>){
        return {
            type: actionTypesAlert.logsBySensor,
            payload: logs
        }
    }
}
export default new AlertActions;