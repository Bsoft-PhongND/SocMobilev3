import converter from "../../helpers/converter";
import alertActions from "../actions/alertActions";
import request, { api } from "../apiService";

class AlertService {
    async ruleSeverity(dispatch:any, setInvalidToken?:any, timer?:any){
        try {
            const response = await request(api.alert.ruleSeverity);
            console.log(response.status);
            if(response.status === 200 && response.data) {
                const dataConverted = converter.alertSeverity(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleSeverity(dataConverted);
                dispatch(action);
                return response.data;
            }else if(response.status === 401 && setInvalidToken) {  
                setInvalidToken(true);
                clearInterval(timer);
            }
        } catch (error) {
            const action = alertActions.getRuleSeverity(null);
            dispatch(action);
            throw error;
        }
    }
    async alertOverTime(dispatch:any){
        try {
            const response = await request(api.alert.alertOverTime);
            console.log(response.status);
            if(response.status === 200 && response.data) {
                const dataConverted = converter.alertOverTime(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getAlertOverTime(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getAlertOverTime(null);
            dispatch(action);
            throw error;
        }
    }
    async ruleNameQuality(dispatch:any){
        try {
            const response = await request(api.alert.ruleNameQuality);
            console.log(response.status);
            if(response.status === 200 && response.data) {
                const dataConverted = converter.getRuleNameQuality(response.data?.aggregations['2']?.buckets || []);
                const action = alertActions.getRuleNameQuality(dataConverted);
                dispatch(action);
                return response.data;
            }
        } catch (error) {
            const action = alertActions.getRuleNameQuality(null);
            dispatch(action);
            throw error;
        }
    }
}
export default new AlertService;